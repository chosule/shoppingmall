import React from 'react'
import { useState } from 'react'
export default function NewProducts() {

    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log('클릭')
    }
    const [productName, setProductName ] = useState('');
    const [priceValue , setPriceValue ] = useState('');
    const [categoryValue ,setCategoryValue ] = useState('');
    const [explainValue, setExplainValue] = useState('');
    return (
        <div className='flex flex-col w-full items-center'>
            <h1>새로운 제품 등록</h1>
            <div className='w-full'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                    <input 
                        className="border-black w-full border border-slate-400 h-10" type="text" 
                        placeholder='제품명'
                        onChange={(e) => setProductName(e.target.value)}
                        value={productName}
                    />
                    <input 
                        className="border-black w-full border border-slate-400 h-10" type="number" 
                        placeholder='가격'
                        onChange={(e) => setPriceValue(e.target.value)}
                        value={priceValue}
                    />
                    <input 
                        className="border-black w-full border border-slate-400 h-10" type="text" 
                        placeholder="카테고리"
                        onChange={(e) => setCategoryValue(e.target.value)}
                        value={categoryValue}
                    />
                    <input 
                        className="border-black w-full border border-slate-400 h-10" type="text" 
                        placeholder='제품 설명'
                        onChange={(e) => setExplainValue(e.target.value)}
                        value={explainValue}
                    />
                    <input 
                        className="border-black w-full border border-slate-400 h-10" type="text" 
                        placeholder='옵션들'
                    />
                    <button text={'제품등록하기'}></button>
                </form>
            </div>
        </div>
    )
}
