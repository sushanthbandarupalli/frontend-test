import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Api from "../axiosConfig";
import "./../styles/login.css";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PurchaseHistory = () => {
  const [orders, setOrder] = useState([]);
  console.log(orders, "orders");
  const { state } = useContext(AuthContext);
  async function getPurchaseHistory() {
    try {
      const response = await Api.post("/user/purchase-history", {
        userId: state?.user?.id,
      });
      if (response.data.success) {
        setOrder(response.data.orders);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }
  useEffect(() => {
    if (state?.user?.name) {
      getPurchaseHistory();
    }
  }, [state]);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");  // This will take the user back to the previous page
  };


  return (
    <div style={{
         width: "900px",
         height:"600px",
         display:"flex",
         flexDirection:"column",
         flexitems:"row",
         border: "2px solid black" 
         }}>
            <button className="BackTohome4" onClick={handleBack}>
        &larr;   Back
      </button>
      <h2 
      style={{
        "fontsize": "16px",
        "background-image":" linear-gradient(to bottom, red, #c00)",
        "font-weight":" 700",
        "color":"black"
          }}
      >Purchase History</h2>
      <div style={{ width: "100%", height:"100%", border: "2px solid black" }}>
      {orders.length ? (
      <div style={{ border: "1px solid black", height: "550px", overflowY: "auto" }}>
        {orders.map((order, i) => (
          <div key={i} style={{ border: "1px solid black", margin: "15px", padding: "10px 50px " }}>
            <h1 style={{ marginBottom: "0px" }}>Order {i + 1} </h1>
            <h2 style={{ marginBottom: "0px" }}>
              Total Paid Amount : {order.paidAmount}/-
            </h2>
            {order.purchasedbikes.map((bike, index) => (
              <div key={index} style={{ border: "2px solid black", margin: "5px", padding: "5px" }}>
                <p>{bike.name}</p>
                <img
                  alt=""
                  src={bike.sidePhoto}
                  style={{ width: "400px", height: "300px" }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    ) : (
      <h2>No orders found.</h2>
    )}
      </div>
    </div>
  );
};

export default PurchaseHistory;
