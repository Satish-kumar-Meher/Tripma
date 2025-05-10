// import { MdOutlineFlightTakeoff, MdOutlineFlightLand } from "react-icons/md";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// export default function FlightDetails() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-gray-800 p-6 font-sans">
//       {/* Header */}
//       <div className="mb-6 flex items-center justify-between">
//         <div>
//           <h2 className="text-2xl font-semibold text-blue-800">Los Angeles → New York</h2>
//           <p className="text-sm text-blue-600">Boeing 787 Dreamliner • 290 Passengers</p>
//         </div>
//         <div className="flex items-center space-x-3">
//           <input
//             type="text"
//             placeholder="Search flight"
//             className="px-3 py-2 border border-blue-300 rounded-md focus:outline-blue-400"
//           />
//           <select className="border border-blue-300 px-3 py-2 rounded-md bg-white">
//             <option>Economy</option>
//             <option>Business</option>
//           </select>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Search</button>
//         </div>
//       </div>

//       {/* Flight Overview */}
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center space-x-3">
//             <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">SkyHigh Airlines</div>
//             <span className="text-blue-500 text-sm">SH-276789</span>
//             <span className="text-green-600 text-sm font-semibold">On Time</span>
//           </div>
//           <div className="text-right">
//             <p className="text-sm text-blue-500">Date</p>
//             <p className="text-lg font-semibold text-blue-800">July 1, 2028</p>
//           </div>
//           <div className="text-right">
//             <p className="text-sm text-blue-500">Passenger</p>
//             <p className="text-lg font-semibold text-blue-800">207</p>
//           </div>
//           <div className="text-right">
//             <p className="text-sm text-blue-500">Price</p>
//             <p className="text-lg font-semibold text-blue-800">$350 /pax</p>
//           </div>
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Edit</button>
//         </div>

//         <div className="border-l-4 border-blue-300 pl-6 relative">
//           <div className="mb-10">
//             <p className="text-sm text-blue-600">6:00 AM • 15 Jul 2028</p>
//             <p className="text-lg font-semibold text-blue-800">Los Angeles</p>
//             <p className="text-sm text-blue-500">Los Angeles International Airport (LAX)</p>
//             <p className="text-sm text-blue-500">Terminal 8</p>
//           </div>

//           <div className="absolute left-0 top-[110px] h-[120px] w-0.5 bg-blue-300"></div>

//           <div className="mb-10 bg-blue-50 border border-blue-200 rounded-lg p-4">
//             <div className="mb-2">
//               <h3 className="font-semibold text-blue-700">SkyHigh Airlines</h3>
//               <p className="text-sm text-blue-500">SH-276789</p>
//             </div>
//             <div className="grid grid-cols-3 gap-4 text-sm text-blue-600">
//               <div>
//                 <p className="font-medium">Model</p>
//                 <p>Boeing 787 Dreamliner</p>
//               </div>
//               <div>
//                 <p className="font-medium">Class</p>
//                 <p>Economy</p>
//               </div>
//               <div>
//                 <p className="font-medium">Seat Layout</p>
//                 <p>3-3-3 Configuration</p>
//               </div>
//             </div>
//             <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-blue-700">
//               <div>
//                 <p className="font-medium mb-1">What's Included</p>
//                 <ul className="space-y-1">
//                   <li>🎒 Baggage 23 kg</li>
//                   <li>👜 Cabin baggage 7 kg <span className="text-xs text-blue-500">(Extra available - See Prices)</span></li>
//                   <li>🍽️ Free meal</li>
//                 </ul>
//               </div>
//               <div>
//                 <p className="font-medium mb-1">Policies</p>
//                 <ul className="space-y-1">
//                   <li><FaCheckCircle className="inline text-green-500 mr-1" /> Reschedule (24h free)</li>
//                   <li><FaTimesCircle className="inline text-red-400 mr-1" /> Refund (10% fee if canceled 48h before)</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div>
//             <p className="text-sm text-blue-600">9:00 PM • 15 Jul 2028</p>
//             <p className="text-lg font-semibold text-blue-800">New York</p>
//             <p className="text-sm text-blue-500">John F. Kennedy International Airport (JFK)</p>
//             <p className="text-sm text-blue-500">Terminal 4</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









// import { FaArrowLeft } from "react-icons/fa";
// // import { MdOutlineFlight } from "react-icons/md";
// import { BsFillPersonFill } from "react-icons/bs";
// import { FaUserFriends } from "react-icons/fa";
// import { FaSuitcaseRolling } from "react-icons/fa";
// import { PiBowlFoodFill } from "react-icons/pi";
// import { MdOutlineEventAvailable } from "react-icons/md";
// // import { MdOutlineRefund } from "react-icons/md";

