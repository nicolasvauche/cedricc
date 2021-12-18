import { Link } from 'react-router-dom'

import './Homepage.scss'
import logo from '../assets/images/logo_cedricc_full.svg'
import logo2 from '../assets/images/logo_quauthly_full.svg'

const Homepage = () => (
  <section className='home'>
    <Link to='/cedricc'>
      <img src={logo} className='app_logo' alt='logo Cédricc' />
    </Link>
    <Link to='/quauthly'>
      <img src={logo2} className='app_logo' alt='logo Quauthly' />
    </Link>
  </section>
)

export default Homepage
