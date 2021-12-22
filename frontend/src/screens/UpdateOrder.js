import React from "react";

const UpdateOrder = () => {
    const updateOrder =()=>{
        alert("Order Updated");
    }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Update Order</h1>
          
          <form onClick={updateOrder}>

          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrder;