// export default function FlightDetail() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 font-sans p-6">
//       {/* Header */}
//       <div className="flex items-center text-sm text-gray-500 mb-4">
//         <FaArrowLeft className="mr-2 text-gray-700" />
//         <span>Back to Flight Schedule</span>
//       </div>

//       {/* Title */}
//       <div className="mb-6 flex justify-between items-center">
//         <div>
//           <h1 className="text-xl font-semibold text-gray-800">Los Angeles ➝ New York</h1>
//           <p className="text-sm text-gray-500">Boeing 787 Dreamliner · 230 Passengers</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <input
//             type="text"
//             placeholder="Search flight"
//             className="border border-gray-300 rounded px-3 py-1 text-sm"
//           />
//           <select className="border border-gray-300 rounded px-2 py-1 text-sm">
//             <option>Economy</option>
//             <option>Business</option>
//           </select>
//           <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded text-sm font-medium">Search</button>
//         </div>
//       </div>

//       {/* Flight Info Card */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="flex justify-between items-center border-b pb-4 mb-4">
//           <div>
//             <h2 className="text-lg font-semibold text-blue-700">SkyHigh Airlines</h2>
//             <p className="text-sm text-gray-500">SH-276789 · <span className="text-green-500 font-medium">On Time</span></p>
//           </div>
//           <div className="text-right text-sm text-gray-500">
//             <p><span className="font-medium text-gray-700">Date:</span> July 1, 2028</p>
//             <p><span className="font-medium text-gray-700">Passenger:</span> <span className="inline-flex items-center gap-1"><BsFillPersonFill /> +207</span></p>
//             <p className="text-yellow-600 font-semibold text-lg">$350 <span className="text-sm text-gray-500">/pax</span></p>
//             <button className="mt-1 text-sm border px-3 py-1 rounded hover:bg-blue-50">Edit</button>
//           </div>
//         </div>

//         {/* Timeline */}
//         <div className="grid grid-cols-12 gap-4">
//           {/* Left Time Info */}
//           <div className="col-span-3 text-right">
//             <p className="text-lg font-semibold text-gray-800">6:00 AM</p>
//             <p className="text-sm text-gray-500">15 Jul 2028</p>
//           </div>

//           {/* Line + Flight Card */}
//           <div className="col-span-1 flex justify-center relative">
//             <div className="h-full w-px bg-yellow-400"></div>
//             <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//             </div>
//             <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-1/2">
//               <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//             </div>
//           </div>

//           {/* Middle Info */}
//           <div className="col-span-8">
//             <p className="font-medium text-gray-800">Los Angeles</p>
//             <p className="text-sm text-gray-500 mb-2">Los Angeles International Airport (LAX) · Terminal 8</p>

//             <div className="border rounded p-4 bg-blue-50">
//               <div className="flex justify-between items-center mb-2">
//                 <div className="text-blue-700 font-semibold">SkyHigh Airlines</div>
//                 <div className="text-sm text-gray-600">SH-276789</div>
//               </div>
//               <div className="grid grid-cols-3 gap-4 text-sm text-gray-700 mb-3">
//                 <p><span className="font-medium">Model:</span> Boeing 787 Dreamliner</p>
//                 <p><span className="font-medium">Class:</span> Economy</p>
//                 <p><span className="font-medium">Seat Layout:</span> 3-3-3 configuration</p>
//               </div>
//               <div className="grid grid-cols-2 gap-4 border-t pt-3 text-sm text-gray-700">
//                 <p className="flex items-center gap-2"><FaSuitcaseRolling className="text-blue-600" /> Baggage 23 kg</p>
//                 <p className="flex items-center gap-2"><PiBowlFoodFill className="text-blue-600" /> Free meal</p>
//                 <p className="ml-6 text-xs text-gray-500">Cabin baggage 7 kg · <span className="text-blue-600 cursor-pointer">See Prices</span></p>
//                 <div></div>
//                 <p className="flex items-center gap-2"><MdOutlineEventAvailable className="text-blue-600" /> Reschedule <span className="text-xs text-gray-500">Free rescheduling within 24 hrs of booking</span></p>
//                 <p className="flex items-center gap-2"> Refund <span className="text-xs text-gray-500">Refunds available within 10% cancellation fee if cancelled 48 hrs before departure</span></p>
//               </div>
//             </div>

//             <p className="font-medium mt-6 text-gray-800">New York</p>
//             <p className="text-sm text-gray-500">John F. Kennedy International Airport (JFK) · Terminal 4</p>
//           </div>

//           {/* Arrival Time */}
//           <div className="col-span-3 text-left">
//             <p className="text-lg font-semibold text-gray-800">9:00 PM</p>
//             <p className="text-sm text-gray-500">15 Jul 2028</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// import React from "react";

