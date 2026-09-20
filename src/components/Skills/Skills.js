import { skillGroups } from '../../portfolio'
import './Skills.css'

const Skills = () => (
  <section className='skills section-shell' id='skills' aria-labelledby='skills-title'>
    <div className='section-heading'>
      <div>
        <p className='section-index'>CAPABILITIES</p>
        <h2 id='skills-title'>기술과 역량</h2>
      </div>
      <p>프로젝트에서 실제로 설계·구현·운영한 기술을 역할별로 정리했습니다.</p>
    </div>
    <div className='skills__grid'>
      {skillGroups.map((group) => (
        <article className='skill-group' key={group.title}>
          <div className='skill-group__header'>
            <span>{group.number}</span>
            <h3>{group.title}</h3>
          </div>
          <p>{group.description}</p>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
)

export default Skills
