import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Api from "../axiosConfig";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Orders = () => {
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
    <div style={{ width: "100%", border: "2px solid black" }}>
       <button className="BackTohome1" onClick={handleBack}>
        &larr;   Back
      </button>
      <h2>Purchase History</h2>
      <div style={{ width: "100%", border: "2px solid black" }}>
        {orders.length ? (
          <div style={{ border: "1px solid black", height: "300px" }}>
            {orders.map((order, i) => (
              <div>
                <h1 style={{ marginBottom: "10px" }}>Order {i + 1} :</h1>
                <h2 style={{ marginBottom: "10px" }}>
                  Total Paid Amount : {order.paidAmount}/-
                </h2>
                {order.purchasedbikes.map((bike) => (
                  <div style={{ border: "2px solid black" }}>
                    <p>{bike.name}</p>
                    <img alt=""
                      src={bike.sidePhoto}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                ))}
                <img alt="" />
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

export default Orders;
