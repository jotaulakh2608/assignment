import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { filterTrending } from "./reducer";

export const Navbar = ({ search, setSearch }) => {
  const dispatch = useDispatch();
  // const [search, setsearch] = useState("")

  const handleOnchange = (e) => {
    setSearch(e.target.value);
  };
  // useEffect(() => {
  //     dispatch(filterTrending(search))
  // }, [dispatch, search])

  console.log(search);

  // useEffect(() => {
  //     dispatch(filterTrending(search))
  // }, [search, dispatch])

  const navigate = useNavigate();
  console.log(search);
  return (
    <>
      <div className="fixed w-full top-0">
        <nav class="bg-white  px-2 sm:px-4 py-2.5 border-b shadow-md border-black  ">
          <div class=" flex flex-wrap  items-center justify-between">
            <a href="https://flowbite.com/" class="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/All_News_Channel.svg/1200px-All_News_Channel.svg.png"
                class="mr-3 h-12 "
                alt="Flowbite Logo"
              />
            </a>
            <div class="flex md:order-2">
              <div class=" relative ">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm "
                  placeholder="Search..."
                  value={search}
                  onChange={handleOnchange}
                />
              </div>
            </div>
            <div
              class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white -gray-800 md:-gray-900 dark:border-gray-700">
                <NavLink to='/' className={({isActive})=>isActive?'active':'text-gray-700'}>
                  <li
                    class="block py-2 pr-4 pl-3  cursor-pointer "
                    aria-current="page"
                  >
                    TRENDING
                  </li>
                </NavLink>

                <NavLink className={({isActive})=>isActive?'active':'text-gray-700'} to='/nation'>
                  <li
                    class="block py-2 pr-4 pl-3   cursor-pointer "
                
                  >
                    NATION
                  </li>
                </NavLink>
                <NavLink className={({isActive})=>isActive?'active':'text-gray-700'} to="/world">
                  <li
                    class="block py-2 pr-4 pl-3   cursor-pointer"
                    
                  >
                    WORLD
                  </li>
                </NavLink>
                <NavLink className={({isActive})=>isActive?'active':'text-gray-700'} to="/sports">
                  <li
                    class="block py-2 pr-4 pl-3   cursor-pointer"
             
                  >
                    SPORTS
                  </li>
                </NavLink>
                <NavLink className={({isActive})=>isActive?'active':'text-gray-700'} to="/business">
                  <li
                    class="block py-2 pr-4 pl-3  cursor-pointer"
                 
                  >
                    BUISNESS
                  </li>
                </NavLink>
                <NavLink className={({isActive})=>isActive?'active':'text-gray-700'} to="/health">
                  <li
                    class="block py-2 pr-4 pl-3   cursor-pointer"
                   
                  >
                    HEALTH
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="mb-24"></div>
    </>
  );
};
