import React from 'react';

export class FeatureComponent extends React.Component {
    render() {
        return (

            <div className="row">
                <div className="col feature feature-odd">
                    <div className="featured-text">
                        <a href="#">
                            <img src="img/feature0.jpg" alt="Emergency Service" className="rounded mx-auto d-block" />
                            <div className="text-center">Emergency Service</div>
                        </a>
                        <p className="lh-1 p-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1...
                        </p>
                    </div>
                </div>
                <div className="col feature feature-even">
                    <div className="featured-text">
                        <a href="#">
                            <img src="img/feature1.jpg" alt="Ambulance Pickup" className="rounded mx-auto d-block" />
                            <div className="text-center">Ambulance Pickup</div>
                        </a>
                        <p className="lh-1 p-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1...
                        </p>
                    </div>
                </div>
                <div className="col featured-block" >
                    <div className="featured-text">
                        <a href="#">
                            <img src="img/feature2.jpg" alt="Opening Hours" className="rounded mx-auto d-block" />
                            <div className="text-center">Opening Hours</div>
                        </a>
                        <p className="lh-1 p-2">
                            <strong>Lorem Ipsum</strong> is simply dummy text...
                        </p>
                        <span className="float-start">Monday - Friday</span><span className="float-end">9am - 6pm</span>
                        <span className="float-start">Monday - Friday</span><span className="float-end">9am - 6pm</span>
                    </div>
                </div>
                <div className="col feature feature-even" data-wow-delay="1.2s" >
                    <div className="featured-text">
                        <a href="#">
                            <img src="img/feature3.jpg" alt="Medical Consultancy" className="rounded mx-auto d-block" />
                            <div className="text-center">Medical Consultancy</div>
                        </a>
                        <p className="lh-1 p-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1...
                        </p>
                    </div>
                </div>
                <div className="col feature feature-odd" data-wow-delay="1.5s" >
                    <div className="featured-text">
                        <a href="#">
                            <img src="img/feature4.jpg" alt="Cardio Therapy" className="rounded mx-auto d-block" />
                            <div className="text-center">Cardio Therapy</div>
                        </a>
                        <p className="lh-1 p-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1...
                        </p>
                    </div>
                </div>
            </div>)
    }
}