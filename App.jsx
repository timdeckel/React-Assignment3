import { useState } from 'react'
import ChoiceContainer from './components/ChoiceContainer'
import CatContainer from './components/CatContainer'
import DogContainer from './components/DogContainer'
import './App.css'

function App() {
  const [page, setPage] = useState(null)
  return (
    <>
    {!page && <ChoiceContainer updateFunction={setPage} /> }
    {page === "cats" && <CatContainer updateFunction={setPage} />}
    {page === "dogs" && <DogContainer updateFunction={setPage}/>}
    </>
  )
}

export default App
