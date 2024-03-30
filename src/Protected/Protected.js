import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userPhone = localStorage.getItem("Email");

  const CheckUser = () => {
    if (!userPhone) {
      setIsLoggedIn(false);
      return navigate("/login");
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    CheckUser();
  }, [isLoggedIn]);

  return <>{isLoggedIn ? props.children : null}</>;
};

export default Protected;