// export default function FlightDetails() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8 font-sans text-gray-800">
//       {/* Header */}
//       <div className="mb-6 flex items-center justify-between">
//         <div>
//           <div className="text-sm text-gray-600">Back to Flight Schedule</div>
//           <h1 className="text-2xl font-semibold text-blue-800">Los Angeles ➝ New York</h1>
//           <div className="text-sm text-gray-500">Boeing 787 Dreamliner · 230 Passengers</div>
//         </div>
//         <div className="flex items-center gap-4">
//           <input
//             type="text"
//             placeholder="Search flight"
//             className="border border-blue-200 px-4 py-2 rounded shadow-sm focus:outline-none"
//           />
//           <select className="border border-blue-200 px-3 py-2 rounded shadow-sm">
//             <option>Economy</option>
//             <option>Business</option>
//           </select>
//           <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 text-white rounded shadow">Search</button>
//         </div>
//       </div>

//       {/* Card */}
//       <div className="bg-white rounded-xl shadow-lg p-6">
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <h2 className="text-lg font-semibold text-blue-800">SkyHigh Airlines</h2>
//             <div className="text-sm text-gray-500">SH-276789 · On Time</div>
//           </div>
//           <div className="text-sm text-gray-600">Date: <span className="font-semibold">July 1, 2028</span></div>
//           <div className="flex items-center gap-2 text-sm text-gray-600">
//             <span>Passenger</span>
//             <div className="flex -space-x-2">
//               <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=1" alt="" />
//               <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=2" alt="" />
//               <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center border border-white">+207</span>
//             </div>
//           </div>
//           <div className="text-lg font-bold text-green-600">$350</div>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded">Edit</button>
//         </div>

//         {/* Timeline */}
//         <div className="bg-blue-50 p-6 rounded-lg">
//           <div className="flex items-center justify-between relative px-2">
//             {/* Departure */}
//             <div className="text-left">
//               <div className="text-xl font-bold text-blue-800">6:00 AM</div>
//               <div className="text-sm text-gray-600">15 Jul 2028</div>
//               <div className="text-sm text-gray-500 mt-1">Los Angeles International Airport (LAX)</div>
//               <div className="text-xs text-gray-400">Terminal 8</div>
//             </div>

//             {/* Dotted vertical line with airplane */}
//             <div className="relative flex-1 flex justify-center items-center">
//               <div className="h-24 border-l-2 border-dotted border-blue-300 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6 text-blue-500 z-10 bg-white p-1 rounded-full border border-blue-300"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 style={{ transform: "rotate(90deg)" }}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M10.5 6.5L13 9l-2.5 2.5M13 9H3"
//                 />
//               </svg>
//             </div>

//             {/* Arrival */}
//             <div className="text-right">
//               <div className="text-xl font-bold text-blue-800">9:00 PM</div>
//               <div className="text-sm text-gray-600">15 Jul 2028</div>
//               <div className="text-sm text-gray-500 mt-1">John F. Kennedy International Airport (JFK)</div>
//               <div className="text-xs text-gray-400">Terminal 4</div>
//             </div>
//           </div>

//           {/* Middle card */}
//           <div className="mt-6 mx-auto bg-white border border-blue-100 rounded-lg p-4 shadow-sm">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h3 className="text-blue-800 font-semibold">SkyHigh Airlines</h3>
//                 <div className="text-xs text-gray-500">SH-276789</div>
//               </div>
//               <div className="text-sm text-gray-600">
//                 <div>Model: <span className="font-medium">Boeing 787 Dreamliner</span></div>
//                 <div>Class: <span className="font-medium">Economy</span></div>
//                 <div>Seat Layout: <span className="font-medium">3-3-3 configuration</span></div>
//               </div>
//             </div>

//             <div className="mt-4 text-sm text-gray-700">
//               <h4 className="font-semibold text-blue-700 mb-2">What's Included</h4>
//               <ul className="space-y-1">
//                 <li>🧳 Baggage 23 kg</li>
//                 <li>🎒 Cabin baggage 7 kg <span className="text-blue-500 cursor-pointer">See Prices</span></li>
//                 <li>🍽 Free meal</li>
//               </ul>
//             </div>

//             <div className="mt-4 text-sm text-gray-700">
//               <h4 className="font-semibold text-blue-700 mb-2">Policy</h4>
//               <ul className="space-y-1">
//                 <li>🔄 Free rescheduling within 24 hours of booking</li>
//                 <li>💸 Refunds available with a 10% cancellation fee if cancelled 48h before departure</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







import { FaPlane, FaSuitcase, FaShoppingBag, FaUtensils, FaSyncAlt, FaMoneyBillAlt, FaArrowLeft } from 'react-icons/fa';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';

