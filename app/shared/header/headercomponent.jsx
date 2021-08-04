import React from 'react'
export class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="header col-12">
                <a href="#" className="header-text">Pharmaceutical Queries</a>
                <a href="#" className="header-text">| Technical Queries</a>
                <a href="#" className="header-text">| Sales Queries</a>
            </div>
        )
    }
}