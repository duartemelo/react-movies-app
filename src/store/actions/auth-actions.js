import { authActions } from "../slices/auth-slice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase_conf";
import { setUid } from "../../services/auth";

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(authActions.setIsLoading(true));
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUid(userCredential.user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch(authActions.setError({ errorCode, errorMessage }));
      })
      .finally(() => {
        dispatch(authActions.setIsLoading(false));
      });
  };
};

export const fetchProfileData = () => {};

export const setProfileData = () => {};
