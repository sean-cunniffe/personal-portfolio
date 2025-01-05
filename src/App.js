import React, { useState } from 'react';
import './App.css';
import { Outlet, useLocation, useNavigate } from 'react-router';
import Data from './data/data';


function App() {
  const [sidebarActive, setSidebarActive] = useState(false);
  let [active, setActive] = useState(useLocation().pathname)

  const themes = [
    {
      title: "Yellow",
      cssThemeSelector: "yellow",
      cssVar: "--theme-yellow"
    },
    {
      title: "Punk Pink",
      cssThemeSelector: "punk-pink",
      cssVar: "--theme-pink"
    },
    {
      title: "Green",
      cssThemeSelector: "green",
      cssVar: "--theme-green"
    },
    {
      title: "Blue",
      cssThemeSelector: "blue",
      cssVar: "--theme-blue"
    }
  ]

  const components = [
    {
      title: "About",
      nav: "/about",
    },
    {
      title: "Resume",
      nav: "/resume",
    },
    {
      title: "Portfolio",
      nav: "/portfolio",
    },
    {
      title: "Chatbot",
      nav: "/chatbot",
    },
  ]
  let nav = useNavigate()

  function NavigateToModal(modal) {
    setActive(modal.nav)
    nav(modal.nav)
  }
  function setTheme(color) {
    localStorage.setItem("theme", color)
    document.documentElement.setAttribute('data-theme', color)
  }
  function getTheme() {
    return localStorage.getItem("theme")
  }
  var theme = getTheme()
    if (theme) {
      setTheme(theme)
    } else{
      setTheme(themes[0].cssThemeSelector)
    }
  return (
    <main>
      <aside className={`sidebar ${sidebarActive ? 'active' : ''}`} data-sidebar>

        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={Data.personalInfo.avatar} alt={Data.personalInfo.name} width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title={Data.personalInfo.name}>{Data.personalInfo.name}</h1>
            <p className="title">{Data.personalInfo.title}</p>
          </div>

          <button className="info_more-btn" id="data-sidebar-btn" onClick={() => setSidebarActive(!sidebarActive)}>
            <span>Show Contacts</span>

            <ion-icon name="chevron-down"></ion-icon>
          </button>

        </div>

        <div className="sidebar-info_more">

          <div className="separator"></div>

          <ul className="contacts-list">

            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href={`mailto:${Data.personalInfo.email}`} className="contact-link">{Data.personalInfo.email}</a>
              </div>

            </li>

            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href={`tel:${Data.personalInfo.phone}`} className="contact-link">{Data.personalInfo.phone}</a>
              </div>

            </li>

            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime={Data.personalInfo.birthday}>{new Date(Data.personalInfo.birthday).toLocaleDateString()}</time>
              </div>

            </li>

            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>{Data.personalInfo.location}</address>
              </div>

            </li>

          </ul>

          <div className="separator"></div>

          <ul className="social-list">

            {Data.socialLinks.map((link, index) => (
              <li className="social-item" key={index}>
                <a href={link.url} className="social-link">
                  <ion-icon name={link.name}></ion-icon>
                </a>
              </li>
            ))}

          </ul>

        </div>

      </aside>

      <div className="main-content">

        <nav className="navbar">

          <ul className="navbar-list">
            <li className='navbar-item theme-palette'>
              <button className="theme-icon">
                <ion-icon name="color-palette-outline" />
              </button>
              <nav>
                <section className="absolute h-full w-full top-0 left-0">
                  <aside className="theme-list-container">
                    <ul className="theme-list">
                      {themes.map((theme) => (
                        <li className='p-2 h-min'>
                          <button style={{ backgroundColor: 'var(' + theme.cssVar + ')' }} onClick={() => setTheme(theme.cssThemeSelector)}>
                            <span className="hidden">{theme.title}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </aside>
                </section>
              </nav>
            </li>
            {
              components.reverse().map((component, index) => (
                <li className="navbar-item">
                  <button className={`navbar-link ${active === component.nav ? 'active' : ''}`} onClick={() => NavigateToModal(component)}>{component.title}</button>
                </li>
              ))
            }
          </ul>

        </nav>
        <Outlet />

      </div>
    </main>
  );
}

export default App;
