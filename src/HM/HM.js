import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks';
import FocusLock from 'react-focus-lock';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.js'
import Menu from '../Menu/Menu.js'


function HM() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
      <>
        <div className="NavBar"ref={node}>
          <FocusLock disabled={!open}>
            <HamburgerMenu open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>        
      </>
  );
}

export default HM;
