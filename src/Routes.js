import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import ChatPage from './Pages/Chatpage';
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:4000');

const Routing = () => {
 return (
    <>
         <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Home socket={socket} />} />
           <Route exact path="home/:id" element={<Home socket={socket} />} />
           <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
           <Route path="*" element={<PageNotFound />} />

       </Routes>
     </BrowserRouter>
    </>
 );
};

export default Routing;