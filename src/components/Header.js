import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGpt } from "../utils/gptSlice";
import { changeLang } from "../utils/langSlice";


const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGpt = useSelector((store) => store.gpt.showGpt);
    const handleSignOut = ()=>{
        signOut(auth).then(() => {}).catch((error) => {
            navigate("/error")
        });
    }

    const handleGpt = () => {
        dispatch(toggleGpt())
    }

    const handleLangChange = (lang) =>{
        dispatch(changeLang(lang))
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
              navigate("/browse")
            } else {
              // User is signed out
              dispatch(removeUser())
              navigate("/")
            }
        });

        return ()=> {
            unsubscribe();
        }
    },[]);

    return (
        <div className="absolute flex justify-between w-screen px-8 py-2 z-10 bg-gradient-to-b from-black">
            <img
            className="w-44" 
            src={NETFLIX_LOGO} alt="logo"/>
            {user && <div className="flex p-2">
                <select className="p-2 m-2 bg-gray-900 text-white" onChange={(e)=>handleLangChange(e.target.value)}>
                    {SUPPORTED_LANGUAGE.map(e => <option value={e.indentifier} key={e.indentifier}>{e.name}</option>)}
                </select>
                <button className="py-2 px-4 mx-2 my-2 bg-red-600 text-white rounded-lg text-center" onClick={handleGpt}>{showGpt ? "Home Page":"GPT Search"}</button>
                <img className="ml-2 w-12 h-12" alt="usericon" src={user?.photoURL}/>
                <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
            </div>}
        </div>
    )
}

export default Header