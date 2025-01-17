import React, { useEffect } from "react";
import { LOGO, SUPPORTED_LANG } from "../utils/constants.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { GPTSearchPage } from "../utils/GPTSearch.js";
import { changeLanguage } from "../utils/ConfigSlice.js";
import languageConstant from "../utils/languageConstant.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const userLang = useSelector((store) => store.config.lang);

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
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className=" text-base md:text-lg w-screen absolute z-10 left-0 top-0 flex md:justify-between md:flex-row flex-col md:bg-transparent bg-gradient-to-b from-black">
      <div className=" mx-auto md:ml-10">
        <img src={LOGO} alt="logo" className="w-48" />
      </div>

      {user && (
        <div className=" flex justify-between md:py-5 px-5 whitespace-nowrap md:w-max md:gap-3 md:mr-10">
          <select  onChange={handleLangChange} className="px-3 bg-gray-600 text-white border-black border-[1px] outline-none rounded-md">
            {SUPPORTED_LANG.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
          </select>
          <button
            className=" text-white bg-purple-800 px-4 rounded-md active:opacity-90"
            onClick={handleGPTSearchPage}
          >
            {languageConstant[userLang].GptSearch}
          </button>
          <img src={user?.photoURL} alt="profile" />
          <button
            onClick={handleSignOut}
            className=" px-4 rounded-md border-[1px] border-red-600 hover:text-red-600 hover:border-white cursor-pointer font-semibold text-white"
          >
            ({languageConstant[userLang].signOut})
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
