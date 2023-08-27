import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";
import ListBuku from "./page/ListBuku";
import Pinjam from "./page/Pinjam";


function RoutePath ({items}) {

    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/list" element={<ListBuku/>}/>
          <Route path="/pinjam" element={<Pinjam />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default RoutePath
  


