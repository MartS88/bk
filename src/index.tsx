import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from './store/store'
import Home from "./pages/home/Home";
import CardContent from "./pages/cardcontent/CardContent";
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={setupStore()}>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/card' element={<CardContent/>}/>
                </Routes>
            </Router>
        </Provider>
    </QueryClientProvider>
        );


