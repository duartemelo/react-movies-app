import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getIsLoggedIn } from "../services/auth";

const useValidateAccess = () => {
  const navigate = useNavigate();
  const isLoggedIn = getIsLoggedIn();

  const [isValid, setIsValid] = useState(!!isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      setIsValid(false);
      return;
    }
    setIsValid(true);
  }, [isLoggedIn, navigate]);

  return isValid;
};

export default useValidateAccess;
