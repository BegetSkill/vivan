import React from 'react'
export class MenuComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        navigation.Init();
    }

    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <div className="site-branding">
                        <div className="site-logo">
                            <a href="#" rel="home"></a>
                            <a href="#" className="custom-logo-link" rel="home">
                                <img width="37" height="55" src="img/8medi-logo.png" className="custom-logo" alt="8Medi Lite" />
                            </a>
                        </div>
                            <div className="site-text">
                                <a href="#" rel="home">
                                    <h1 className="site-title">VIVAN</h1>
                                    <span className="site-description position-relative bottom-0">A Global Pharmaceutical Outsourcing </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-9 menucantainer">
                        <nav id="site-navigation" className="main-navigation" role="navigation">
                            <div className="menu-menu-1-container">
                                <ul id="primary-menu" className="menu nav-menu" aria-expanded="false">
                                    <li id="menu-item-11" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11" aria-haspopup="true">
                                        <a href="#" aria-current="page">Home</a>
                                    </li>
                                    <li id="menu-item-122" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-122" aria-haspopup="true">
                                        <a href="##">Products <i className="fas fa-angle-down"></i></a>
                                        <ul className="sub-menu">
                                            <li id="menu-item-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                <a href="#page-with-right-sidebar/">
                                                    Oral 
                                                    <i className="fas fa-angle-right float-end"></i>
                                                </a>
                                                <ul className="sub-menu menu nav-menu" aria-expanded="false">
                                                    <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                        <a href="#page-with-right-sidebar/">
                                                            Tablets 
                                                        </a>
                                                    </li>
                                                    <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                        <a href="#page-with-right-sidebar/">
                                                            Capsules
                                                        </a>
                                                    </li>
                                                    <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                        <a href="#page-with-right-sidebar/">
                                                            Liquid
                                                        </a>
                                                    </li>
                                                    <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                        <a href="#page-with-right-sidebar/">
                                                            Dry Powder
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-124" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-124">
                                                <a href="#page-with-left-sidebar/">
                                                    Sterile
                                                    <i className="fas fa-angle-right float-end"></i>
                                                </a>
                                                <ul className="sub-menu menu nav-menu" aria-expanded="false">
                                                    <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                        <a href="#page-with-right-sidebar/">
                                                            Liquid Injection (Sanjar)
                                                            <i className="fas fa-angle-right float-end"></i>
                                                        </a>
                                                        <ul className="sub-menu menu nav-menu" aria-expanded="false">
                                                            <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                                <a href="#page-with-right-sidebar/">
                                                                    Narcatics
                                                                </a>
                                                            </li>
                                                            <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                                <a href="#page-with-right-sidebar/">
                                                                    Eencral
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                        <a href="#page-with-right-sidebar/">
                                                            Powder For Injection
                                                            <i className="fas fa-angle-right float-end"></i>
                                                        </a>
                                                        <ul className="sub-menu menu nav-menu" aria-expanded="false">
                                                            <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                                <a href="#page-with-right-sidebar/">
                                                                    General(Sanjar)
                                                                </a>
                                                            </li>
                                                            <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                                <a href="#page-with-right-sidebar/">
                                                                    Cefalo
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                        <a href="#page-with-right-sidebar/">
                                                            Prefilled
                                                        </a>
                                                    </li>
                                                    <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                        <a href="#page-with-right-sidebar/">
                                                            Eye Drops
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-130" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-130">
                                                <a href="#page-with-no-sidebar/">
                                                    Niche
                                                    <i className="fas fa-angle-right float-end"></i>
                                                </a>
                                                <ul className="sub-menu menu nav-menu" aria-expanded="false">
                                                    <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                        <a href="#page-with-right-sidebar/">
                                                            Insulin
                                                        </a>
                                                    </li>
                                                    <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                        <a href="#page-with-right-sidebar/">
                                                            Oncalogy
                                                        </a>
                                                    </li>
                                                    <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                        <a href="#page-with-right-sidebar/">
                                                            Soft Gel
                                                        </a>
                                                    </li>
                                                    <li id="sub-menu-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                                        <a href="#page-with-right-sidebar/">
                                                            Harmons
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-17" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-17">
                                        <a href="#">News</a></li>
                                    <li id="menu-item-138" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-138">
                                        <a href="#">Services</a>
                                    </li>
                                    <li id="menu-item-12" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12">
                                        <a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                );
    }
}