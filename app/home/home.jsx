import React from 'react';
import { CarouselComponent } from './carousel'
import { AboutComponent } from './about'
import {FeatureComponent} from './feature'

export class HomeComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <CarouselComponent />
                </div>
                <div className="col-12">
                    <FeatureComponent />
                </div>
                <div className="col-12">
                    <AboutComponent />
                </div>
            </div>
        );
    }
}