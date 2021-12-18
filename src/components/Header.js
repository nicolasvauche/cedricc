import { useNavigate } from 'react-router-dom'

import './Header.scss'

import CedriccHeader from './cedricc/CedriccHeader'
import QuauthlyHeader from './quauthly/QuauthlyHeader'

const Header = ({ theme, hasBack }) => {
  const navigate = useNavigate()

  return (
    <header className={'app_header ' + theme}>
      {hasBack && (
        <button className='app_back' onClick={() => navigate(-1)}>
          <span className='material-icons'>arrow_back</span>
        </button>
      )}

      {!hasBack && <p>&nbsp;</p>}

      {theme === 'cedricc' && <CedriccHeader />}

      {theme === 'quauthly' && <QuauthlyHeader />}
    </header>
  )
}

export default Header
