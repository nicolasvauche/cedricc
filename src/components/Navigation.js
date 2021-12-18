import { Link } from 'react-router-dom'

import './Navigation.scss'

const Navigation = ({ theme }) => (
  <nav className={'app_navigation ' + theme}>
    {theme === 'cedricc' && (
      <Link to='/cedricc/contact'>
        <span className='material-icons-outlined'>mail</span>
      </Link>
    )}

    {theme === 'quauthly' && (
      <Link to='/quauthly/contact'>
        <span className='material-icons-outlined'>mail</span>
      </Link>
    )}

    <Link to='#'>
      <span className='material-icons-outlined'>call</span>
    </Link>
  </nav>
)

export default Navigation
