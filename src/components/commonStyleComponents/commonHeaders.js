import styled from 'styled-components';

export const MobileNavbar = styled.header`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #3A475B;

  & ul {
    padding-left: 0px !important;
  }

  & ol {
    padding-left: 0px !important;
  }

  & l1 {
    margin: 10px;
  }
`;

export const Navbar = styled.header`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #3A475B;

  & l1 {
    margin: 10px;
  }
`;

export const NavbarName = styled.div`
  color: white;
  font-weight: bold;
  margin-right: 30px;
`;

export const IconsWrapper = styled.div`
  width: 10vw;
  display: flex;
  justify-content: space-between;
`;

export const Footer = styled.div`
  height: 62px;
  width: 100%;
  background-color: #3A475B;
  display: flex;
  justify-content: center;
  bottom: 0px;
  align-items: center;
  position: fixed;
  z-index: 100;
`;

export const SubFooter = styled.div`
  height: 17px;
  width: 100%;
  background-color: #3B5EA3;
  bottom: 0px;
  position: fixed;
  z-index: 100;
`;