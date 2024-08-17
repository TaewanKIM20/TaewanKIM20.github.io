import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../../portfolio';
import './About.css';

const About = () => {
  const { name, role, description1, description2, description3, description4, description5, description6, resume, social } = about;

  return (
    <div className='about center'>
      <div className="about__container">
        <div className="about__left">
          {name && (
            <h2>
              I am <span className='about__name'>{name}</span>
            </h2>
          )}
          {role && <h3 className='about__role'>A {role}</h3>}
          <p className='about__desc'>{description1}</p>
        </div>

        <div className="about__right">
          <ul className="coding-list">
            March, 2019 {description2 && <li>{description2}</li>}
            July, 2023 {description3 && <li>{description3}</li>}
            September, 2023 {description4 && <li>{description4}</li>}
            May, 2024 {description5 && <li>{description5}</li>}
            June, 2024 {description6 && <li>{description6}</li>}
          </ul>
        </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a href={social.github} aria-label='github' className='link link--icon'>
                <GitHubIcon />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} aria-label='linkedin' className='link link--icon'>
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default About;
