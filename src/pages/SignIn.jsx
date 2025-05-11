import React from 'react';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../firebase/Firebase";
// import Loader from "../../components/loader/Loader";
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { Loader } from 'lucide-react';

const SignIn = () => {


   // navigate 
   const navigate = useNavigate();

   // User Signup State 
   const [userLogin, setUserLogin] = useState({
       email: "",
       password: ""
   });
   const [loading,setLoading] = useState(false)
   

   /**========================================================================
   *========================================================================**/

   const userLoginFunction = async () => {
       // validation 
       if (userLogin.email === "" || userLogin.password === "") {
           toast.error("All Fields are required")
       }

       setLoading(true);
       try {
           const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
           console.log(users.user)

           try {
               const q = query(
                   collection(fireDB, "user"),
                   where('uid', '==', users?.user?.uid)
               );
               const data = onSnapshot(q, (QuerySnapshot) => {
                   let user;
                   QuerySnapshot.forEach((doc) => user = doc.data());
                   localStorage.setItem("users", JSON.stringify(user) )
                   console.log("user ->>", user)
                   setUserLogin({
                       email: "",
                       password: ""
                   })
                   toast.success("Login Successfully");
                   setLoading(false);
                  //  if(user.role === "user") {
                  //      navigate('/');
                  //  }else{
                  //      navigate('/admin-dashboard');
                  //  }
                  navigate('/');
               });
               return () => data;
           } catch (error) {
               console.log(error);
               setLoading(false);
           }
       } catch (error) {
           console.log(error);
           setLoading(false);
           toast.error("Login Failed");
       }
   }







  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-6 p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-center text-3xl font-bold text-blue-600">Sign in to Tripma</h2>
        
        <div className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
               type="email"
               placeholder='Email Address'
               value={userLogin.email}
               onChange={(e) => {
                   setUserLogin({
                       ...userLogin,
                       email: e.target.value
                   })
               }}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
             type="password"
             placeholder='Password'
             value={userLogin.password}
             onChange={(e) => {
                 setUserLogin({
                     ...userLogin,
                     password: e.target.value
                 })
             }}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>

          {loading ? (
            <button
            // type="button"
            // onClick={userSignupFunction}
            className=" flex justify-center align-middle w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Loader className="loader flex justify-center align-middle animate-spin sm:mr-2 mr-1" />
            Please wait
          </button>
          ):(
            <button
            // type="button"
            onClick={userLoginFunction}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
          )}
        </div>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account? <p onClick={() => navigate("/signup")} className="text-blue-500 hover:underline">Sign up</p>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
