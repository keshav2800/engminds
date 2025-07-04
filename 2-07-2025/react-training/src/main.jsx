import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Start from './components/start'
import Second from './components/second'
import {Batch} from './components/prop'
import Form from './components/form'
import {Routes, Route, Router} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <>
    {/* <Start />
    <Second /> */}
    {/* <Batch /> */}
    <Form />
    {/* console.log("this"); */}

  </>
)
