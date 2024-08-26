import React from 'react'
import { LOGO } from '../utils/constants.js';

const Header = () => {
  return (
    <div className='w-full absolute z-10 flex align-middle bg-slate-900'>
      <div className='w-10/12 mx-auto ml-8'>
        <img src={LOGO} alt='logo' className='w-48'/>
      </div>

      <div className='flex mr-4 align-middle '>
        <img className='w-16 h-16 rounded-full' src='https://avatars.githubusercontent.com/u/124153986?s=400&u=3fafe048ff2d9d36659e32a2a0e848cdc0056769&v=4' alt='profile'/>
        {/* <button onClick={}>Sign Out</button> */}
      </div>
    </div>
  )
}

export default Header;