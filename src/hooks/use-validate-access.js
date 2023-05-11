import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getUid } from "../services/auth";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slices/auth-slice";

const useValidateAccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uid = getUid();

  const [isValid, setIsValid] = useState(!!uid);

  useEffect(() => {
    if (!uid) {
      dispatch(authActions.logout());
      setIsValid(false);
      return;
    }
    dispatch(authActions.login(uid));
    // TODO: dispatch do fetch Profile Data
    setIsValid(true);
  }, [uid, navigate, dispatch]);

  return isValid;
};

export default useValidateAccess;
