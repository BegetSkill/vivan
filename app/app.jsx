import React from 'react';
import ReactDom from 'react-dom';
import { MenuComponent } from './shared/menu/menucomponent';
import { FooterComponent } from './shared/footer/footer';
import { ContentComponent } from './shared/content/contentcomponent';

class AppComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <MenuComponent />
                <ContentComponent />
                <FooterComponent />
            </div>
        )
    }
}

var container = document.getElementById("container");
ReactDom.render(<AppComponent />, container);