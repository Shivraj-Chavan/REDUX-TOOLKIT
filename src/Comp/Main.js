import React from 'react'
import {Route, Routes} from "react-router-dom"

import Card from './Card'
import MyHome from './MyHome'
export default function Main() {
  return (
    <div>

          
                <Routes>
                    <Route path="/" element={<MyHome/>} />
                    
                    <Route path="/cart" element={<Card/>} />
                </Routes>
            

    </div>
  )
}
