import React, { useState, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { useOnClickOutside } from '../hooks';
import GospelHamburger from '../GospelHamburger/GospelHamburger.js';
import GospelMenu from '../GospelMenu/GospelMenu.js';

function GHM() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div className="NavBar"ref={node}>
        <FocusLock disabled={!open}>
          <GospelHamburger className='menu' open={open} setOpen={setOpen} aria-controls={menuId} />
          <GospelMenu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>        
    </>
  );
}

export default GHM;
