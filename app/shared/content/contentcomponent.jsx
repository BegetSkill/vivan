import React from 'react';
import { HomeComponent } from '../../home/home'
import { QueryComponent } from '../../Query/QueryComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export class ContentComponent extends React.Component {
    render() {
        return (
            <div className="col-12">
                <BrowserRouter>
                    <Routes>.
                        <Route exact path="/" element={<HomeComponent/>} />
                        <Route exact path="/home" element={<HomeComponent/>} />
                        <Route path="/query" element={<QueryComponent/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}