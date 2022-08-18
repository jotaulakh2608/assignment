import React from 'react'
import {FaReact,FaThumbsUp} from 'react-icons/fa'

import {FiAlignJustify} from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/ai'
import {AiFillTag,AiOutlineDown} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {RiShoppingCartFill} from 'react-icons/ri'
import {TiTick} from 'react-icons/ti'
import {GiMailShirt,GiSonicShoes} from 'react-icons/gi'
import {FcGraduationCap,} from 'react-icons/fc'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux'
import { showSidebar } from './sidebarSlice'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Pending', 'Processing', 'Delivered', 'Ready To Deliver', 'Order', 'Done'],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 12, 3, 5, 2],
      backgroundColor: [
        '#4068fc',
        '#ffbf0b',
        '#55e364',
        '#f14e4e',
        '#8e8181',
        
      ],
      borderColor: [
        'white',
       
      
      ],
      borderWidth: 1,
    },
  ],
};


export const MainComponent = () => {
    const dispatch = useDispatch()
    const show = useSelector((state)=> state.show.show)
  return (
    <div className={`${show?"lg:w-4/5 w-full ":"w-full"} `}>
    
    <div className="h-10 flex  justify-between text-white mx-3 ">
<div className="  mr-2" onClick={()=>dispatch(showSidebar())}>
    <FiAlignJustify/>
</div>
<div className="flex items-center h-5 ">

<div className=" mr-2">
    <AiFillPlusCircle/>
</div>
<div className=" mr-2">
    <AiFillTag/>
</div>
<div className="mr-3">
    <BsFillPersonFill/>
</div>
<div className="w-16 shadow-md p-2 flex h-6 text-[10px] font-bold items-center  justify-center  bg-white rounded-md text-blue-500">
    English
    <div className=" text-gray-600">
        <AiOutlineDown/>
    </div>
</div>
</div>
    </div>
<div className="grid lg:grid-cols-4 grid-cols-1  lg:gap-x-4 gap-y-4 ">
    <div className="bg-white p-4 h-24 rounded-2xl shadow-sm ">
<div className="flex  justify-between">
    <div className="">
        <h1 className='text-gray-500 text-[12px]'>
            PENDING ORDER
        </h1>
        <h2 className='font-bold text-gray-700 mt-3'>
            202
        </h2>

    </div>
    <div className=" bg-gray-400 text-white rounded-full w-10  flex items-center justify-center h-10 my-auto">
        <RiShoppingCartFill/>
    </div>
</div>
    </div>
    <div className="bg-white p-4 h-24 rounded-2xl shadow-sm ">
<div className="flex  justify-between">
    <div className="">
        <h1 className='text-gray-500 text-[12px]'>
            PROCESSING ORDER
        </h1>
        <h2 className='font-bold text-gray-700 mt-3'>
            99
        </h2>

    </div>
    <div className=" bg-orange-400 text-white rounded-full w-10  flex items-center justify-center h-10 my-auto">
        <FaReact/>
    </div>
</div>
    </div>
    <div className="bg-white p-4 h-24 rounded-2xl shadow-sm ">
<div className="flex  justify-between">
    <div className="">
        <h1 className='text-gray-500 text-[12px]'>
            READY TO DELIVER
        </h1>
        <h2 className='font-bold text-gray-700 mt-3'>
            263
        </h2>

    </div>
    <div className=" bg-green-400 text-white rounded-full w-10  flex items-center justify-center h-10 my-auto">
        <FaThumbsUp/>
    </div>
</div>
    </div>
    <div className="bg-white p-4 h-24 rounded-2xl shadow-sm ">
<div className="flex  justify-between">
    <div className="">
        <h1 className='text-gray-500 text-[12px]'>
            DELIVERED ORDER
        </h1>
        <h2 className='font-bold text-gray-700 mt-3'>
            345
        </h2>

    </div>
    <div className=" bg-blue-500 text-white rounded-full w-10  flex items-center justify-center h-10 my-auto">
        <TiTick/>
    </div>
</div>
    </div>
    
</div>

<div className="lg:flex  ">
    <div className="lg:w-8/12 bg-white rounded-2xl h-full my-4 lg:mr-5 lg:p-5">
<div className="flex justify-between items-center ">
    <h1 className='lg:text-lg text-gray-600 text-sm'>
        Today's Delivery
    </h1>
    <div className="flex">
<input type="search" name="" id="" placeholder='Search Here' className='outline-none placeholder:text-sm lg:placeholder:text-lg w-32 border  rounded-lg p-2' />
<div className="flex justify-between ml-2 p-2 items-center text-gray-600 lg:w-36  rounded-lg border">
    <h1>
        All Orders
    </h1>
    <div className="text-sm">
        <AiOutlineDown/>
    </div>
</div>
    </div>
</div>
<div className="grid lg:grid-cols-3 grid-cols-1 mt-6 gap-3">
<div className="rounded-xl border-l-4 border border-yellow-500 p-3  ">
    <div className="flex justify-between text-gray-600 mb-2 text-[12px]">
        <h1>
            98659865
        </h1>
        <h1>
            ORD-0948
        </h1>
    </div>
    <div className="bg-gray-200 w-8 h-8 flex items-center text-xl justify-center rounded-full">
        <GiMailShirt/>
    </div>
</div>
<div className="rounded-xl border-l-4 border border-blue-500 p-3  ">
    <div className="flex justify-between text-gray-600 mb-2 text-[12px]">
        <h1>
            shiyas
        </h1>
        <h1>
            ORD-0948
        </h1>
    </div>
    <div className="flex">

    <div className="bg-gray-200 w-8 h-8 mr-2 flex items-center text-xl justify-center rounded-full">
        <GiMailShirt/>
    </div>
    <div className="bg-gray-200 w-8 h-8 flex items-center text-xl justify-center rounded-full">
        <GiMailShirt/>
    </div>
    </div>
</div>
<div className="rounded-xl border-l-4 border border-red-500 p-3  ">
    <div className="flex justify-between text-gray-600 mb-2 text-[12px]">
        <h1>
            ARIF
        </h1>
        <h1>
            ORD-0949
        </h1>
    </div>
    <div className="bg-gray-200 text-blue-500 w-8 h-8 flex items-center text-xl justify-center rounded-full">
        <FcGraduationCap/>
    </div>
</div>
<div className="rounded-xl border-l-4 border border-gray-500 p-3  ">
    <div className="flex justify-between text-gray-600 mb-2 text-[12px]">
        <h1>
            Walk In Customer
        </h1>
        <h1>
            ORD-0948
        </h1>
    </div>
    <div className="bg-gray-200 text-red-700 w-8 h-8 flex items-center text-xl justify-center rounded-full">
        <GiSonicShoes/>
    </div>
</div>
</div>
    </div>
    <div className="lg:w-4/12 bg-white rounded-2xl h-full shadow-md my-4 p-5">
<h1 className='text-gray-600 text-lg'>
    Overview
</h1>
<div className=" mt-6 mb-3">


<Doughnut data={data}/>
</div>

    </div>
</div> 


    </div>
  )
}
