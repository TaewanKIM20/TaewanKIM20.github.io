import { useContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import CloseIcon from '@material-ui/icons/Close'
import LaunchIcon from '@material-ui/icons/Launch'
import { ThemeContext } from '../../contexts/theme'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const statusLegend = [
  { tone: 'active', label: '운영 중' },
  { tone: 'building', label: '개발 중' },
  { tone: 'complete', label: '구현 완료' },
  { tone: 'sunset', label: '서비스 종료' },
  { tone: 'hackathon', label: '해커톤' },
]

const LeadParagraph = ({ text }) => {
  const boundary = text.indexOf('. ')
  const lead = boundary === -1 ? text : text.slice(0, boundary + 1)
  const rest = boundary === -1 ? '' : text.slice(boundary + 2)

  return (
    <p>
      <strong>{lead}</strong>
      {rest && ` ${rest}`}
    </p>
  )
}

const ProjectFlow = ({ label, items }) => (
  <figure className='project-modal__flow'>
    <figcaption>{label}</figcaption>
    <ol>
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{item}</strong>
        </li>
      ))}
    </ol>
  </figure>
)

const ProjectDetail = ({ project, onClose, themeName }) => {
  const closeButton = useRef(null)

  useEffect(() => {
    closeButton.current?.focus()
  }, [])

  return createPortal(
    <div
      className={`project-modal ${themeName} project-modal--${project.statusTone}`}
      role='presentation'
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <article
        className='project-modal__panel'
        role='dialog'
        aria-modal='true'
        aria-labelledby='project-detail-title'
      >
        <header className='project-modal__header'>
          <div>
            <p>{project.category} · {project.year}</p>
            <h3 id='project-detail-title'>{project.name}</h3>
          </div>
          <button ref={closeButton} type='button' onClick={onClose} aria-label='프로젝트 상세 닫기'>
            <CloseIcon />
          </button>
        </header>

        <figure className='project-modal__media'>
          <img src={project.image} alt={project.imageAlt} />
          <figcaption>{project.name} · Platform view</figcaption>
        </figure>

        <div className='project-modal__intro'>
          <p>{project.description}</p>
          <dl>
            <div>
              <dt>ROLE</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>STATUS</dt>
              <dd>{project.state}</dd>
            </div>
          </dl>
        </div>

        <dl className='project-modal__facts'>
          {project.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <section className='project-modal__focus' aria-label='프로젝트 핵심 역량'>
          <p>CAPABILITIES</p>
          <ul>
            {project.focus.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className='project-modal__decision'>
          <p>KEY DECISION</p>
          <h4>{project.decision}</h4>
        </section>

        <section className='project-modal__visuals' aria-label='프로젝트 구조와 진행 흐름'>
          <ProjectFlow label='SYSTEM FLOW' items={project.architecture} />
          <ProjectFlow label='DELIVERY FLOW' items={project.journey} />
        </section>

        {project.gallery && (
          <section className='project-modal__gallery' aria-label='프로젝트 세부 이미지'>
            {project.gallery.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.alt} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </section>
        )}

        <div className='project-modal__details'>
          {project.details.map((detail, index) => (
            <section key={detail.title}>
              <span>0{index + 1}</span>
              <div>
                <h4>{detail.title}</h4>
                <LeadParagraph text={detail.text} />
              </div>
            </section>
          ))}
        </div>

        <footer className='project-modal__footer'>
          <div>
            <p>RESULTS</p>
            <ul>
              {project.results.map((result) => <li key={result}>{result}</li>)}
            </ul>
          </div>
          <div>
            <p>STACK</p>
            <ul className='project-modal__stack'>
              {project.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          {project.sourceCode && (
            <a href={project.sourceCode} target='_blank' rel='noreferrer'>
              GitHub <LaunchIcon fontSize='small' />
            </a>
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
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeProject()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section id='projects' className='projects section-shell' aria-labelledby='projects-title'>
      <div className='section-heading section-heading--split'>
        <div>
          <p className='section-index'>02 / SELECTED WORK</p>
          <h2 id='projects-title'>선택한 프로젝트</h2>
        </div>
        <div className='projects__guide'>
          <p>카드를 선택하면 프로젝트에서 맡은 역할과 기술적 판단을 자세히 볼 수 있습니다.</p>
          <ul className='projects__legend' aria-label='프로젝트 상태 색상 안내'>
            {statusLegend.map((item) => (
              <li key={item.tone} className={`projects__legend-item projects__legend-item--${item.tone}`}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='projects__grid'>
        {projects.map((project, index) => (
          <ProjectContainer
            key={project.name}
            project={project}
            index={index}
            onSelect={() => openProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={closeProject} themeName={themeName} />
      )}
    </section>
  )
}

export default Projects
