import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Authenticate } from "../Auth/AuthContext";

const Logout = () => {
  //auth function and page navigate to home page
  const { setAuth } = useContext(Authenticate);
  const navigate = useNavigate();
  useEffect(() => {
    setAuth({user:null,check:false});
    toast.success("Logout Successfully!");
    navigate("/");
  });
  return <></>;
};

export default Logout;
