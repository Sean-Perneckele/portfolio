import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Error from './pages/404';
import Home from './pages/Home';
import Header from './composant/header';
import Footer from './composant/footer';
import Kasa from './pages/Kasa'
import ArgentBank from './pages/ArgentBank';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="/projet1" element={<Kasa />}/>
                <Route path="/projet2" element={<ArgentBank />}/>
            </Routes>  
           <Footer />
        </Router>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
