import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { FeedPage } from "../pages/Feed"

export const RoutesApp = () => {
    const UsuarioAuth = JSON.parse(localStorage.getItem('user'))

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={UsuarioAuth ? <FeedPage/> : <Login /> } />
        </Routes>
        </BrowserRouter>
    )
}