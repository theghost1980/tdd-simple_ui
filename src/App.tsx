import { useState } from 'react'
import './App.css'
import { Loader } from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div>Main App</div>
      {isLoading && <Loader />}
    </>
  )
}

export default App
