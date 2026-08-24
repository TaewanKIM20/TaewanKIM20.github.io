import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { about, experiences, profileHighlights } from '../../portfolio'
import './About.css'

const ExternalLink = ({ href, label, children, className = '' }) => (
  <a
    href={href}
    aria-label={label}
    className={className}
    target='_blank'
    rel='noreferrer'
  >
    {children}
  </a>
)

const showProfileFallback = (event) => {
  const image = event.currentTarget
  image.onerror = null
  image.src = about.photoFallback
}

const About = () => (
  <>
    <section className='hero' aria-labelledby='hero-title'>
      <div className='hero__main'>
        <p className='eyebrow'>{about.eyebrow}</p>
        <h1 id='hero-title'>
          {about.headline.split('\n').map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className='hero__description'>{about.description}</p>
        <p className='hero__detail'>{about.detail}</p>

        <div className='hero__actions'>
          <a href='#projects' className='button button--primary'>
            프로젝트 보기 <ArrowForwardIcon fontSize='small' />
          </a>
          <ExternalLink href={about.resume} label='이력서 새 창에서 열기' className='text-link'>
            이력서 <span aria-hidden='true'>↗</span>
          </ExternalLink>
          <ExternalLink href={about.social.github} label='GitHub 새 창에서 열기' className='icon-link'>
            <GitHubIcon fontSize='small' />
          </ExternalLink>
          <ExternalLink href={about.social.linkedin} label='LinkedIn 새 창에서 열기' className='icon-link'>
            <LinkedInIcon fontSize='small' />
          </ExternalLink>
        </div>
      </div>

      <aside className='hero__aside' aria-label='프로필 요약'>
        <img
          className='profile-photo'
          src={about.photo}
          alt={`${about.name} 프로필`}
          onError={showProfileFallback}
        />
        <p className='profile-status'><span aria-hidden='true' /> Available for new opportunities</p>
        <p className='profile-name'>{about.name}</p>
        <p className='profile-role'>Software Engineer</p>
        <dl className='profile-facts'>
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>

    <section id='about' className='career section-shell' aria-labelledby='career-title'>
      <div className='section-heading section-heading--split'>
        <div>
          <p className='section-index'>01 / ABOUT</p>
          <h2 id='career-title'>경력과 경험</h2>
        </div>
        <p>학업부터 현재 개발 업무까지, 경험을 시간 순서대로 정리했습니다.</p>
      </div>

      <div className='career__layout'>
        <aside className='career__highlights' aria-label='학력 자격 수상'>
          <section>
            <span>EDUCATION</span>
            <h3>{profileHighlights.education}</h3>
          </section>
          <section>
            <span>CERTIFICATIONS</span>
            <ul>
              {profileHighlights.certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </section>
          <section>
            <span>AWARD</span>
            <h3>{profileHighlights.award}</h3>
          </section>
        </aside>

        <div className='career__timeline-meta' aria-hidden='true'>
          <span>START · 2019</span>
          <span>CHRONOLOGICAL FLOW</span>
          <span>NOW · 2026</span>
        </div>

        <div className='career__timeline-wrap'>
          <svg
            className='career__snake'
            viewBox='0 0 1044 400'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <path d='M22 50 H1022 Q1042 50 1042 70 V130 Q1042 150 1022 150 H22 Q2 150 2 170 V230 Q2 250 22 250 H1022 Q1042 250 1042 270 V330 Q1042 350 1022 350 H22' />
          </svg>

          <ol className='career__timeline'>
            {experiences.map((experience) => (
              <li key={`${experience.organization}-${experience.period}`}>
                <time>{experience.period}</time>
                <div>
                  <div className='career__title-row'>
                    <h3>{experience.organization}</h3>
                    <p className='career__role'>{experience.role}</p>
                  </div>
                  {experience.relation && <p className='career__relation'>{experience.relation}</p>}
                  <p className='career__description'>{experience.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  </>
)

export default About
