// import { useState } from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";

// export default function PassengerInformationForm() {
//   const [checkedBags, setCheckedBags] = useState(1);
//   const [bagWeight, setBagWeight] = useState(15);

//   return (
//     <div className="max-w-4xl mx-auto bg-white shadow-xl p-8 rounded-xl mt-10 font-sans">
//       <h2 className="text-2xl font-bold text-indigo-600 mb-2">Passenger information</h2>
//       <p className="text-gray-600 mb-6">
//         Enter the required information for each traveler and ensure it exactly matches the government-issued ID presented at the airport.
//       </p>

//       {/* Passenger 1 Info */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//         <input className="input" placeholder="First name*" />
//         <input className="input" placeholder="Middle" />
//         <input className="input" placeholder="Last name*" />
//         <input className="input" placeholder="Suffix" />
//         <input className="input" placeholder="Date of birth* (MM/DD/YY)" />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         <input className="input" placeholder="Email address*" />
//         <input className="input" placeholder="Phone number*" />
//         <input className="input" placeholder="Redress number" />
//         <input className="input" placeholder="Known traveller number*" />
//       </div>

//       {/* Emergency contact */}
//       <div className="border-t pt-4 mt-6">
//         <label className="flex items-center gap-2 mb-2">
//           <input type="checkbox" className="form-checkbox" />
//           <span className="text-gray-700">Same as Passenger 1</span>
//         </label>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input className="input" placeholder="First name*" />
//           <input className="input" placeholder="Last name*" />
//           <input className="input" placeholder="Email address*" />
//           <input className="input" placeholder="Phone number*" />
//         </div>
//       </div>

//       {/* Bag Info */}
//       <div className="border-t pt-6 mt-6 text-sm text-gray-700">
//         <p>
//           Each passenger is allowed one free carry-on bag and one personal item. First checked bag for each passenger is also free. Second bag check fees are waived for loyalty program members. See the{' '}
//           <a href="#" className="text-indigo-600 underline">full bag policy</a>.
//         </p>

//         <div className="mt-4 flex flex-wrap items-center justify-between gap-4 bg-blue-50 p-4 rounded shadow-sm">
//           <p className="font-medium text-blue-800">Passenger 1: First Last</p>

//           <div className="flex items-center gap-2">
//             <span className="text-gray-700 font-semibold">Checked bags</span>
//             <button onClick={() => setCheckedBags(Math.max(0, checkedBags - 1))} className="btn-circle">
//               <FaMinus />
//             </button>
//             <span className="w-8 text-center font-semibold text-blue-900">{checkedBags}</span>
//             <button onClick={() => setCheckedBags(checkedBags + 1)} className="btn-circle">
//               <FaPlus />
//             </button>
//           </div>

//           <div className="flex items-center gap-2">
//             <span className="text-gray-700 font-semibold">Bag weight (kg)</span>
//             <button onClick={() => setBagWeight(Math.max(0, bagWeight - 1))} className="btn-circle">
//               <FaMinus />
//             </button>
//             <span className="w-8 text-center font-semibold text-blue-900">{bagWeight}</span>
//             <button onClick={() => setBagWeight(bagWeight + 1)} className="btn-circle">
//               <FaPlus />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="mt-6 flex gap-4">
//         <button className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 shadow">Save and close</button>
//         <button className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 shadow">Select seats</button>
//       </div>
//     </div>
//   );
// }







