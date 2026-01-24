import Header from "./components/Header.tsx";
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home.tsx'
import Team from './pages/Team.tsx'
import Participation from './pages/Participations.tsx'
import Newsletters from './pages/Newsletters.tsx'
import * as React from "react";
import Footer from "./components/Footer.tsx";
import "./App.scss"
import LegalNotice from "./pages/LegalNotice.tsx";

const App: React.FC = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/participation" element={<Participation/>}/>
                <Route path="/newsletters" element={<Newsletters/>}/>
                <Route path="/newsletters/:id" element={<Newsletters/>}/>
                <Route path="/legal-notice" element={<LegalNotice/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
