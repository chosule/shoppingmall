import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillPencilFill } from 'react-icons/bs';
import { FiShoppingBag } from "react-icons/fi"
import { login , logout, onUserStateChange} from "../api/firebase"
import { useState } from 'react';
import { useEffect } from 'react';
import User from '../pages/User';
import Button from './ui/Button';
import { useAuthContext } from './context/AuthContext';

export default function Header() {
    // const HandleLogin = () =>{
    //     login()
    // }
    // const HandleLogout = () =>{
    //     logout()
    // }

    const {user, login, logout} = useAuthContext();
    return (
        <header className='flex justify-between border-b border-gray-300 p-4'>
            <Link to='/' className='flex items-center text-4xl text-brand'>
                <FiShoppingBag />
                <h1 className='font-bold italic indent-3 underline'>Shop Bosder</h1>
            </Link>
            <nav className='flex items-center gap-4 italic'>
                <Link to='/products'>Products</Link>
                {user && <Link to='/carts'>Carts</Link>}
                {user && user.isAdmin && (
                    <Link to='/products/new' className='text-2xl'>
                    <BsFillPencilFill />
                </Link>
                )}
                {user && <User user={user}/>}
                {!user ? 
                    (<Button onClick={login} text="Login"/>)
                    :  
                    (<Button onClick={logout} text="Logout"/>)
                }
            </nav>
        </header>
    )
}
