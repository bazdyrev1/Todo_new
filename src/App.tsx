import React from "react";
import { NavBar } from "./components/NavBar";
import "./index.css";
import AboutPage from "./pages/AboutPage";
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import TodosPages from "./pages/TodosPages";


const App: React.FC = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<TodosPages />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )

}
export default App;