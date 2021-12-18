import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.scss'

import Homepage from './containers/Homepage'
import Layout from './containers/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />} />

        <Route path='/cedricc' element={<Layout theme='cedricc' />} />
        <Route
          path='/cedricc/presentation'
          element={<Layout theme='cedricc' component='about' hasBack={true} />}
        />
        <Route
          path='/cedricc/design-graphique'
          element={<Layout theme='cedricc' component='graphics' hasBack={true} />}
        />
        <Route
          path='/cedricc/design-graphique/supports-graphiques'
          element={<Layout theme='cedricc' component='supports' hasBack={true} activeButton='supports' />}
        />
        <Route
          path='/cedricc/design-utilisateur'
          element={<Layout theme='cedricc' component='user' hasBack={true} />}
        />
        <Route
          path='/cedricc/contact'
          element={<Layout theme='cedricc' component='contact' hasBack={true} />}
        />

        <Route path='/quauthly' element={<Layout theme='quauthly' />} />
        <Route
          path='/quauthly/presentation'
          element={<Layout theme='quauthly' component='about' hasBack={true} />}
        />
        <Route
          path='/quauthly/dessins-illustrations'
          element={<Layout theme='quauthly' component='illustrations' hasBack={true} />}
        />
        <Route
          path='/quauthly/photo-montages'
          element={<Layout theme='quauthly' component='photos' hasBack={true} />}
        />
        <Route
          path='/quauthly/contact'
          element={<Layout theme='quauthly' component='contact' hasBack={true} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
