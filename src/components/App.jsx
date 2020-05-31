import React, { Component } from 'react';
import styled from 'styled-components';
import '../assets/stylesheets/App.css';
import HomeComponent from './HomeComponent';
import EventsComponent from './EventsComponent';
import ContactComponent from './ContactComponent';
import { NavButton, CommonButtonTest } from './commonStyleComponents/commonButtons';
import { Navbar, NavbarName, Footer, SubFooter } from './commonStyleComponents/commonHeaders';
import { Title, Content } from './commonStyleComponents/commonDivs';

const NAV_DEFAULTS = [
  'HOME',
  'EVENTS',
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
      case 'EVENTS': 
        return (
          <EventsComponent />
          )
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
                   >Events</a>
              </p>
            </ol>
            <ol>
              <p>
                <a 
                  href="#" 
                  className="btn btn-outline"
                  onClick={(e) => this.handleMenuClick(e, 2)}
                   >Contact</a>
              </p>
            </ol>
          </ul>
          <NavbarName>
            Jake Soss
          </NavbarName>
        </Navbar>
        {this.renderComponent()}
        <Footer />
        <SubFooter />
      </div>
    );
  }
}

export default App;
