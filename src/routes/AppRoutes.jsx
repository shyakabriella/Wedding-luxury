import { Route, Routes } from "react-router-dom";

import Layouts from "../components/Layouts";
import Home from "../pages/Home";
import Venues from "../pages/venue/Venues";
import GroupeService from "../pages/groupeservice/GroupeService";
import Package from "../pages/package/Package";
import RoomBlock from "../pages/RoomBlock/RoomBlock";
import Garelly from "../pages/Garelly/Garelly";
import GarellyWedding from "../pages/GarellyWedding/GarellyWedding";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="venues" element={<Venues />} />
        <Route path="wedding-services" element={<GroupeService />} />
        <Route path="packages" element={<Package />} />
        <Route path="room-blocks" element={<RoomBlock />} />
        <Route path="gallery" element={<Garelly />} />
        <Route path="wedding-gallery" element={<GarellyWedding />} />
      </Route>
    </Routes>
  );
}