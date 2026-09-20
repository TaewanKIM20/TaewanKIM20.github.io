import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { about, experiences, profileHighlights } from '../../portfolio'
import './About.css'

const ExternalLink = ({ href, label, children, className = '' }) => (
  <a href={href} aria-label={label} className={className} target='_blank' rel='noreferrer'>{children}</a>
)

const showProfileFallback = (event) => {
  const image = event.currentTarget
  image.onerror = null
  image.src = about.photoFallback
}

const About = () => (
  <>
    <section className='hero' aria-labelledby='hero-title'>
      <div className='hero__portrait'>
        <img src={about.photo} alt={`${about.name} 프로필`} onError={showProfileFallback} />
      </div>
      <div className='hero__content'>
        <p className='eyebrow'>{about.eyebrow}</p>
        <h1 id='hero-title'>
          {about.headline.split('\n').map((line) => <span key={line}>{line}</span>)}
        </h1>
        <p className='hero__description'>{about.description}</p>
        <p className='hero__detail'>{about.detail}</p>
        <div className='hero__actions'>
          <a href='#projects' className='button button--primary'>프로젝트 보기 <ArrowForwardIcon fontSize='small' /></a>
          <ExternalLink href={about.resume} label='이력서 새 창에서 열기' className='text-link'>이력서 ↗</ExternalLink>
          <ExternalLink href={about.social.github} label='GitHub 새 창에서 열기' className='icon-link'><GitHubIcon fontSize='small' /></ExternalLink>
          <ExternalLink href={about.social.linkedin} label='LinkedIn 새 창에서 열기' className='icon-link'><LinkedInIcon fontSize='small' /></ExternalLink>
        </div>
      </div>
      <dl className='hero__facts'>
        {about.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
      </dl>
    </section>

    <section id='about' className='career section-shell' aria-labelledby='career-title'>
      <div className='section-heading'>
        <p className='section-index'>BACKGROUND</p>
        <h2 id='career-title'>경력과 경험</h2>
        <p>제품 개발, 교육, 창업을 오가며 실제 사용되는 소프트웨어를 만들었습니다.</p>
      </div>

      <div className='career__profile'>
        <p>{profileHighlights.education}</p>
        <p>{profileHighlights.certifications.join(' · ')}</p>
        <p>{profileHighlights.award}</p>
      </div>

      <ol className='career__list'>
        {experiences.map((experience) => (
          <li key={`${experience.organization}-${experience.period}`}>
            <time>{experience.period}</time>
            <div>
              <h3>{experience.organization}</h3>
              <p className='career__role'>{experience.role}</p>
              {experience.relation && <p className='career__relation'>{experience.relation}</p>}
            </div>
            <p className='career__description'>{experience.description}</p>
          </li>
        ))}
      </ol>
    </section>
  </>
)

export default About
