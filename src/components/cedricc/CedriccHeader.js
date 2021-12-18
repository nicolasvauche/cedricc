import { Link } from 'react-router-dom'

import './CedriccHeader.scss'

import logo from '../../assets/images/logo_cedricc.svg'

const CedriccHeader = ({ theme }) => {
  return (
    <>
      <Link to='/' className='app_logo'>
        <img src={logo} alt={'logo ' + theme} />
      </Link>

      <h2 className='app_slogan'>
        Designer
        <br />
        Graphique, UX & UI
      </h2>
    </>
  )
}

export default CedriccHeader
