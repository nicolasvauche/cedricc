import './Menu.scss'

import CedriccMenu from './cedricc/CedriccMenu'
import QuauthlyMenu from './quauthly/QuauthlyMenu'

const Menu = ({ theme }) => (
  <main className={'app_main ' + theme}>
    <section className={'app_menu ' + theme}>
      {theme === 'cedricc' && <CedriccMenu />}

      {theme === 'quauthly' && <QuauthlyMenu />}
    </section>
  </main>
)

export default Menu
