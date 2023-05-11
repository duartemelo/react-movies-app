import { updateProfile } from "firebase/auth";
import { auth } from "./firebase_conf";

export const setProfileName = async (name) => {
  updateProfile(auth.currentUser, {
    displayName:
      name /*photoURL: "https://example.com/jane-q-user/profile.jpg"*/,
  }).catch((error) => {
    throw error;
  });
};

export const getProfileName = async () => {
  const user = auth.currentUser;
  if (user) {
    return Promise.resolve(user.displayName);
  } else {
    return new Promise((resolve) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user.displayName);
        } else {
          resolve(null);
        }
        unsubscribe();
      });
    });
  }
};
