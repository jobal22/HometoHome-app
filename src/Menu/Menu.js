import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        About
      </a>
      <a href="/main/admin" tabIndex={tabIndex}>
        Admin
      </a>
      <a href="/main/users" tabIndex={tabIndex}>
        Users
      </a>
      <a href="/help" tabIndex={tabIndex}>
        Help
      </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;