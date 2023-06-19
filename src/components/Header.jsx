import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillPencilFill } from 'react-icons/bs';
import { FiShoppingBag } from "react-icons/fi"
import { login } from "../api/firebase"
export default function Header() {
    return (
        <header className='flex justify-between border-b border-gray-300 p-4'>
            <Link to='/' className='flex items-center text-4xl text-brand'>
                <FiShoppingBag />
                <h1 className='font-bold italic indent-3 underline'>Shop Bosder</h1>
            </Link>
            <nav className='flex items-center gap-4 italic'>
                <Link to='/products'>Products</Link>
                <Link to='/carts'>Carts</Link>
                <Link to='/products/new' className='text-2xl'>
                    <BsFillPencilFill />
                </Link>
                <button onClick={login} className='italic'>Login</button>
            </nav>
        </header>
    )
}
