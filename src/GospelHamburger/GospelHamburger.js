import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './GospelHamburger.styled';

const GospelHamburger = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <spana />
      <spanb />
      <spanc />
    </StyledBurger>
  )
}

GospelHamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default GospelHamburger;