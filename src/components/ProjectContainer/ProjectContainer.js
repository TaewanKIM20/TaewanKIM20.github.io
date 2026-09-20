import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import './ProjectContainer.css'

const ProjectContainer = ({ project, index, onSelect }) => (
  <article className='project-index-item'>
    <button type='button' onClick={onSelect} aria-label={`${project.name} 상세 보기`}>
      <span className='project-index-item__number'>{String(index + 1).padStart(2, '0')}</span>

      <span className='project-index-item__body'>
        <span className='project-index-item__meta'>{project.category} · {project.year}</span>
        <strong>{project.name}</strong>
        <span className='project-index-item__role'>{project.role}</span>
        <span className='project-index-item__description'>{project.description}</span>
      </span>

      <span className='project-index-item__proof'>
        <span>대표 결과</span>
        <strong>{project.results[0]}</strong>
      </span>

      <span className='project-index-item__image'>
        <img src={project.image} alt={project.imageAlt} loading='lazy' />
      </span>

      <span className='project-index-item__action' aria-hidden='true'>
        <ArrowForwardIcon />
      </span>
    </button>
  </article>
)

export default ProjectContainer
