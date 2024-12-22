
import React from 'react';
import Data from '../data/data';
import { useNavigate } from 'react-router';

function Portfolio() {
  let nav = useNavigate()
  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          {Data.projects.map((project, index) => (
            <li className="project-item active" data-filter-item data-category={project.category.toLowerCase()} key={index}>
              <a href={project.link} target={project.redirect ? "_blank":''} rel={project.redirect ? "noreferrer":''} onClick={(e)=>{
                if(!project.redirect) {
                  e.preventDefault()
                  nav(project.link)
                }
              }

              }>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.img} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Portfolio;