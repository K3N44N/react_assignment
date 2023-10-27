import {Routes,Route} from "react-router";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import App from "./App";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    )
}
