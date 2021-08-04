import React from 'react';

export class CarouselComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      name: 'initState',
      slideList: []
    }
  }

  componentDidMount() {
    this.getSlideData();
  }

  getSlideData() {
    fetch('./data/slide_data.json').then(response => {
      return response.json();
    }).then(data => {
      // Work with JSON data here
      this.setState(data);
    }).catch(err => {
      // Do something for an error here
    });
  }


  render() {
    return (
      <div id="carouselhome" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselhome" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          {
            this.state.slideList.map((slide, index) => {
              return (
                <button type="button" data-bs-target="#carouselhome" data-bs-slide-to={index + 1} aria-label={"Slide " + index + 1}></button>
              )
            })
          }
        </div>

        <div className="carousel-inner">
          {
            this.state.slideList.map((slide, index) => {
              return (<div className={`carousel-item ${index == 0 ? 'active' : ''}`}>
                <img src={slide.imagePath} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{slide.heading}</h5>
                  <p>{slide.para}</p>
                </div>
              </div>
              )
            })
          }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselhome" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselhome" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div >)
  }
}