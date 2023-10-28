import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    // listener to firebase auth
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      // if we have an authUser, store in local storage
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // if no authUser, clear local storage
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    // clean up listener
    return () => listener();
  }, []);

  return { user };
}
