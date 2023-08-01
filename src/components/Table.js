import React from "react";
import {  useContractRead, useNetwork,useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import CrowdFundingContractInterface from '../contracts/abi/Crowdfunding.json';
import Trs from './Trs';

import addressContract from '../contracts/contant/contentContract.json'


const addressBnb = addressContract.addressBnb;
const addressEth = addressContract.addresseth;
const addressArbi = addressContract.addressArbi;
const addressOpti = addressContract.addressOpti;

export const Table = () => {
  const { chain } = useNetwork()
  

  let crowdFundingContractConfig = {};
    if (chain === undefined){

      console.log("plz connect metamask")
    }else{
      crowdFundingContractConfig = {
        address: (chain?.id === 56 ? addressBnb : (chain?.id === 1 ? addressEth : (chain?.id === 10 ? addressOpti : addressArbi))),
        abi: CrowdFundingContractInterface,
      };
    }

  const { data: returnAllProjects } = useContractRead({
    ...crowdFundingContractConfig,
    functionName: 'returnAllProjects',
  });
  console.log(returnAllProjects)

  return (
    <div className="  my-5  mx-5 bg-[#FFFFFF]   ">
      <div className="border rounded-lg  overflow-hidden">
        <div className="flex justify-between p-2 border-b">
          <div className="text-xl font-bold py-2">
            <h1>Grants</h1>
          </div>
          <div>
            <form className="max-w-sm ">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 cursor-pointer w-6 h-6 my-auto text-blue-500 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 pl-10 pr-4 bg-transparent text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className=" inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-[#F6F8FB] border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        User address
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        protocol
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Approvers
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      returnAllProjects?.map((each, index) => {
                        return(
                          <Trs key={index} contractAddress={each}/>

                        )
                      })
                    }
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-3 md:my-6">
          <ul className="flex list-style-none font-semibold space-x-2 sm:space-x-8 md:space-x-10 lg:space-x-14 items-center">
            <li className="page-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 m-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </li>
            <li className="page-item">
              <p className="page-link relative block py-1.5 px-3 cursor-pointer border-0  outline-none transition-all duration-300 rounded text-gray-800 hover:text-[#FFFFFF] hover:bg-[#1A75FF] focus:shadow-none">
                1
              </p>
            </li>
            <li className="page-item">
              <p className="page-link relative block py-1.5 px-3 cursor-pointer  border-0  outline-none transition-all duration-300 rounded text-gray-800 hover:text-[#FFFFFF] hover:bg-[#1A75FF] focus:shadow-none">
                2
              </p>
            </li>
            <li className="page-item">
              <p className="page-link relative block py-1.5 px-3 cursor-pointer  border-0  outline-none transition-all duration-300 rounded text-[#FFFFFF] bg-[#1A75FF] hover:text-[#FFFFFF] hover:bg-[#1A75FF] focus:shadow-none">
                3
              </p>
            </li>
            
            <li className="page-item">
              <p className="page-link relative block py-1.5 px-3 cursor-pointer  border-0  outline-none transition-all duration-300 rounded text-gray-800 hover:text-[#FFFFFF] hover:bg-[#1A75FF] focus:shadow-none">
                4
              </p>
            </li>
            
            <li className="page-item">
              <p className="page-link relative block py-1.5 px-3 cursor-pointer  border-0  outline-none transition-all duration-300 rounded text-gray-800 hover:text-[#FFFFFF] hover:bg-[#1A75FF] focus:shadow-none">
                5
              </p>
            </li>
            <li className="page-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 m-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Table;



