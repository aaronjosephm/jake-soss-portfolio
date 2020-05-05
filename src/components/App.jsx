import React, { Component } from 'react';
import styled from 'styled-components';
import '../assets/stylesheets/App.css';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import { NavButton, CommonButtonTest } from './commonStyleComponents/commonButtons';
import { Navbar } from './commonStyleComponents/commonHeaders';
import { Title, Content } from './commonStyleComponents/commonDivs';

const NAV_DEFAULTS = [
  'HOME',
  'ABOUT',
  'UPCOMING EVENTS',
  'CONTACT'
]

class App extends Component {
  state = {
    currentComponent: NAV_DEFAULTS[0],
  };

  renderComponent() {
    const { currentComponent } = this.state;
    switch (currentComponent) {
      case 'HOME':
        return (
          <HomeComponent />
        )
      case 'ABOUT':
        return (
          <AboutComponent />
        )
      case 'UPCOMING EVENTS': 
        return null;
      case 'CONTACT':
        return (
            <ContactComponent />
          )
      default:
        return (
          <HomeComponent />
        )
    };
  }

  handleMenuClick(e, idx) {
    this.setState({ currentComponent: NAV_DEFAULTS[idx] });
  }

  render() {
    const { currentComponent } = this.state;
    return (
      <div>
        <Navbar>
          <nav>
            <ul>
              <ol> 
                <p>
                  <a 
                    href="#" 
                    className="btn btn-outline"
                    onClick={(e) => this.handleMenuClick(e, 0)}
                     >Home</a>
                  </p>
              </ol>
              <ol>
                <p>
                  <a 
                    href="#" 
                    className="btn btn-outline"
                    onClick={(e) => this.handleMenuClick(e, 1)}
                     >Jake Who?</a>
                  </p>
              </ol>
              <ol>
                <p>
                  <a 
                    href="#" 
                    className="btn btn-outline"
                    onClick={(e) => this.handleMenuClick(e, 2)}
                     >Events</a>
                </p>
              </ol>
              <ol>
                <p>
                  <a 
                    href="#" 
                    className="btn btn-outline"
                    onClick={(e) => this.handleMenuClick(e, 3)}
                     >Contact</a>
                </p>
              </ol>
            </ul>
          </nav>
        </Navbar>
        {this.renderComponent()}
      </div>
    );
  }
}

export default App;
