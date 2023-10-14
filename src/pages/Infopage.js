import React, { useEffect, useState } from "react";
import '../App.css'
import { Accountentdata } from "../components/Accountentdata.js";
import { useParams } from "react-router-dom";
import Page from "../components/Page";


const Infopage = () => {
  const [data]=useState(Accountentdata);
  const [info,setinfo]=useState([]);
  const id=useParams();
  useEffect(()=>{
    const fetch=async()=>{
      const inforamtion=data.filter((value)=>(value.id==id.id ) )
      setinfo(inforamtion);
    }
      fetch();
  },[setinfo])
  console.log(info);
  return (
    <>
    {
      info.length>0 ? (<Page info={info[0]}/>):""
    }
    </>
  );
};

export default Infopage;
