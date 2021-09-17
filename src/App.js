import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CarouselContainer from './screens/Carousel/CarouselContainer'
import OffCanvas from './screens/OffCanvas/OffCanvas'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' component={CarouselContainer} exact />
        <Route path='/offcanvas' component={OffCanvas} exact />
      </Router>
    </div>
  )
}

export default App
