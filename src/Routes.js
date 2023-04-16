import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';

const Routing = () => {
 return (
    <>
         <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Home />} />
           <Route exact path="home/:id" element={<Home />} />
           <Route path="*" element={<PageNotFound />} />

       </Routes>
     </BrowserRouter>
    </>
 );
};

export default Routing;