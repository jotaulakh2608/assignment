import React from 'react'
import {BiImageAdd} from 'react-icons/bi'
import {CgHome} from 'react-icons/cg'
import {AiFillTag} from 'react-icons/ai'
import {RiShoppingCartFill} from 'react-icons/ri'
import {BsListUl} from 'react-icons/bs'
import {IoDocuments} from 'react-icons/io5'
import {BsFillPersonFill} from 'react-icons/bs'
import {HiDocumentReport} from 'react-icons/hi'
import {AiFillSetting} from 'react-icons/ai'
import {FiPower} from 'react-icons/fi'
import { useSelector } from 'react-redux'


export const Sidebar = () => {
    const show = useSelector((state)=> state.show.show)
    console.log(show);
  return (
    <div className={`${show?'w-1/5':''} hidden lg:flex  `}>
    <div className=' h-[95vh] shadow-md bg-white rounded-2xl p-3 mx-4'>
    
    <div className="h-20 flex p-4 items-center ">
        <div className={`${show?"text-4xl":""}`}>
            <BiImageAdd/>
        </div>
        <h1 className={`${show?'flex':'hidden'}`}  >
            LAUNDRY
        </h1>
    </div>
    
    <ul>
        <li className=' bg-blue-500 text-sm text-white flex items-center w-full p-4 rounded-lg py-3'>
<div className=" mr-2">
    <CgHome/>
</div>
<h1 className={`${show?'flex':'hidden'}`} >
    Dashboard
</h1>
        </li>
        <li className='text-sm text-gray-600 flex items-center w-full p-4 rounded-lg py-3'>
<div className=" mr-2 text-red-600 -rotate-90">
    <AiFillTag/>
</div>
<h1 className={`${show?'flex':'hidden'}`} >
    Pos
</h1>
        </li>
        <li className='text-sm text-gray-600 flex items-center w-full p-4 rounded-lg py-3'>
<div className=" mr-2 text-green-500">
    <RiShoppingCartFill/>
</div>
<h1 className={`${show?'flex':'hidden'}`} >
    Orders
</h1>
        </li>
        <li className='text-sm text-gray-600 flex items-center w-full p-4 rounded-lg py-3'>
<div className=" mr-2 text-yellow-500">
    <BsListUl/>
</div>
<h1 className={`${show?'flex':'hidden'}`} >
    Order Status Screen
</h1>
        </li>
        <li className='text-sm text-gray-600 flex items-center w-full p-4 rounded-lg py-3'>
<div className=" mr-2 text-red-600">
    <IoDocuments/>
</div>
<h1 className={`${show?'flex':'hidden'}`} >
    Expense
</h1>
        </li>
        <li className='text-sm text-gray-600 flex items-center w-full p-4 rounded-lg py-3'>
<div className=" mr-2 text-pink-700">
    <BsFillPersonFill/>
</div>
<h1 className={`${show?'flex':'hidden'}`} >
    Customers
</h1>
        </li>
        <li className='text-sm text-gray-600 flex items-center w-full p-4 rounded-lg py-3'>
        <div className=" mr-2 text-blue-600 -rotate-90">
    <AiFillTag/>
</div>
<h1 className={`${show?'flex':'hidden'}`} >
    Services
</h1>
        </li>
        <li className='text-sm text-gray-600 flex items-center w-full p-4 rounded-lg py-3'>
<div className=" mr-2 text-yellow-600">
    <HiDocumentReport/>
</div>
<h1 className={`${show?'flex':'hidden'}`} >
    Reports
</h1>
        </li>
        <li className='text-sm text-gray-600 flex items-center w-full p-4 rounded-lg py-3'>
<div className=" mr-2 text-yellow-700">
    <AiFillSetting/>
</div>
<h1 className={`${show?'flex':'hidden'}`} >
    Tools
</h1>
        </li>
        <li className='text-sm text-gray-600 flex items-center w-full p-4 rounded-lg py-3'>
<div className=" mr-2">
    <FiPower/>
</div>
<h1 className={`${show?'flex':'hidden'}`} > 
    Log Out
</h1>
        </li>
    </ul>


    </div>
    </div>
  )
}
