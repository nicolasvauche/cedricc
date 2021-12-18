import { Link } from 'react-router-dom'

import './CedriccMenu.scss'

const CedriccMenu = () => {
  return (
    <>
      <Link to='/cedricc/presentation'>À propos<br />de moi</Link>
      <Link to='/cedricc/design-graphique'>Design Graphique</Link>
      <Link to='/cedricc/design-utilisateur'>
        Design Utilisateur <small>eXpérience & Interface</small>
      </Link>
    </>
  )
}

export default CedriccMenu
