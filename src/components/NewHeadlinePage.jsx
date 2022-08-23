import React from "react";
import { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";


export const NewHeadlinePage = ({filtereditems,item, search}) => {

  const [currentPage, setcurrentPage] = useState(1);
  const [perPage, setperPage] = useState(6);

  const indexofLastPage = currentPage * perPage;
  const indexofFirstPage = indexofLastPage - perPage;

  const nextPage = () => {
    if (filtereditems.length>12&& currentPage<=3) {
      setcurrentPage(currentPage + 1);
   
    }
    else if(currentPage===1) {
        setcurrentPage(currentPage + 1);
    }
     else  {
      setcurrentPage(currentPage);
    }

   
    
   
  };
  const backPage = () => {
    if (currentPage >= 2) {
      setcurrentPage(currentPage - 1);
    } else {
      setcurrentPage(currentPage);
    }
  };
console.log(filtereditems, "data");
  console.log(item, "header" );
console.log(search , "search");


  return (
    <div className="m-4">
    {search==='' ? <div className="my-2">
        <h1>Top News</h1>
        <img src={item[2].image_url} alt="" className="h-96 w-screen my-2" />
        <h1 className="text-2xl">{item[2].description}</h1>
        <h1 className="text-gray-600 my-2">{item[2].title}..</h1>
        <div className="flex text-gray-400 text-sm items-center">
          <div className="mr-1">
            <BiTimeFive />
          </div>
          <h2>{item[2].pubDate}</h2>
        </div>
      </div>:null}
  
   
      <div className=" grid grid-cols-3 h-[450px] ">
        {filtereditems.filter(i=>i.description.toLowerCase().includes(search.toLowerCase()))
          .slice(indexofFirstPage, indexofLastPage)
          .map((i, key) => (
            <div key={key} className="border   flex p-3 h-56">
              <div className="w-1/3">
                <img src={i.image_url} alt="" className="h-20 w-20" />
              </div>
              <div className="w-2/3">
                <h1 className="h-28">{i.description.slice(0, 100)}..</h1>
                <h1 className="text-gray-600">{i.title.slice(0, 60)}..</h1>
                <div className="flex text-gray-400 text-sm items-center">
                  <div className="mr-1">
                    <BiTimeFive />
                  </div>
                  <h2>{i.pubDate}</h2>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-between my-4">
        <button className="bg-black text-white h-10 w-24" onClick={backPage}>
          Back
        </button>
        <button className="bg-black text-white h-10 w-24" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};
