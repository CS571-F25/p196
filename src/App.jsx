import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import BakingClub from './components/BakingClub'
import BakingLanding from './components/nav/pages/BakingLanding'
import BakingRecipes from './components/nav/pages/BakingRecipes'
import BakingSurprise from './components/nav/pages/BakingSurprise'
import BakingRecipeFull from './components/nav/pages/BakingRecipeFull'

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<BakingClub/>}>
        <Route index element={<BakingLanding />} />
        <Route path="/recipes" element={<BakingRecipes />} />
        <Route path="/recipes/:id" element={<BakingRecipeFull />}/>
        <Route path="/surprise-me" element={<BakingSurprise />}/>
      </Route>
    </Routes>
  </HashRouter>
}

export default App
