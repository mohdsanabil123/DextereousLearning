import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CardPlaceholder from "./Placeholders/CardPlaceholder";

const FeeDash = () => {

  const [ account, setAccount ] = useState();               // Now using useState() and later we will use context api.
  const [ loading, setLoading ] = useState(true);

  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUserAccount();
    } else {
      navigate('/login')
    }
  }, [navigate]);

  const getUserAccount = async () => {
    setLoading(true)
    try {
      const account = await axios.get(`${process.env.REACT_APP_API_URL}/api/account/`, {
        headers:{
          "Content-Type": "text/json",
          "Authorization": localStorage.getItem('token')
      }
    })
    setAccount(account.data[0]);
    setLoading(false);
    
  } catch (error) {
    console.log("Somethong is wrong!")
  }
}

  return (
    <div>
      <div className="row py-4">
        <div className="col">
          <div aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
            <h2 className='text-primary'>Fee Dashboard</h2>
          </div>
        </div>
      </div>
      {loading ? <CardPlaceholder/> :
      <div className="row">
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20">Account ID</h6>
              <h2 className="text-right">
                <i className="fa fa-cart-plus f-left"></i>
                <span>{account ? account.id : "No data"}</span>
              </h2>
              <p className="m-b-0">
                Completed Orders<span className="f-right">351</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-green order-card">
            <div className="card-block">
              <h6 className="m-b-20">Fees Rate</h6>
              <h2 className="text-right">
                <i className="fa fa-rocket f-left"></i>
                <span>{account ? account.fee_rate : "No data"}</span>
              </h2>
              <p className="m-b-0">
                Completed Orders<span className="f-right">351</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-yellow order-card">
            <div className="card-block">
              <h6 className="m-b-20">Due Months</h6>
              <h2 className="text-right">
                <i className="fa fa-refresh f-left"></i>
                <span>{account ? account.due_months : "No data"}</span>
              </h2>
              <p className="m-b-0">
                Completed Orders<span className="f-right">351</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-pink order-card">
            <div className="card-block">
              <h6 className="m-b-20">Total Fees Due</h6>
              <h2 className="text-right">
                <i className="fa fa-credit-card f-left"></i>
                <span>{account ? account.total_amount : "No data"}</span>
              </h2>
              <p className="m-b-0">
                Completed Orders<span className="f-right">351</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default FeeDash;
