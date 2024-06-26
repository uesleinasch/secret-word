import {  useCallback, useState } from 'react'
import './App.css'
import HomeGame from './components/Layouts/homeGame/HomeGame'
import Game from './components/levels/Game/Game'
import EndGame from './components/levels/EndGame/EndGame'
import { stages } from './shared/controls'
import wordList from './data/words'



function App() {
  const [gaeStage, setGaeStage] = useState<number>(stages.home.id)

  //create use memo 




  return (
    <>
      {gaeStage === 1 && <HomeGame setGaeStage={setGaeStage} />}
      {gaeStage === 2 && <Game setGaeStage={setGaeStage}/>}
      {gaeStage === 3 && <EndGame setGaeStage={setGaeStage} />}     
    </>
  )
}

export default App
