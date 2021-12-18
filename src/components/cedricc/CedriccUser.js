import '../Thumbnails.scss';

import User01 from '../../assets/images/cedricc_user_01.jpg'

const CedriccUser = ({ theme }) => (
  <main className={'app_main ' + theme}>
    <h1>Interfaces de sites & d'applications</h1>

    <section className='app_thumbnails'>
      <div className='app_thumbnail'>
        <figure className='app_thumbnail_image'>
          <img src={User01} alt='Visual S' />
        </figure>
      </div>

      <div className='app_thumbnail'>
        <figure className='app_thumbnail_image'>
          <img src={User01} alt='Visual S' />
        </figure>
      </div>

      <div className='app_thumbnail'>
        <figure className='app_thumbnail_image'>
          <img src={User01} alt='Visual S' />
        </figure>
      </div>

      <div className='app_thumbnail'>
        <figure className='app_thumbnail_image'>
          <img src={User01} alt='Visual S' />
        </figure>
      </div>

      <div className='app_thumbnail'>
        <figure className='app_thumbnail_image'>
          <img src={User01} alt='Visual S' />
        </figure>
      </div>
    </section>
  </main>
)

export default CedriccUser
