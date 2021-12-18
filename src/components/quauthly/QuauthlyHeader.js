import { Link } from 'react-router-dom'

import './QuauthlyHeader.scss'

import logo from '../../assets/images/logo_quauthly.svg'

const QuauthlyHeader = ({ theme }) => {
  return (
    <>
      <Link to='/' className='app_logo'>
        <img src={logo} alt={'logo ' + theme} />
      </Link>

      <h2 className='app_slogan'>Illustrateur</h2>
    </>
  )
}

export default QuauthlyHeader
