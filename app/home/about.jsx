import React from 'react';

export class AboutComponent extends React.Component {
    render() {
        return (
            <div className="row row-eq-height">
                <div className="col-5">
                    <img className="img-fluid" src="img/doctor-563429_1921.jpg" />
                </div>
                <div className="col-7 p-4 about">
                    <h2 className="h2">
                        About Us
                    </h2>
                    <div>
                        <p>
                            VIVAN is a global pharmaceutical outsourcing and loan manufacturing
                            company
                            based
                            at Vadodara, Gujarat, India.
                            We can exporting Injections, Oral formulations and External
                            Preparations.
                        </p>
                        <p>
                            We are exporting all Injectable whether Small Volume Injections,
                            High Volume
                            Injections, Prefilled Syringes, Lyophilized Injections and Dry
                            Powder For
                            Injections. We are exporting all Oral Formulations Such As Tablets,
                            Capsules,
                            Chewable Tablets, Effervescent Tables, Syrup, Suspension, Drops,
                            Sachets and
                            Oral Shots. We are exporting all External Formulations Such As Eye
                            Drops, Ear
                            Drops, Nasal Drops, Cream, Ointment, Shampoo, Lotion, Gel, Respules,
                            Vaginal
                            Pessary and Rectal Suppositories. We are exporting all Herbal,
                            Nutraceutical and
                            Cosmetic Products including surgical items such as disposable
                            syringes and
                            condoms, canula, IV Sets etc. We are exporting all Antiviral,
                            Antibiotics,
                            Antifungal, Anticancer, Hormones and Anti-HIV etc.
                        </p>
                    </div>
                    <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.5s">
                        <button type="button" className="btn btn-light">Read More</button>
                    </div>
                </div>
            </div>
        );
    }
}