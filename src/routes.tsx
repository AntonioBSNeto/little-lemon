import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";
import { PageWrapper } from "./components/PageWrapper";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageWrapper />}>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}