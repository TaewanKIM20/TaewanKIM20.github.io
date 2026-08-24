import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => (
  <section className='contact section-shell' id='contact' aria-labelledby='contact-title'>
    <p className='section-index'>04 / CONTACT</p>
    <div className='contact__content'>
      <h2 id='contact-title'>Contact</h2>
      <a href={`mailto:${contact.email}`} className='contact__mail'>
        <span>{contact.email}</span>
        <ArrowForwardIcon />
      </a>
    </div>
  </section>
)

export default Contact
