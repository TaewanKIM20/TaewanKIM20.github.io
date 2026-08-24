import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import './ProjectContainer.css'

const ProjectContainer = ({ project, index, onSelect }) => (
  <article className={`project-card project-card--${project.statusTone}`}>
    <button type='button' onClick={onSelect} aria-label={`${project.name} 상세 보기`}>
      <span className='project-card__top'>
        <span className='project-card__number'>0{index + 1}</span>
        <span className='project-card__state'>{project.state}</span>
      </span>
      <span className='project-card__category'>{project.category} · {project.year}</span>
      <strong>{project.name}</strong>
      <span className='project-card__description'>{project.description}</span>
      <span className='project-card__stack'>
        {project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
      </span>
      <span className='project-card__proof'>{project.results[0]}</span>
      <span className='project-card__action'>
        자세히 보기 <ArrowForwardIcon fontSize='small' />
      </span>
    </button>
  </article>
)

export default ProjectContainer
