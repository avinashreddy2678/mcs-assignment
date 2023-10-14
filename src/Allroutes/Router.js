import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import Infopage from "../pages/Infopage"

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/id/:id" element={<Infopage/>}/>
        </Routes>
    </div>
  )
}

export default Router
