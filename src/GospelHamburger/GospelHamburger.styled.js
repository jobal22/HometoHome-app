import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: flex;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  :focus {
    outline: none !important;
  }    

  spana {
    width: 1.5rem;
    height: 0.25rem;
    background: #0e2c3b;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
  }

  spanb {
    width: 1.75rem;
    height: 0.25rem;
    background: #0e2c3b;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 12px 12px ;
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
  }

  spanc {
    width: 2rem;
    height: 0.25rem;
    background: #0e2c3b;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 5px -5px;
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-90deg)' : 'rotate(0)'};
    }
  }
`;
