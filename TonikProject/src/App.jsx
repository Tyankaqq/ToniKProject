import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Home } from "./pages/HomePage/Home.jsx"
import {TonicsPage} from "./pages/TonicsPage/TonicsPage.jsx"
import {ProductPage} from "./pages/ProductPage/ProductPage.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/product" element={<ProductPage />} />

                <Route path="/tonics" element={<TonicsPage />} />
            </Routes>
        </>
    )
}

export default App
