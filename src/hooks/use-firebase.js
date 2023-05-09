import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase_conf";
import { setIsLoggedIn } from "../services/auth";

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const login = async (email, password, applyData) => {
    setIsLoading(true);
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoggedIn(userCredential.user.accessToken);
        applyData(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError({ errorCode, errorMessage });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    error,
    login,
  };
};

export default useFirebase;
