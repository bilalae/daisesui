import React from 'react'

const Nav = () => {
  return (
    <div className='sticky top-0 z-50 w-full'>
      <div className='navbar bg-base-100 px-4 shadow-md backdrop-blur-sm bg-opacity-70'>
        
        {/* Navbar Start */}
        <div className='navbar-start'>
          <a className='btn btn-secondary normal-case text-xl'>daisies</a>
        </div>

        {/* Navbar End */}
        <div className='navbar-end flex-1 justify-end'>

          {/* Desktop Menu */}
          <ul className='menu menu-horizontal px-1 hidden lg:flex'>
            <li className='text-secondary'><a>Home</a></li>
            <li className='text-secondary'><a>About</a></li>
            <li className='text-secondary'><a>Contact</a></li> 
          </ul>

          {/* Mobile Dropdown Menu */}
          <div className='dropdown dropdown-left dropdown-start lg:hidden'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className='menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Nav
