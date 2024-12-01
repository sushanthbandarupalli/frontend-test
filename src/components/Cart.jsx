import React, { useContext, useEffect, useState }  from "react";
import toast from "react-hot-toast";
import Api from "../axiosConfig";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const router = useNavigate();
  const [allBikes, setAllBikes] = useState([]);
  console.log(allBikes, "allBikes");
  const { state } = useContext(AuthContext);

  const CalculateTotaPrice = () => {
    return allBikes.reduce((acc, bike) => acc + bike.price, 0);
  };

  const TotalPrice = CalculateTotaPrice();
  const gst = TotalPrice * 0.18;
  const FinalPrice = TotalPrice + gst;

  async function GetCartProducts() {
    try {
      const response = await Api.post("/user/get-cart-products", {
        userId: state?.user?.id,
      });
      if (response.data.success) {
        setAllBikes(response.data.cartBikes);
      }
    } catch (error) {
      console.log(error, "erorr her");
      console.log(error.response.data.error);
    }
  }

  async function OrderBikes() {
    const bikeIds = allBikes.map((bike) => bike._id);
    try {
      const response = await Api.post("/user/buy-bike", {
        userId: state?.user?.id,
        bikeIds: bikeIds,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        router("/purchase-history");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  useEffect(() => {
    if (state?.user?.id) {
      GetCartProducts();
    }
  }, [state]);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");  // This will take the user back to the previous page
  };

  return (
    
    <div style={{ display: "flex", justifyContent: "space-around" }}>
       <button className="BackTohome1" onClick={handleBack}>
        &larr;   Back
      </button>
      <div
        class="tgs-cards"
        style={{
          marginBottom: "60px",
          width: "40%",
          border: "2px solid black",
          padding: "20px",
        }}
      >
        {allBikes.length ? (
          allBikes.map((bike) => (
            <article class="tgs-card">
              <h3 class="tgs-card--title">{bike.name}</h3>
              <p class="tgs-card--description">{bike.description}</p>
              <div class="tgs-card--img-container">
                <img
                  src={bike.sidePhoto}
                  alt="dark bike"
                  class="tgs-card--img"
                />
              </div>
              <p
                class="btn btn-yellow tgs-card--yellow-btn"
                style={{ width: "200px", height: "40px", cursor: "pointer" }}
                onClick={() => router(`/bike/${bike._id}`)}
              >
                Check Details
              </p>
            </article>
          ))
        ) : (
          <h1>No Bikes found.</h1>
        )}
      </div>
      <div
        style={{
          width: "40%",
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginBottom: "100px" }}>Total Price Details</h2>
        <h3>Price : {TotalPrice}/-</h3>
        <h3>GST 18% : {gst}/-</h3>
        <h2>Totat Price : {FinalPrice}/-</h2>
        <button
          style={{
            width: "38%",
            height: "62px",
            fontSize: "16px",
            backgroundImage: "linear-gradient(to bottom, red, #c00)",
            fontWeight: "700",
            marginTop: "50px",
          }}
          onClick={OrderBikes}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
