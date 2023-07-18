import React, { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query"
import { getCart } from "../api/firebase"
import { useAuthContext } from "../context/AuthContext";


export default function MyCart() {
    const { uid } = useAuthContext();
    const {
        data: products
    } = useQuery(['carts'],() => getCart(uid));
    console.log('product',products)
    return (
        <section className='w-full'>
            <h2 className='text-3xl py-7 italic underline text-center font-bold'>My Cart</h2>
            <ul className='w-full flex gap-10 flex-wrap'>
                {products.map((product) => 
                    <li key={product.id} className='flex flex-col justify-evenly '>
                        <div className=''>
                            <img className="w-80 rounded" src={product.image} alt={product.id} />
                            <div>
                                <h4>{product.title}</h4>
                                <h4>{product.option}</h4>
                                <h4>{product.price}</h4>
                            </div>
                        </div>
                        <div>
                            <button>-</button>
                            <button>+</button>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    )
}
