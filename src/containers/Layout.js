import './Layout.scss'

import Header from '../components/Header'
import Menu from '../components/Menu'
import About from '../components/About'
import Contact from '../components/Contact'
import Navigation from '../components/Navigation'
import CedriccGraphics from '../components/cedricc/CedriccGraphics'
import CedriccUser from '../components/cedricc/CedriccUser'
import QuauthlyIllustrations from '../components/quauthly/QuauthlyIllustrations'
import QuauthlyPhotos from '../components/quauthly/QuauthlyPhotos'

const Layout = ({ theme, component, hasBack, activeButton }) => (
  <div className='app_layout'>
    <Header theme={theme} hasBack={hasBack} />

    {!component && <Menu theme={theme} />}

    {component === 'about' && <About theme={theme} />}

    {component === 'graphics' && <CedriccGraphics theme={theme} />}
    {component === 'supports' && (
      <CedriccGraphics theme={theme} activeButton={activeButton} />
    )}
    {component === 'user' && <CedriccUser theme={theme} />}

    {component === 'illustrations' && <QuauthlyIllustrations theme={theme} />}
    {component === 'photos' && <QuauthlyPhotos theme={theme} />}

    {component === 'contact' && <Contact theme={theme} />}

    <Navigation theme={theme} />
  </div>
)

export default Layout
