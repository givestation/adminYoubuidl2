import {React, useState} from "react";
import {  useContractRead, useNetwork,useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import CrowdFundingContractInterface from '../contracts/abi/Crowdfunding.json';
import ProjectContractInterface from '../contracts/abi/Project.json';


import addressContract from '../contracts/contant/contentContract.json'


const addressBnb = addressContract.addressBnb;
const addressEth = addressContract.addresseth;
const addressArbi = addressContract.addressArbi;
const addressOpti = addressContract.addressOpti;
export const Table = ({contractAddress,index}) => {
  const { chain, chains } = useNetwork()
  const { address, connector, isConnected } = useAccount();
  console.log(contractAddress , index,"contractAddress , key")
  const [showAndHide, setShowAndHide] = useState(true);


  //===============each project contract config=============
  const projectContractConfig = {
    address: contractAddress,
    abi: ProjectContractInterface,
  };

  const { data: projectDetails } = useContractRead({
    ...projectContractConfig,
    functionName: 'getProjectDetails',
  });

  let projectStarter; 
  let minContribution ;
  let projectDeadline;
  let goalAmount ;
  let noOfContributors;
  let completedTime ;
  let currentAmount ;
  let title;
  let desc ;
  let currentState; 
  let balance ;
  let website ;
  let social ;
  let github;
  let projectCover;
  console.log('goalAmount', projectDetails);

  if(projectDetails !== undefined ){
    projectStarter = projectDetails[0];
    projectDeadline = projectDetails[3];
    goalAmount = projectDetails[4];
    noOfContributors= projectDetails[5];
    completedTime = projectDetails[6];
    currentAmount = projectDetails[7];
    title = projectDetails[8];
    desc = projectDetails[9];
    currentState = projectDetails[10];
    balance = projectDetails[11];
    website = projectDetails[12];
    social = projectDetails[13];
    github = projectDetails[14];
    projectCover = projectDetails[15];
  }else{
    console.log("projectDetails is undefined");
  }
  //===========verify Project====================
  const {
    config: verifyProjectConfig,
    error: verifyProjectConfigError,
    isError: isVerifyProjectConfigError,
  } = usePrepareContractWrite({
    ...projectContractConfig,
    functionName: 'setVerification',
    args: [
      true
    ],
  });

  const {
    data: verifyProjectReturnData,
    write: setVerification,
    error: verifyProjectError,
  } = useContractWrite(verifyProjectConfig);

  //===========Show Project====================
  const {
    config: showProjectConfig,
    error: showProjectConfigError,
    isError: isShowProjectConfigError,
  } = usePrepareContractWrite({
    ...projectContractConfig,
    functionName: 'setVisibility',
    args: [
      showAndHide
    ],
  });

  const {
    data: showProjectReturnData,
    write: setVisibility,
    error: showProjectError,
    isSuccess
  } = useContractWrite(showProjectConfig);

//==================read functiuons=============
  const { data: isRevealed } = useContractRead({
    ...projectContractConfig,
    functionName: 'isRevealed',
  });

  const { data: isVerified } = useContractRead({
    ...projectContractConfig,
    functionName: 'isVerified',
  });

  const { data: filterTags } = useContractRead({
    ...projectContractConfig,
    functionName: 'filterTags',
  });
  console.log(chain, chains);

  const setVerify = () => {
    setVerification?.();
  }

  const setShow = () => {
    setVisibility?.();
    console.log("object")
    if(isSuccess && showAndHide === true){
      setShowAndHide(false);
    }else if(isSuccess && showAndHide === false){
      setShowAndHide(true);
    }
  }
  
  return (
    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
        <div className="bg-green-200 p-2 rounded-full mr-2 hidden md:block">
          <img
            src="./assets/icons/arrow.svg"
            className="  w-5 h-5"
            alt=""
          />
        </div>
        <span>{projectStarter?.slice(0,15)}...</span>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {desc?.slice(0,30)}...
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {filterTags}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {chain?.nativeCurrency.symbol}
      </td>

      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {Number(noOfContributors)}
      </td>
      {isVerified ? 
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <span className="bg-[#ECFBE6] text-[#3BB900] rounded-md py-1  font-bold px-2">
            Verified
          </span>
        </td> :
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <span className="bg-[#ECFBE6] text-[#000000] rounded-md py-1  font-bold px-2">
            UnVerified
          </span>
        </td>}
      

      <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
        <button
          disabled={isVerified ? true : false}
          onClick={() => {
            setVerify();
          }}
          className="bg-[#1A75FF] bg-Chinese-Blue text-blue w-full sm:w-auto text-Pure-White rounded-4xl py-1 px-2.5 font-medium "
        >
          setVerify
        </button>
      </td>

      {isRevealed ? 
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <span className="bg-[#ECFBE6] text-[#3BB900] rounded-md py-1  font-bold px-2">
            Revealed
          </span>
        </td> :
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <span className="bg-[#ECFBE6] text-[#000000] rounded-md py-1  font-bold px-2">
            UnRevealed
          </span>
        </td>}
      

      <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
        <button
          disabled={isVerified ? true : false}
          onClick={() => {
            setShow();
          }}
          className="bg-[#1A75FF] bg-Chinese-Blue text-blue w-full sm:w-auto text-Pure-White rounded-4xl py-1 px-2.5 font-medium "
        >
          {showAndHide ? "setShow" : "setHide"}
        </button>
      </td>
      
    </tr>
  );
};
export default Table;



