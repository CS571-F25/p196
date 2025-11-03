import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import BakingClub from './components/BakingClub'

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/baking" element={<BakingClub/>}></Route>
    </Routes>
  </HashRouter>
}

export default App
