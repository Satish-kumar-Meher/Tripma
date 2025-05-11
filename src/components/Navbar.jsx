import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `hover:text-blue-600 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'}`;

  // const user = JSON.parse(localStorage.getItem('users'))
  // console.log(user)

  let user = null;
try {
  const storedUser = localStorage.getItem('users');
  if (storedUser) {
    user = JSON.parse(storedUser);
  }
} catch (err) {
  console.error("Failed to parse user from localStorage:", err);
}
console.log(user)

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <NavLink to="/" className="text-2xl font-bold text-blue-600">Tripma</NavLink>

      <div className="hidden md:flex gap-6 items-center">
      <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/flights" className={navLinkClass}>Flights</NavLink>
        <NavLink to="/currentbookings" className={navLinkClass}>Your Bookings</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>
        <NavLink to="/signin" className={navLinkClass}>Sign in</NavLink>
        <NavLink to="/signup" className={navLinkClass} >
          {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign up</button> */}
          Sign Up
        </NavLink>
      </div>

      <button onClick={() => setOpen(!open)} className="md:hidden text-blue-600 text-2xl">
        ☰
      </button>

      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 z-10">
          <NavLink to="/flights" className={navLinkClass} onClick={() => setOpen(false)}>Flights</NavLink>
          <NavLink to="/hotels" className={navLinkClass} onClick={() => setOpen(false)}>Hotels</NavLink>
          <NavLink to="/packages" className={navLinkClass} onClick={() => setOpen(false)}>Packages</NavLink>
          <NavLink to="/signin" className={navLinkClass} onClick={() => setOpen(false)}>Sign in</NavLink>
          <NavLink to="/signup" onClick={() => setOpen(false)}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">Sign up</button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
