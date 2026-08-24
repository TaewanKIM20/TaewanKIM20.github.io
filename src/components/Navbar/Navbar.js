import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)
  const closeNavList = () => setShowNavList(false)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item'>
          <a href='#about' onClick={closeNavList}>소개</a>
        </li>
        <li className='nav__list-item'>
          <a href='#projects' onClick={closeNavList}>프로젝트</a>
        </li>
        <li className='nav__list-item'>
          <a href='#skills' onClick={closeNavList}>역량</a>
        </li>
        <li className='nav__list-item'>
          <a href='#contact' onClick={closeNavList}>연락</a>
        </li>
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label={themeName === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label={showNavList ? '메뉴 닫기' : '메뉴 열기'}
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
