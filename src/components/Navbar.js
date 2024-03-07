import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const item = useSelector((state=> state.cart));
  console.log(item)
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <span className='logo'>Redux Store</span>
      <div>
        <Link className='navLink' to='/' >Home</Link>
        <Link className='navLink' to='/cart'>Cart</Link>
        <span className='cartcount'>Cart items: {item.length}</span>
      </div>
    </div>
  )
}

export default Navbar