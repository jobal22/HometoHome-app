import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #0e2c3b;
  transform: ${({ open }) => open ? 'translateX(-100)' : 'translateX(-100%)'};
  height: 650px;
  text-align: left;
  padding-top: 35px;
  padding-bottom: 5px;
  position: absolute;
  top: 10;
  left: 0;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  width: 350px;
  min-width: 350px;
  max-width: 350px;

  h1 {
      color: white;
      padding-left: 20px;
      text-decoration: underline;
  }


  h2 {
    font-size: 17px;
    text-transform: uppercase;
    padding-left: 20px;
    padding-right: 10px;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    background-color: transparent;
    transition: color 0.3s linear;
    :focus {
      outline: none !important;
    }
    &:hover {
      color: #bfb391;
      cursor: pointer;
    }
  }

  .dropdown{
    margin-top: 30px;
    margin-bottom: 40px;
    border-radius: 7px;
}
  
  .dropdown-content {
    display: none;
    position: flex;
    top: 60px;
    margin-left: 30px;
    background-color: transparent;
    width: 300px;
    border-radius: 7px;
    border: 1px solid #bfb391;
    z-index: 1;
  }
  
  .dropdown-content p {
    color: white;
    font-weight: bold;
    padding: 5px 7px;
    text-decoration: none;
    display: block;
  }

.dropdown:hover .dropdown-content {display: block;}

@media screen and (min-width: 1230px) {
    margin-bottom: 250px;
}
`;