import { Routes, Route, Router } from "react-router-dom"
import Home from "../Home"
import Comp from '../Comp'

export default function Rou(){
    return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/eletronika" element={<Comp />}/>
    </Routes>
    )
}