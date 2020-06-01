import React, { Component } from 'react';
import styled from 'styled-components';
import '../assets/stylesheets/App.css';
import HomeComponent from './HomeComponent';
import EventsComponent from './EventsComponent';
import ContactComponent from './ContactComponent';
import HamburgerIconImg from '../assets/hamburger_icon.png';
import { NavButton, CommonButtonTest } from './commonStyleComponents/commonButtons';
import { Navbar, NavbarName, Footer, SubFooter, MobileNavbar } from './commonStyleComponents/commonHeaders';
import { Title, Content, HamburgerIcon, SideBar, Close, SideBarItems, SideBarItem, SideBarButton } from './commonStyleComponents/commonDivs';

const NAV_DEFAULTS = [
  'HOME',
  'EVENTS',
  'CONTACT'
]

class App extends Component {
  state = {
    currentComponent: NAV_DEFAULTS[0],
    showSideMenu: false,
  };

  renderComponent() {
    const { currentComponent, showSideMenu } = this.state;

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

  handleHamburgerClick() {
    this.setState({ showSideMenu: true });
  }

  renderMobileNavbar() {
    if (this.state.showSideMenu) {
      return (
        <SideBar>
          <SideBarItems>
            <SideBarItem>
              Jake Soss
            </SideBarItem>
            <SideBarButton 
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              position={60} 
              onClick={(e) => {
                this.handleMenuClick(e, 0);
                this.setState({ showSideMenu: false });
              }}>
                Home
             </SideBarButton>
             <SideBarButton position={120} onClick={(e) => {
              this.handleMenuClick(e, 1);
              this.setState({ showSideMenu: false });
            }}>
              Events
            </SideBarButton>
             <SideBarButton position={180} onClick={(e) => {
              this.handleMenuClick(e, 2);
              this.setState({ showSideMenu: false });
            }}>
              Contact
            </SideBarButton>
          </SideBarItems>
          <Close onClick={() => this.setState({ showSideMenu: false })}>
           X
          </Close>
        </SideBar>
        );
    } 

    return (
      <MobileNavbar>
        <HamburgerIcon onClick={() => this.handleHamburgerClick()} image={HamburgerIconImg} />
        <NavbarName>
          Jake Soss
        </NavbarName>
      </MobileNavbar>
    );
  }

  renderNormalNavbar() {
    return (
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
      );
  }

  handleMenuClick(e, idx) {
    this.setState({ currentComponent: NAV_DEFAULTS[idx] });
  }

  render() {
    const isMobile = window.innerWidth <= 600 ? true : false;

    const { currentComponent } = this.state;
    return (
      <div>
        {isMobile ? this.renderMobileNavbar() : this.renderNormalNavbar()}
        {this.renderComponent()}
        <Footer />
        <SubFooter />
      </div>
    );
  }
}

export default App;