export default function FlightDetailsPage() {
    const {id} = useParams()
    const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-blue-50 p-6 font-sans text-blue-900">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          {/* <p className="text-sm text-blue-800">Back to Flight Schedule</p> */
          <button
          onClick={() => window.history.back()}
          className="flex items-center text-sm text-blue-800 hover:text-blue-600 mb-1"
        >
          <FaArrowLeft className="mr-1" /> Back to Flight Schedule
        </button>}
          <h1 className="text-2xl font-bold mt-1">
            Los Angeles <span className="text-blue-600">→</span> New York
          </h1>
          <p className="text-sm text-blue-700">Boeing 787 Dreamliner · 230 Passengers</p>
        </div>

        <div className="flex items-center mt-4 md:mt-0 gap-2">
          <input
            type="text"
            placeholder="Search flight"
            className="px-3 py-2 rounded border border-blue-200 bg-white shadow-sm w-64"
          />
          <select className="px-3 py-2 border border-blue-200 rounded bg-white shadow-sm">
            <option>Economy</option>
            <option>Business</option>
          </select>
          <button className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded shadow hover:bg-yellow-500">
            Search
          </button>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h2 className="text-xl font-bold text-blue-800">SkyHigh Airlines</h2>
          <div className="text-gray-600">Date: <span className="font-semibold text-blue-900">July 1, 2028</span></div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Passenger</span>
            <HiUser className="text-xl rounded-full bg-white border border-gray-300" />
            <HiUser className="text-xl rounded-full bg-white border border-gray-300" />
            <span className="text-blue-600 text-sm font-semibold">+207</span>
          </div>
          <div className="text-green-600 font-bold text-lg">$350</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"  onClick={() => navigate(`/passengerdetail/${id}`)}>Book Now</button>
        </div>

        {/* Time and Dotted Line */}
        <div className="flex items-center justify-between gap-4 px-4 py-6 bg-blue-50 rounded-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900">6:00 AM</h2>
            <p className="text-sm text-gray-600">15 Jul 2028</p>
            <p className="text-gray-700">Los Angeles International Airport (LAX)</p>
            <p className="text-xs text-gray-400">Terminal 8</p>
          </div>

          {/* <div className="flex-1 flex items-center mx-4 relative">
            <div className="w-full border-t border-dotted border-blue-400"></div>
            <FaPlane className="absolute left-1/2 -translate-x-1/2 text-blue-600 bg-white p-1 rounded-full text-5xl" />
            <div className="mt-3 text-sm text-center text-blue-800 space-y-1">
      <p><strong>Duration:</strong> 13 hours</p>
      <p><strong>Transit:</strong> Non-stop</p>
    </div>
          </div> */}
           <div className="flex-col flex items-center mx-4 relative w-5xl">
    <div className="w-full border-t border-dotted border-blue-400 relative ">
      <FaPlane className="absolute left-1/2 -top-3 -translate-x-1/2 text-blue-600 bg-white p-1  rounded-full text-2xl" />
    </div>
    <div className="mt-3 text-sm text-center text-blue-800 space-y-1">
      <p><strong>Duration:</strong> 13 hours</p>
      <p><strong>Transit:</strong> Non-stop</p>
    </div>
  </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900">9:00 PM</h2>
            <p className="text-sm text-gray-600">15 Jul 2028</p>
            <p className="text-gray-700">John F. Kennedy International Airport (JFK)</p>
            <p className="text-xs text-gray-400">Terminal 4</p>
          </div>
        </div>

        {/* Flight Info Box */}
        <div className="mt-4 bg-white border border-blue-100 p-6 rounded-lg shadow-sm flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="font-bold text-blue-800 mb-1">SkyHigh Airlines</h3>
            <p className="text-sm text-gray-500">SH-276789</p>

            <div className="mt-4">
              <h4 className="font-semibold text-blue-800">What's Included</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-center gap-2 text-blue-800">
                  <FaSuitcase /> Baggage 23 kg
                </li>
                <li className="flex items-center gap-2 text-pink-600">
                  <FaShoppingBag /> Cabin baggage 7 kg <span className="text-blue-500 underline cursor-pointer ml-1">See Prices</span>
                </li>
                <li className="flex items-center gap-2 text-purple-600">
                  <FaUtensils /> Free meal
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-blue-800">Policy</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-center gap-2 text-blue-700">
                  <FaSyncAlt /> Free rescheduling within 24 hours of booking
                </li>
                <li className="flex items-center gap-2 text-green-700">
                  <FaMoneyBillAlt /> Refunds available with a 10% cancellation fee if cancelled 48h before departure
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 md:mt-0 md:text-right text-sm text-gray-700">
            <p><strong>Model:</strong> Boeing 787 Dreamliner</p>
            <p><strong>Class:</strong> Economy</p>
            <p><strong>Seat Layout:</strong> 3-3-3 configuration</p>
          </div>
        </div>
      </div>
    </div>
  );
}