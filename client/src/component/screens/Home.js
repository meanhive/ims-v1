import React, { Fragment } from 'react'
import images from '../../images'
import "../Styles/carousel.css"

function Home() {
  return (
    <Fragment>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={images.slide_1} alt="No Image found" width={'100%'} className="bd-placeholder-img" />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Better Education for Better World</h1>
                <p>We Provide Best Education with best Faculty with Minimum Fee! Lets come and join us for Better Feature.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Register today</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={images.slide_2} alt="No Image found" width={'100%'} className="bd-placeholder-img" />

            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={images.slide_3} alt="No Image found" width={'100%'} className="bd-placeholder-img" />

            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Fragment>
  )
}

export default Home