import { useState } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PassengerInformationForm() {
  const [checkedBags, setCheckedBags] = useState(1);
  const [bagWeight, setBagWeight] = useState(15);
  const navigate = useNavigate()

  const inputStyle = "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500";

  const buyNow = async () => {
    // validation 
    // if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
    //   return toast.error("All fields are required", {
    //     position: "top-center",
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   })
    // }
    // const addressInfo = {
    //   name,
    //   address,
    //   pincode,
    //   phoneNumber,
    //   date: new Date().toLocaleString(
    //     "en-US",
    //     {
    //       month: "short",
    //       day: "2-digit",
    //       year: "numeric",
    //     }
    //   )
    // }
    // console.log(addressInfo)

    var options = {
      key: "rzp_test_Pv9vDGjosHaXTy",
      key_secret: "fcSMkBchYlPtKbz8arwC7EZq",
      amount: parseInt(3500 * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_',
      name: "Tripma",
      description: "for testing purpose",
      handler: function (response) {
        // console.log(response)
        toast.success('Payment Successful')
        // const paymentId = response.razorpay_payment_id
        // store in firebase 
        // const orderInfo = {
        //   cartItems,
        //   addressInfo,
        //   time: Timestamp.now(),
        //   date: new Date().toLocaleString(
        //     "en-US",
        //     {
        //       month: "short",
        //       day: "2-digit",
        //       year: "numeric",
        //     }
        //   ),
        //   email: user.email,
        //   userid:user.uid,
        //   paymentId
        // }

        try {

        //   const orderRef = collection(fireDB, 'order');
        //   addDoc(orderRef, orderInfo);

          // const result = addDoc(collection(fireDB, "order"), orderInfo)
          toast.success("order placed successfully")
          navigate("/")
        } catch (error) {
          console.log(error)
        }
      },

      theme: {
        color: "#3399cc"
      }


    };
    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay)
  }



  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl p-8 rounded-xl mt-10 font-sans">
      <h2 className="text-2xl font-bold text-indigo-600 mb-2">Passenger information</h2>
      <p className="text-gray-600 mb-6">
        Enter the required information for each traveler and ensure it exactly matches the government-issued ID presented at the airport.
      </p>

      {/* Passenger 1 Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input className={inputStyle} placeholder="First name*" />
        <input className={inputStyle} placeholder="Middle" />
        <input className={inputStyle} placeholder="Last name*" />
        <input className={inputStyle} placeholder="Suffix" />
        <input className={inputStyle} placeholder="Date of birth* (MM/DD/YY)" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input className={inputStyle} placeholder="Email address*" />
        <input className={inputStyle} placeholder="Phone number*" />
        <input className={inputStyle} placeholder="Redress number" />
        <input className={inputStyle} placeholder="Known traveller number*" />
      </div>

      {/* Emergency contact */}
      <div className="border-t pt-6 mt-6">
        <label className="flex items-center gap-2 mb-4">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
          <span className="text-gray-700">Same as Passenger 1</span>
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className={inputStyle} placeholder="First name*" />
          <input className={inputStyle} placeholder="Last name*" />
          <input className={inputStyle} placeholder="Email address*" />
          <input className={inputStyle} placeholder="Phone number*" />
        </div>
      </div>

      {/* Bag Info */}
      <div className="border-t pt-6 mt-6 text-sm text-gray-700">
        <p>
          Each passenger is allowed one free carry-on bag and one personal item. First checked bag for each passenger is also free. Second bag check fees are waived for loyalty program members. See the{" "}
          <a href="#" className="text-indigo-600 underline">full bag policy</a>.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 bg-blue-50 p-4 rounded-lg shadow-inner">
          <p className="font-medium text-blue-800">Passenger 1: First Last</p>

          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-semibold">Checked bags</span>
            <button onClick={() => setCheckedBags(Math.max(0, checkedBags - 1))} className="btn-circle bg-white border p-2 rounded-full hover:bg-gray-100">
              <FaMinus />
            </button>
            <span className="w-8 text-center font-semibold text-blue-900">{checkedBags}</span>
            <button onClick={() => setCheckedBags(checkedBags + 1)} className="btn-circle bg-white border p-2 rounded-full hover:bg-gray-100">
              <FaPlus />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-semibold">Bag weight (kg)</span>
            <button onClick={() => setBagWeight(Math.max(0, bagWeight - 1))} className="btn-circle bg-white border p-2 rounded-full hover:bg-gray-100">
              <FaMinus />
            </button>
            <span className="w-8 text-center font-semibold text-blue-900">{bagWeight}</span>
            <button onClick={() => setBagWeight(bagWeight + 1)} className="btn-circle bg-white border p-2 rounded-full hover:bg-gray-100">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        {/* <button className="px-4 py-2 rounded bg-gray-100 text-gray-800 hover:bg-gray-200 shadow">Save and close</button> */}
        <button className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 shadow" onClick={buyNow}>Proceed Next</button>
      </div>
    </div>
  );
}




// import { useState } from "react";
// import toast from "react-hot-toast";
// import { FaMinus, FaPlus } from "react-icons/fa";

// export default function PassengerInformationForm() {
//   const [checkedBags, setCheckedBags] = useState(1);
//   const [bagWeight, setBagWeight] = useState(15);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     suffix: "",
//     dob: "",
//     email: "",
//     phone: "",
//     redress: "",
//     knownTraveller: "",
//     emergencyFirstName: "",
//     emergencyLastName: "",
//     emergencyEmail: "",
//     emergencyPhone: ""
//   });

