import React from 'react';
import {useNavigate} from "react-router-dom";

export default function ProductCard({
    product,
    product: { id, image, title, category, price },
}) 
{
    const navigate = useNavigate();
     const handleClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

    return (
        <li 
            onClick={handleClick}
            className='shadow-md overflow-hidden cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-sky-200 duration-300'>
            <img className="h-688 w-full" src={image} alt={title}/>
            <div className='mt-2 px-2 text-lg flex justify-between items-center'>
                <h3 className='truncate'>{title}</h3>
                <p>{`₩${price}`}</p>
            </div>
            <p className='mb-2 px-2 text-grey-600'>{category}</p>
        </li>
  );
}
