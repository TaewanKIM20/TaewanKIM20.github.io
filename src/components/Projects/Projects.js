import { useContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import CloseIcon from '@material-ui/icons/Close'
import LaunchIcon from '@material-ui/icons/Launch'
import { ThemeContext } from '../../contexts/theme'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const ProjectDetail = ({ project, onClose, themeName }) => {
  const closeButton = useRef(null)

  useEffect(() => {
    closeButton.current?.focus()
  }, [])

  return createPortal(
    <div
      className={`project-modal ${themeName}`}
      role='presentation'
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <article className='project-sheet' role='dialog' aria-modal='true' aria-labelledby='project-detail-title'>
        <header className='project-sheet__header'>
          <p>{project.category} · {project.year}</p>
          <button ref={closeButton} type='button' onClick={onClose} aria-label='프로젝트 상세 닫기'>
            <CloseIcon />
          </button>
        </header>

        <div className='project-sheet__title'>
          <h3 id='project-detail-title'>{project.name}</h3>
          <p>{project.description}</p>
        </div>

        <figure className='project-sheet__media'>
          <img src={project.image} alt={project.imageAlt} />
          <figcaption>{project.imageAlt}</figcaption>
        </figure>

        <dl className='project-sheet__facts'>
          <div><dt>담당</dt><dd>{project.role}</dd></div>
          <div><dt>상태</dt><dd>{project.state}</dd></div>
          {project.facts.map((fact) => (
            <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
          ))}
        </dl>

        <section className='project-sheet__decision'>
          <p>핵심 판단</p>
          <h4>{project.decision}</h4>
        </section>

        <div className='project-sheet__details'>
          {project.details.map((detail, index) => (
            <section key={detail.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h4>{detail.title}</h4><p>{detail.text}</p></div>
            </section>
          ))}
        </div>

        {project.gallery && (
          <section className='project-sheet__gallery' aria-label='프로젝트 세부 화면'>
            {project.gallery.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.alt} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </section>
        )}

        <footer className='project-sheet__footer'>
          <div>
            <p>결과</p>
            <ul>{project.results.map((result) => <li key={result}>{result}</li>)}</ul>
          </div>
          <div>
            <p>기술</p>
            <p>{project.stack.join(' · ')}</p>
          </div>
          {project.sourceCode && (
            <a href={project.sourceCode} target='_blank' rel='noreferrer'>GitHub <LaunchIcon fontSize='small' /></a>
          )}
        </footer>
      </article>
    </div>,
    document.body
  )
}

const Projects = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const [selectedProject, setSelectedProject] = useState(null)
  const lastTrigger = useRef(null)

  const openProject = (project) => {
    lastTrigger.current = document.activeElement
    setSelectedProject(project)
  }

  const closeProject = () => {
    setSelectedProject(null)
    requestAnimationFrame(() => lastTrigger.current?.focus())
  }

  useEffect(() => {
    if (!selectedProject) return undefined
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => event.key === 'Escape' && closeProject()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section id='projects' className='projects section-shell' aria-labelledby='projects-title'>
      <div className='section-heading'>
        <p className='section-index'>SELECTED WORK · 7</p>
        <h2 id='projects-title'>작업 인덱스</h2>
        <p>출시와 운영, 해커톤에서 맡은 역할과 결과를 시간순으로 정리했습니다. 항목을 선택하면 설계 판단과 구현 과정을 볼 수 있습니다.</p>
      </div>

      <div className='projects__index-head' aria-hidden='true'>
        <span>No.</span>
        <span>Project / Role</span>
        <span>Outcome</span>
        <span>Screen</span>
        <span />
      </div>
      <div className='projects__list'>
        {projects.map((project, index) => (
          <ProjectContainer key={project.name} project={project} index={index} onSelect={() => openProject(project)} />
        ))}
      </div>

      {selectedProject && <ProjectDetail project={selectedProject} onClose={closeProject} themeName={themeName} />}
    </section>
  )
}

export default Projects
