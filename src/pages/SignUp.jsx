import React from 'react';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { auth, fireDB } from "../firebase/Firebase";
import { Loader } from 'lucide-react';

const SignUp = () => {





    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loading,setLoading] = useState(false)

    const userSignupFunction = async () => {
      // validation 
      if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
          toast.error("All Fields are required")
      }

      setLoading(true);
      try {
          const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

          // create user object
          const user = {
              name: userSignup.name,
              email: users.user.email,
              uid: users.user.uid,
              time: Timestamp.now(),
              date: new Date().toLocaleString(
                  "en-US",
                  {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                  }
              )
          }

          // create user Refrence
          const userRefrence = collection(fireDB, "user")

          // Add User Detail
          addDoc(userRefrence, user);

          setUserSignup({
              name: "",
              email: "",
              password: ""
          })

          toast.success("Signup Successfully");

          setLoading(false);
          navigate('/signin')
      } catch (error) {
        toast.error("user not create")
          console.log(error);
          setLoading(false);
      }

  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-6 p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-center text-3xl font-bold text-blue-600">Create your Tripma account</h2>
        
        <div className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={userSignup.name}
              onChange={(e) => {
                  setUserSignup({
                      ...userSignup,
                      name:e.target.value
                  })
              }}
              placeholder='Full Name'
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              value={userSignup.email}
              onChange={(e) => {
                  setUserSignup({
                      ...userSignup,
                      email:e.target.value
                  })
              }}
              placeholder='Email Address'
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={userSignup.password}
              onChange={(e) => {
                  setUserSignup({
                      ...userSignup,
                      password:e.target.value
                  })
              }}
              placeholder='Password'
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
            onClick={userSignupFunction}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
          )}
          
        </div>

        <p className="text-center text-sm text-gray-600">
          Already have an account? <p onClick={() => navigate("/signin")} className="text-blue-500 hover:underline">Sign in</p>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
