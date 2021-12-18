import { Link } from 'react-router-dom'

import './QuauthlyMenu.scss'

const QuauthlyMenu = () => {
  return (
    <>
      <Link to='/quauthly/presentation'>À propos de moi</Link>
      <Link to='/quauthly/dessins-illustrations'>Dessins & Illustrations</Link>
      <Link to='/quauthly/photo-montages'>Photo Montages</Link>
    </>
  )
}

export default QuauthlyMenu
