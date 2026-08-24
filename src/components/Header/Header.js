import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header'>
      <a href={homepage} className='brand' aria-label='김태완 포트폴리오 홈'>
        {title}
      </a>
      <Navbar />
    </header>
  )
}

export default Header
