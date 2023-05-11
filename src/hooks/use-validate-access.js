import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getUid } from "../services/auth";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slices/auth-slice";
import { fetchProfileData } from "../store/actions/auth-actions";

const useValidateAccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uid = getUid();

  const [isValid, setIsValid] = useState(!!uid);

  useEffect(() => {
    if (!uid) {
      setIsValid(false);
      return;
    }
    dispatch(authActions.login(uid));
    dispatch(fetchProfileData());
    setIsValid(true);
  }, [uid, navigate, dispatch]);

  return isValid;
};

export default useValidateAccess;
