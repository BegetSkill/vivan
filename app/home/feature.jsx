import React from 'react';

export class FeatureComponent extends React.Component {
    render() {
        return (

            <div className="row">
                <div className="col-xs-12 col-lg-3 feature feature-odd">
                    <div className="featured-text">
                        <a href="#">
                            <img src="img/other/tablets.png" alt="Emergency Service" className="rounded mx-auto d-block" />
                            <div className="text-center">Tablets</div>
                        </a>
                        <p className="lh-1 p-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1...
                        </p>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-3 feature feature-even">
                    <div className="featured-text">
                        <a href="#">
                            <img src="img/other/injection.png" alt="Ambulance Pickup" className="rounded mx-auto d-block pt-2" />
                            <div className="text-center">Injections</div>
                        </a>
                        <p className="lh-1 p-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1...
                        </p>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-3 feature feature-odd" >
                    <div className="featured-text">
                        <a href="#">
                            <img src="img/other/Capsule.png" alt="Opening Hours" className="rounded mx-auto d-block" />
                            <div className="text-center">Capsules</div>
                        </a>
                        <p className="lh-1 p-2">
                            <strong>Lorem Ipsum</strong> is simply dummy text...
                        </p>
                        <span className="float-start">Monday - Friday</span><span className="float-end">9am - 6pm</span>
                        <span className="float-start">Monday - Friday</span><span className="float-end">9am - 6pm</span>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-3 feature feature-even" data-wow-delay="1.2s" >
                    <div className="featured-text">
                        <a href="#">
                            <img src="img/other/Infuse.png" alt="Medical Consultancy" className="rounded mx-auto d-block pt-2" />
                            <div className="text-center">Infuse</div>
                        </a>
                        <p className="lh-1 p-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1...
                        </p>
                    </div>
                </div>
            </div>)
    }
}