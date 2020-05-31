import styled from 'styled-components';

export const CommonButton = styled.button`
  border: 0 !important;

  &:hover {
    cursor: pointer !important;
  }

  &:focus {
    outline: none !important;
  }
`;

export const NavButton = styled.button`
  color: ${props => props.primary ? 'blue' : 'white'}; 

  &:hover {
    cursor: pointer !important;
  }
`;

export const BackButton = styled(CommonButton)`
`;

export const SendButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 425px) {
    margin-bottom: 15vh;
  }
`;

export const SendButton = styled.button`
  border: 0 !important;
  background-color: #3B5EA3 !important;
  width: 100%;
  height: 50px;
  width: 203px;
  color: white;

  &:hover {
    cursor: pointer !important;
  }

  &:focus {
    outline: none !important;
  }
`;