//   const inputStyle = "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500";

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const buyNow = async () => {
//     // Validation
//     const requiredFields = [
//       "firstName", "lastName", "dob", "email", "phone", "knownTraveller",
//       "emergencyFirstName", "emergencyLastName", "emergencyEmail", "emergencyPhone"
//     ];

//     const emptyField = requiredFields.find((key) => !formData[key]?.trim());
//     if (emptyField) {
//       return toast.error("Please fill in all required fields.", {
//         position: "top-center"
//       });
//     }

//     const options = {
//       key: "rzp_test_Pv9vDGjosHaXTy",
//       amount: parseInt(35 * 100),
//       currency: "INR",
//       name: "Tripma",
//       description: "for testing purpose",
//       handler: function (response) {
//         toast.success('Payment Successful');
//         try {
//           toast.success("Order placed successfully");
//         } catch (error) {
//           console.log(error);
//         }
//       },
//       theme: {
//         color: "#3399cc"
//       }
//     };

//     // if (window.Razorpay) {
//     //   const pay = new window.Razorpay(options);
//     //   pay.open();
//     // } else {
//     //   toast.error("Razorpay SDK not loaded.");
//     // }
//     var pay = new window.Razorpay(options);
//     pay.open();
//     console.log(pay)
//   };

//   return (
//     <div className="max-w-4xl mx-auto bg-white shadow-xl p-8 rounded-xl mt-10 font-sans">
//       <h2 className="text-2xl font-bold text-indigo-600 mb-2">Passenger information</h2>
//       <p className="text-gray-600 mb-6">
//         Enter the required information for each traveler and ensure it exactly matches the government-issued ID presented at the airport.
//       </p>

//       {/* Passenger Info */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         <input className={inputStyle} name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name*" />
//         <input className={inputStyle} name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Middle" />
//         <input className={inputStyle} name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name*" />
//         <input className={inputStyle} name="suffix" value={formData.suffix} onChange={handleChange} placeholder="Suffix" />
//         <input className={inputStyle} name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of birth* (MM/DD/YY)" />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <input className={inputStyle} name="email" value={formData.email} onChange={handleChange} placeholder="Email address*" />
//         <input className={inputStyle} name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number*" />
//         <input className={inputStyle} name="redress" value={formData.redress} onChange={handleChange} placeholder="Redress number" />
//         <input className={inputStyle} name="knownTraveller" value={formData.knownTraveller} onChange={handleChange} placeholder="Known traveller number*" />
//       </div>

//       {/* Emergency contact */}
//       <div className="border-t pt-6 mt-6">
//         <label className="flex items-center gap-2 mb-4">
//           <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
//           <span className="text-gray-700">Same as Passenger 1</span>
//         </label>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input className={inputStyle} name="emergencyFirstName" value={formData.emergencyFirstName} onChange={handleChange} placeholder="First name*" />
//           <input className={inputStyle} name="emergencyLastName" value={formData.emergencyLastName} onChange={handleChange} placeholder="Last name*" />
//           <input className={inputStyle} name="emergencyEmail" value={formData.emergencyEmail} onChange={handleChange} placeholder="Email address*" />
//           <input className={inputStyle} name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} placeholder="Phone number*" />
//         </div>
//       </div>

//       {/* Bag Info */}
//       <div className="border-t pt-6 mt-6 text-sm text-gray-700">
//         <p>
//           Each passenger is allowed one free carry-on bag and one personal item...
//         </p>
//         <div className="mt-4 flex flex-wrap items-center justify-between gap-4 bg-blue-50 p-4 rounded-lg shadow-inner">
//           <p className="font-medium text-blue-800">Passenger 1: {formData.firstName} {formData.lastName}</p>

//           <div className="flex items-center gap-2">
//             <span className="text-gray-700 font-semibold">Checked bags</span>
//             <button onClick={() => setCheckedBags(Math.max(0, checkedBags - 1))} className="btn-circle bg-white border p-2 rounded-full hover:bg-gray-100">
//               <FaMinus />
//             </button>
//             <span className="w-8 text-center font-semibold text-blue-900">{checkedBags}</span>
//             <button onClick={() => setCheckedBags(checkedBags + 1)} className="btn-circle bg-white border p-2 rounded-full hover:bg-gray-100">
//               <FaPlus />
//             </button>
//           </div>

//           <div className="flex items-center gap-2">
//             <span className="text-gray-700 font-semibold">Bag weight (kg)</span>
//             <button onClick={() => setBagWeight(Math.max(0, bagWeight - 1))} className="btn-circle bg-white border p-2 rounded-full hover:bg-gray-100">
//               <FaMinus />
//             </button>
//             <span className="w-8 text-center font-semibold text-blue-900">{bagWeight}</span>
//             <button onClick={() => setBagWeight(bagWeight + 1)} className="btn-circle bg-white border p-2 rounded-full hover:bg-gray-100">
//               <FaPlus />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="mt-8 flex gap-4">
//         <button className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 shadow" onClick={buyNow}>Proceed Next</button>
//       </div>
//     </div>
//   );
// }
