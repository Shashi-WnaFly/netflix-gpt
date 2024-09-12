import React, { useEffect } from "react";
import { LOGO } from "../utils/constants.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector( store => store.user )

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch(() => {
      navigate("/error");
      // An error happened.
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);

  return (
    <div className="w-full absolute z-10 flex align-middle bg-transparent">
      <div className="w-full mx-auto ml-40">
        <img src={LOGO} alt="logo" className="w-48" />
      </div>

      {user && (<div className="flex mr-16 items-center whitespace-nowrap">
        <img
          className="w-16 text-white"
          src={user?.photoURL}
          alt="profile"
        />
        <button
          onClick={handleSignOut}
          className="ml-2 border-[1px] p-1 border-red-400 cursor-pointer font-semibold text-sm"
        >
          (Sign Out)
        </button>
      </div>)}
    </div>
  );
};

export default Header;
