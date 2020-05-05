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

export const SendButton = styled.button`
  border: 0 !important;
  background-color: grey !important;
  width: 100%;
  color: white;
  border-radius: 5px;

  &:hover {
    cursor: pointer !important;
  }

  &:focus {
    outline: none !important;
  }
`;