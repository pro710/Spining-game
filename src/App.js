import React from 'react'
import Home from '../src/component/home/Home'
import Header from '../src/component/header/Header'
import Spin from  '../src/component/spin/Spin'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
     <Router>
     <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spin" element={<Spin />} />
      </Routes>
     </Router>

    </div>
  )
}

export default App;