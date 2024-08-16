import React from 'react'
import { LOGO } from '../utils/constants.js';

const Header = () => {
  return (
    <div className='w-full absolute z-30'>
      <div className='w-10/12 mx-auto'>
        <img src={LOGO} alt='logo' className='w-48'/>
      </div>

    </div>
  )
}

export default Header;