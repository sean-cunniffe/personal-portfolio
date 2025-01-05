
import React from 'react';
import Data from '../data/data';
import Design from './icons/Design'
import Dev from './icons/Dev'
import Quote from './icons/Quote';

function About() {
  let [modalActive, setModelActive] = React.useState(false)
  const [testimonial, setTestimonial] = React.useState(Data.testimonials[0]);

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        {Data.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <Design/>
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{Data.services.backend.title}</h4>
                <p className="service-item-text">{Data.services.backend.description}</p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
              <Dev></Dev>
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{Data.services.web.title}</h4>
                <p className="service-item-text">{Data.services.web.description}</p>
              </div>
            </li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {Data.testimonials.map((testimonial, index) => (
            <li className="testimonials-item" key={index} onClick={() => {
              setTestimonial(testimonial);
              setModelActive(true);
            }}>
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box p-2 md:p-0">
                  <Quote/>
                </figure>
                <h4 className="h4 testimonials-item-title" data-testimonials-title>{testimonial.name}</h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.testimonial}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className={`modal-container ${modalActive ? 'active' : ''}`} data-modal-container>
        <div className={`overlay ${modalActive ? 'active' : ''}`} onClick={() => setModelActive(false)} data-overlay></div>
        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn onClick={() => setModelActive(false)}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <div className="modal-img-wrapper">
            <Quote/>
          </div>
          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>{testimonial.name}</h4>
            <h5 className="h5 modal-title" data-modal-title>{testimonial.relationship}</h5>
            <time dateTime="2021-06-14">{testimonial.datatime}</time>
            <div data-modal-text>
              <p>{testimonial.testimonial}</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

export default About;