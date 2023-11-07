import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleLogin = (googleProvide) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvide);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedInUser = {
        email: userEmail,
      };
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedInUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
          })
          .catch((err) => console.log(err));
      } else {
        axios
          .post("http://localhost:5000/logout", loggedInUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => unsubscribe();
  }, [user?.email]);

  const authInfo = { user, createUser, signIn, logOut, googleLogin, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
