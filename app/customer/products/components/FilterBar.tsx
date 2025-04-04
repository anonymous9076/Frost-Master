import React from 'react'

const FilterBar = () => {
    const category= [
        {title:'Cloud Kitchen Equipments'},
        {title:'Commercial Refrigerators'},
        {title:'Restaurant Equipment'},
        {title:'Bakery Machinery'},
    ]
    const price= [
        {title:'$20,000.00 -  50,000.00'},
        {title:'$20,000.00 -  50,000.00'},
        {title:'$20,000.00 -  50,000.00'},
        {title:'$20,000.00 -  50,000.00'},
    ]
    const rating= [
        {title:'5 Star Rating'},
        {title:'4 Star Rating'},
        {title:'3 Star Rating'},
        {title:'2 Star Rating'},
        {title:'1 Star Rating'},
    ]
    const available= [
        {title:'In Stock'},
        {title:'Out of Stock'},
       
    ]

  return (
    <div className='w-full px-[2rem] flex flex-col gap-4 h-fit'>
        <div className='border border-gray-400 px-[2rem] py-[1rem] rounded-3xl '>
            <h1 className='text-[22px] border-l-3 border-[#35736E] text-[#35736E] px-[1rem] mb-2 font-bold'>Categories</h1>
            <ul>
                {category.map((item,index)=>

                    <li key={index} className='items-center flex py-2 gap-2'>
                    <input type='checkbox'></input>
                    {item.title}
                    </li>
                )}
            </ul>
        </div>
        <div className='border border-gray-400 px-[2rem] py-[1rem] rounded-3xl '>
            <h1 className='text-[22px] border-l-3 border-[#35736E] text-[#35736E] px-[1rem] mb-2 font-bold'>Price Range</h1>
            <ul>
                {price.map((item,index)=>

                    <li key={index} className='items-center flex py-1 gap-2'>
                    <input type='checkbox'></input>
                    {item.title}
                    </li>
                )}
            </ul>
        </div>
        <div className='border border-gray-400 px-[2rem] py-[1rem] rounded-3xl '>
            <h1 className='text-[22px] border-l-3 border-[#35736E] text-[#35736E] px-[1rem] mb-2 font-bold'>Rating</h1>
            <ul>
                {rating.map((item,index)=>

                    <li key={index} className='items-center flex py-1 gap-2'>
                    <input type='checkbox'></input>
                    {item.title}
                    </li>
                )}
            </ul>
        </div>
        <div className='border border-gray-400 px-[2rem] py-[1rem] rounded-3xl '>
            <h1 className='text-[22px] border-l-3 border-[#35736E] text-[#35736E] px-[1rem] mb-2 font-bold'>Availability</h1>
            <ul>
                {available.map((item,index)=>

                    <li key={index} className='items-center flex py-1 gap-2'>
                    <input type='checkbox'></input>
                    {item.title}
                    </li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default FilterBar