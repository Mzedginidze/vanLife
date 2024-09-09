import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import About from "./pages/About";
import HostLayout from "./pages/Host/HostLayout";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import VansList from "./pages/Host/VansList";
import Vans from "./pages/Vans";
import VansDetail from "./pages/VansDetail";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/LogIn";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { requireAuth } from "./services/loader";
//loader={requireAuth}
import VansDetailForHost from "./pages/Host/VansDetailForHost";
import Details from "./pages/Host/Details";
import Pricing from "./pages/Host/Pricing";
import Photos from "./pages/Host/Photos";
const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VansDetail />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<VansList />} />
          <Route path="vans/:id" element={<VansDetailForHost />}>
            <Route index element={<Details />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
          <Route path="review" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={route} />;
};

export default App;
