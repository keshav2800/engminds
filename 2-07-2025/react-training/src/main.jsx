import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Start from './components/start'
import Second from './components/second'
import {Batch} from './components/prop'

createRoot(document.getElementById('root')).render(
  <>
    {/* <Start />
    <Second /> */}
    <Batch />

  </>
)
