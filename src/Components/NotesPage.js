import React from "react";
import { Link } from "react-router-dom";
import PdfView from "./PdfView";

const NotesPage = (props) => {
  return (
    <div className="container-xxl"  style={{marginTop:"60px"}}>
      <div className="row">
        <div className="col-lg-2">
          <div className="list-group">
            
            <div className="text-primary text-center bg-light p-1 my-3"><h3>{props.subject} Notes</h3></div>
            
            <Link to={`/DextereousLearning/notes/${props.subject}/6/`} class="list-group-item list-group-item-action">
              For class 6th
            </Link>
            <Link to={`/DextereousLearning/notes/${props.subject}/7/`} class="list-group-item list-group-item-action">
              For class 7th
            </Link>
            <Link to={`/DextereousLearning/notes/${props.subject}/8/`} class="list-group-item list-group-item-action">
              For class 8th
            </Link>
            <Link to={`/DextereousLearning/notes/${props.subject}/9/`} class="list-group-item list-group-item-action">
              For class 9th
            </Link>
            <Link to={`/DextereousLearning/notes/${props.subject}/10/`} class="list-group-item list-group-item-action">
              For class 10th
            </Link>
            <Link to={`/DextereousLearning/notes/${props.subject}/11/`} class="list-group-item list-group-item-action">
              For class 11th
            </Link>
            <Link to={`/DextereousLearning/notes/${props.subject}/12/`} class="list-group-item list-group-item-action">
              For class 12th
            </Link>
          </div>
        </div>
        <div className="col-lg-10">
        <PdfView />                      
        {/* Routing will take place here. */}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
