import { BrowserRouter, Route, Routes ,useLocation,useParams} from "react-router-dom";
import Aeroport from "../Pages/Aeroport";
import Avion from "../Pages/Avion";
import DashBoard from "../Pages/DashBoard";
import Login from "../Pages/Login";
import Passager from "../Pages/Passager";
import Reservation from "../Pages/Reservation";
import Vol from "../Pages/Vol";
import { AnimatePresence } from 'framer-motion';
import AjouterPassager from "../Pages/Passager/ajouterPassager";
import ModifierPassager from "../Pages/Passager/modifierPassager";
import AjouterAvion from "../Pages/Avion/ajouterAvion";
import ModifierAvion from "../Pages/Avion/modifierAvion";
import AjouterAeroport from "../Pages/Aeroport/ajouterAeroport";
import ModifierAeroport from "../Pages/Aeroport/modifierAeroport";
import AjouterReservation from "../Pages/Reservation/ajouterReservation";
import ModifierReservation from "../Pages/Reservation/modifierReservation";
import AjouterVol from "../Pages/Vol/ajouterVol";
import ModifierVol from "../Pages/Vol/modifierVol";


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
          <Route path="/aeroport/ajouterAeroport" element={<AjouterAeroport />} />
          <Route path="/aeroport/modifierAeroport/:id" element={<ModifierAeroport />} />



          <Route path="/avion" element={<Avion/>} />
          <Route path="/avion/ajouterAvion" element={<AjouterAvion/>} />
          <Route path="/avion/modifierAvion/:id" element={<ModifierAvion/>} />






          <Route path="/passager" element={<Passager />} />
          <Route path="/passager/ajouterPassager" element={<AjouterPassager />} />
          <Route path="/passager/modifierPassager/:id" element={<ModifierPassager />} />

          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservation/ajouterReservation" element={<AjouterReservation />} />
          <Route path="/reservation/modifierReservation/:id" element={<ModifierReservation />} />



          <Route path="/vol" element={<Vol />} />
          <Route path="/vol/ajouterVol" element={<AjouterVol />} />
          <Route path="/vol/modifierVol/:id" element={<ModifierVol />} />
          </Route>
          </Routes>
        </AnimatePresence>


    );

}

export default AppRoutes;