import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/LandingPage";

export const route = (
    <Routes>
        <Route path='/' element={<LandingPage />} />
    </Routes>
)