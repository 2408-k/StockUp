import React from "react";
import { useDispatch } from "react-redux";



const LogOut = () => {
    const dispatch = useDispatch();
 const submitHandler =(event) => {
    event.preventDefault();
    dispatch({ type: "logout" });
    localStorage.removeItem("token");
    
 };
  return (
    <div>
     <form onSubmit={submitHandler}>

        <button type="submit" className="btn btn-danger btn-sm">
          Logout
        </button>
      </form>
    </div>
  );
};
export default LogOut;