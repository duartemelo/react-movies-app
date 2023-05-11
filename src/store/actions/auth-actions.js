import { authActions } from "../slices/auth-slice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase_conf";
import { setUid } from "../../services/auth";
import { getProfileName, setProfileName } from "../../firebase/auth";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(authActions.setIsLoading(true));

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUid(userCredential.user.uid);

      dispatch(authActions.setIsLoading(false));
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch(authActions.setError({ errorCode, errorMessage }));
      dispatch(authActions.setIsLoading(false));
    }
  };
};

export const register = (name, email, password) => {
  return async (dispatch) => {
    try {
      dispatch(authActions.setIsLoading(true));

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const uid = user.uid;

      // TODO: set image

      await setProfileName(name);

      await signInWithEmailAndPassword(auth, email, password);

      setUid(uid);

      dispatch(authActions.setIsLoading(false));
    } catch (error) {
      console.error(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch(authActions.setError({ errorCode, errorMessage }));
      dispatch(authActions.setIsLoading(false));
    }
  };
};

export const setProfileNameAction = (name) => {
  return async (dispatch) => {
    try {
      dispatch(authActions.setIsLoading(true));

      await setProfileName(name);

      dispatch(authActions.setAuthInfo({ name: name }));
      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      dispatch(authActions.setIsLoading(false));
    }
  };
};

export const setProfileImage = (image) => {};

export const fetchProfileData = () => {
  return async (dispatch) => {
    dispatch(authActions.setIsLoading(true));
    const profileName = await getProfileName();
    dispatch(authActions.setAuthInfo({ name: profileName }));
    dispatch(authActions.setIsLoading(false));
  };
};
