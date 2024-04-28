import { BrowserRouter, Route, Routes ,useLocation,useParams} from "react-router-dom";
import Aeroport from "../Pages/Aeroport";
import Avion from "../Pages/Avion";
import CoorAeroport from "../Pages/CoordonnéesAeroport";
import DashBoard from "../Pages/DashBoard";
import Login from "../Pages/Login";
import Passager from "../Pages/Passager";
import Reservation from "../Pages/Reservation";
import Vol from "../Pages/Vol";
import { AnimatePresence } from 'framer-motion';


function AppRoutes(){
    const location=useLocation();

    return (
        <AnimatePresence>
        <Routes >
        <Route path="/login" element={<Login />} />

          {/* Dashbaord*/}
          <Route >
          <Route path="/" element={<DashBoard />}/>

          
          <Route path="/aeroport" element={<Aeroport />} />
          <Route path="/avion" element={<Avion/>} />
          <Route path="/cooraeroport" element={<CoorAeroport />} />
          <Route path="/passager" element={<Passager />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/vol" element={<Vol />} />
          </Route>
          </Routes>
        </AnimatePresence>


    );

}

export default AppRoutes;