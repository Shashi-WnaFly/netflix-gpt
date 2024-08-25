import { Provider, useDispatch } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch(); // always use at the top
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
