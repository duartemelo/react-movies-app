import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getUid } from "../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/slices/auth-slice";
import { fetchProfileData } from "../store/actions/auth-actions";

const useValidateAccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const uid = getUid();

  const [isValid, setIsValid] = useState(!!uid);

  useEffect(() => {
    if (!loggedIn) { // if loggedIn === false on redux variable -> (used this to avoid checking localStorage if is was already checked)
      if (!uid) {
        setIsValid(false);
        return;
      }
      dispatch(authActions.login(uid));
      dispatch(fetchProfileData());
      setIsValid(true);
    }
  }, [loggedIn, uid, navigate, dispatch]);
  return isValid;
};

export default useValidateAccess;
