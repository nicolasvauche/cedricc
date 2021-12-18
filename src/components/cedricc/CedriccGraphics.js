import { Link } from 'react-router-dom'

import GraphicsA01 from '../../assets/images/cedricc_graphics_a_01.png'
import GraphicsB01 from '../../assets/images/cedricc_graphics_b_01.jpg'

const CedriccGraphics = ({ theme, activeButton }) => (
  <main className={'app_main ' + theme}>
    <h1>Design Graphique</h1>

    <section className='app_thumbnails'>
      {!activeButton && (
        <>
          <div className='app_thumbnail'>
            <figure className='app_thumbnail_logo'>
              <img src={GraphicsA01} alt='Imagience' />
            </figure>
          </div>

          <div className='app_thumbnail'>
            <figure className='app_thumbnail_logo'>
              <img src={GraphicsA01} alt='Imagience' />
            </figure>
          </div>

          <div className='app_two'>
            <div className='app_thumbnail'>
              <figure className='app_thumbnail_logo'>
                <img src={GraphicsA01} alt='Imagience' />
              </figure>
            </div>

            <div className='app_thumbnail'>
              <figure className='app_thumbnail_logo'>
                <img src={GraphicsA01} alt='Imagience' />
              </figure>
            </div>
          </div>

          <div className='app_thumbnail'>
            <figure className='app_thumbnail_logo'>
              <img src={GraphicsA01} alt='Imagience' />
            </figure>
          </div>

          <div className='app_thumbnail'>
            <figure className='app_thumbnail_logo'>
              <img src={GraphicsA01} alt='Imagience' />
            </figure>
          </div>
        </>
      )}

      {activeButton === 'supports' && (
        <>
          <div className='app_thumbnail'>
            <figure className='app_thumbnail_logo'>
              <img src={GraphicsB01} alt='Imagience' />
            </figure>
          </div>

          <div className='app_thumbnail'>
            <figure className='app_thumbnail_logo'>
              <img src={GraphicsB01} alt='Imagience' />
            </figure>
          </div>

          <div className='app_thumbnail'>
            <figure className='app_thumbnail_logo'>
              <img src={GraphicsB01} alt='Imagience' />
            </figure>
          </div>

          <div className='app_thumbnail'>
            <figure className='app_thumbnail_logo'>
              <img src={GraphicsB01} alt='Imagience' />
            </figure>
          </div>

          <div className='app_thumbnail'>
            <figure className='app_thumbnail_logo'>
              <img src={GraphicsB01} alt='Imagience' />
            </figure>
          </div>
        </>
      )}
    </section>

    <aside className='app_two fixed'>
      <Link
        to='/cedricc/design-graphique'
        className={'app_button' + (!activeButton ? ' active' : '')}
      >
        Logos & Identités visuelles
      </Link>
      <Link
        to='/cedricc/design-graphique/supports-graphiques'
        className={
          'app_button' + (activeButton === 'supports' ? ' active' : '')
        }
      >
        Supports graphiques
      </Link>
    </aside>
  </main>
)

export default CedriccGraphics
