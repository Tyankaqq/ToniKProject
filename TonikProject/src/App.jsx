import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Home } from "./pages/HomePage/Home.jsx"
import {TonicsPage} from "./pages/TonicsPage/TonicsPage.jsx"

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Routes>

                <Route path="/home" element={<Home />} />


                <Route path="/" element={<TonicsPage />} />
            </Routes>
        </>
    )
}

export default App
