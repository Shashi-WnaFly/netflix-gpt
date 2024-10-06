import React, { useEffect } from "react";
import { LOGO } from "../utils/constants.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { GPTSearchPage } from "../utils/GPTSearch.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
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
        navigate("/");
      }
    });
  }, []);

  const handleGPTSearchPage = () => {
    dispatch(GPTSearchPage());
  }

  return (
    <div className="w-screen absolute z-10 flex justify-between bg-transparent bg-gradient-to-b from-black">
      <div className="ml-10">
        <img src={LOGO} alt="logo" className="w-48" />
      </div>

      {user && (
        <div className="flex py-5 px-5 whitespace-nowrap w-max gap-3 mr-10">
          <button className=" text-white bg-purple-800 px-4 rounded-md active:opacity-90" onClick={handleGPTSearchPage}>
            GPT Search
          </button>
            <img src={user?.photoURL} alt="profile" />
          <button
            onClick={handleSignOut}
            className="px-4 rounded-md border-[1px] border-red-600 hover:text-red-600 hover:border-white cursor-pointer font-semibold text-sm text-white"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
