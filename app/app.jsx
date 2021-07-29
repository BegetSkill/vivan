import React from 'react';
import ReactDom from 'react-dom';
import { HeaderComponent } from './shared/header/headercomponent';
import { MenuComponent } from './shared/menu/menucomponent';
import { FooterComponent } from './shared/footer/footer';
import { ContentComponent } from './shared/content/contentcomponent';

class AppComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <HeaderComponent />
                <MenuComponent />
                <ContentComponent />                
                <FooterComponent />
            </div>
        )
    }
}

var container = document.getElementById("container");
ReactDom.render(<AppComponent />, container);