import React from 'react';
import './App.scss';

export const App = () => {
  return (
      <div className="mainContainer">
          <div className="stickyContainer">
              <div className="stickyContainer__content">
                  <h2>Aron Scheffczyk</h2>
                  <h3>Aktueller Job Title</h3>
                  <h5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</h5>
                  <div className="stickyContainer__content--navLinks">
                      <a>Link to About</a>
                      <a>Link to Experience</a>
                      <a>Link to Projects</a>
                  </div>
                  <div className="stickyContainer__content--iconLinks">
                      <span>LinkedIn</span>
                      <span>GitHub</span>
                      <span>Instagram</span>
                  </div>
              </div>

          </div>
          <div className="mainContainer__contentArea">
              <span style={{ marginBottom: '5rem' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>
              <div style={{height: '20rem', border: '1px solid blue'}}>
                  Experience One

              </div>
              <div style={{height: '20rem', border: '1px solid yellow'}}>
                  Experience Two

              </div>
              <div style={{height: '20rem', border: '1px solid green'}}>
                  Experience Three

              </div>
              <div style={{height: '20rem', border: '1px solid green'}}>
                  Project One

              </div>
              <div style={{height: '20rem', border: '1px solid green'}}>
                  Project Two

              </div>
              <div style={{height: '20rem', border: '1px solid green'}}>
                  Project Three

              </div>
          </div>
      </div>
  );
}