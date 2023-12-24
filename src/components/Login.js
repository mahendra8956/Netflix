import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { HOME_BACKGROUND, USER_AVATAR } from "../utils/constants";


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMsg, setErrMsg] = useState(null);
    const dispatch = useDispatch();


    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const toggleForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const haandleButtonClick = (e) =>{
        e.preventDefault();
        const msg = checkValidData(email.current.value,password.current.value);
        setErrMsg(msg);
        if(msg !== null) return;

        if(isSignInForm){
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorCode +"-"+errorMessage);
                });
        }else{
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value,
                    photoURL: USER_AVATAR
                }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
                }).catch((error) => {
                    // An error occurred
                    setErrMsg(error.message)
                });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMsg(errorCode +"-"+errorMessage);
            
            });
        }
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img className="w-auto h-auto" src={HOME_BACKGROUND} alt="logo"/>
            </div>
            <form className="w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-800 rounded-lg"/>}
                <input ref={email} type="text" placeholder="Email address" className="p-2 my-4 w-full bg-gray-800 rounded-lg"/>
                <input ref={password} type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-800 rounded-lg"/>
                <p className="text-red-600 font-bold">{errMsg}</p>
                <button className="p-4 my-6 w-full bg-red-700 rounded-lg" onClick={haandleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registerd? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login