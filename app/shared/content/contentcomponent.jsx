import React from 'react';
import { HomeComponent } from '../../home/home'

export class ContentComponent extends React.Component {
    render() {
        return (
            <div className="col-12">
                <HomeComponent />
            </div>
        );
    }
}