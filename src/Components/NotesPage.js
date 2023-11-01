import React, { useState } from "react";
import { Link } from "react-router-dom";
import PdfView from "./PdfView";

const NotesPage = (props) => {

  const [sClass, setClass] = useState(6);
  // console.log(sClass);

  return (
    <div className="container-xxl"  style={{marginTop:"60px"}}>
      <div className="row">
        <div className="col-lg-2">
          <div className="list-group">
            
            <div className="text-primary text-center bg-light p-1 my-3"><h3>{props.subject} Notes For Class {sClass}</h3></div>
            
            <Link to={`/DextereousLearning/Notes/${props.subject}/6/`} onClick={()=>{setClass(6)}} className="list-group-item list-group-item-action">
              For class 6th
            </Link>
            <Link to={`/DextereousLearning/Notes/${props.subject}/7/`} onClick={()=>{setClass(7)}} className="list-group-item list-group-item-action">
              For class 7th
            </Link>
            <Link to={`/DextereousLearning/Notes/${props.subject}/8/`} onClick={()=>{setClass(8)}} className="list-group-item list-group-item-action">
              For class 8th
            </Link>
            <Link to={`/DextereousLearning/Notes/${props.subject}/9/`} onClick={()=>{setClass(9)}} className="list-group-item list-group-item-action">
              For class 9th
            </Link>
            <Link to={`/DextereousLearning/Notes/${props.subject}/10/`} onClick={()=>{setClass(10)}} className="list-group-item list-group-item-action">
              For class 10th
            </Link>
            <Link to={`/DextereousLearning/Notes/${props.subject}/11/`} onClick={()=>{setClass(11)}} className="list-group-item list-group-item-action">
              For class 11th
            </Link>
            <Link to={`/DextereousLearning/Notes/${props.subject}/12/`} onClick={()=>{setClass(12)}} className="list-group-item list-group-item-action">
              For class 12th
            </Link>
          </div>
        </div>

        <div className="col-lg-10">
        <PdfView subject={props.subject} sClass={sClass}/>
        </div>

      </div>
    </div>
  );
};

export default NotesPage;
