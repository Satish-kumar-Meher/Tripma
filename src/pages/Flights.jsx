// import React from "react";
// import { FaSearch, FaUserCircle, FaBell, FaCog, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

// const flights = [
//   {
//     airline: "SkyHigh Airlines",
//     time: "6:00 AM",
//     toTime: "9:00 PM",
//     price: "$350",
//     baggage: "1 Baggage",
//     meal: "No Meal",
//     duration: "3h 0m",
//     type: "Direct",
//     code: "SH-276789",
//     logo: "🛫",
//   },
//   {
//     airline: "FlyFast Airways",
//     time: "8:00 AM",
//     toTime: "11:30 AM",
//     price: "$400",
//     baggage: "2 Baggage",
//     meal: "No Meal",
//     duration: "3h 30m",
//     type: "Direct",
//     code: "FF-276789",
//     logo: "✈️",
//   },
//   {
//     airline: "AeroJet",
//     time: "10:00 AM",
//     toTime: "12:45 PM",
//     price: "$450",
//     baggage: "2 Baggage",
//     meal: "In-flight Meal",
//     duration: "2h 45m",
//     type: "1 Transit",
//     code: "AJ-276789",
//     logo: "🛩️",
//   },
//   {
//     airline: "JetStream Aviation",
//     time: "10:30 AM",
//     toTime: "1:00 PM",
//     price: "$600",
//     baggage: "2 Baggage",
//     meal: "In-flight Meal",
//     duration: "2h 30m",
//     type: "Direct",
//     code: "JS-276789",
//     logo: "🚀",
//   },
//   {
//     airline: "Nimbus Airlines",
//     time: "11:00 AM",
//     toTime: "2:00 PM",
//     price: "$600",
//     baggage: "1 Baggage",
//     meal: "No Meal",
//     duration: "3h 0m",
//     type: "Direct",
//     code: "NB-276789",
//     logo: "🛫",
//   },
// ];

// const FlightSchedulePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <header className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold text-gray-800">Schedule</h1>
//         <div className="flex items-center space-x-4">
//           <FaBell className="text-xl text-gray-500" />
//           <FaCog className="text-xl text-gray-500" />
//           <div className="flex items-center space-x-2">
//             <FaUserCircle className="text-2xl text-gray-700" />
//             <span>Martin Septimus</span>
//           </div>
//         </div>
//       </header>

//       <div className="flex gap-4">
//         {/* Sidebar */}
//         <aside className="w-1/4 bg-white p-4 rounded-lg shadow">
//           <div className="mb-4">
//             <h2 className="font-semibold mb-2">Transit</h2>
//             <div className="space-y-1">
//               <label className="block"><input type="checkbox" /> Direct</label>
//               <label className="block"><input type="checkbox" /> 1 Transit</label>
//               <label className="block"><input type="checkbox" /> 2+ Transits</label>
//             </div>
//           </div>
//           <div className="mb-4">
//             <h2 className="font-semibold mb-2">Price Range</h2>
//             <input type="range" className="w-full" min="350" max="1000" />
//           </div>
//           <div className="mb-4">
//             <h2 className="font-semibold mb-2">Departure Times</h2>
//             <input type="range" className="w-full" min="5" max="18" />
//           </div>
//           <div>
//             <h2 className="font-semibold mb-2">Airline</h2>
//             <div className="space-y-1">
//               {['CloudNine', 'SkyHigh', 'FlyFast', 'AeroJet', 'JetStream', 'Nimbus', 'SuperJet'].map((name, i) => (
//                 <label className="block" key={i}><input type="checkbox" /> {name} Airlines</label>
//               ))}
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="w-3/4 space-y-4">
//           <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 placeholder="From"
//                 className="border rounded px-3 py-2"
//                 defaultValue="Los Angeles (Delhi)"
//               />
//               <input
//                 type="text"
//                 placeholder="To"
//                 className="border rounded px-3 py-2"
//                 defaultValue="New York (Bhubaneswar)"
//               />
//               <input
//                 type="date"
//                 className="border rounded px-3 py-2"
//                 defaultValue="2028-07-01"
//               />
//               <select className="border rounded px-3 py-2">
//                 <option>Economy</option>
//                 <option>Business</option>
//               </select>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
//                 <FaSearch className="mr-2" /> Search
//               </button>
//             </div>
//             <button className="bg-yellow-500 text-white px-4 py-2 rounded">+ Add Flight</button>
//           </div>

//           <div className="flex justify-between items-center">
//             <span className="text-gray-600">Flight List ({flights.length} results)</span>
//             <div className="flex gap-2 items-center">
//               <label>Sort by:</label>
//               <select className="border rounded px-3 py-1">
//                 <option>Cheapest</option>
//                 <option>Earliest</option>
//               </select>
//             </div>
//           </div>

//           {/* Flight Cards */}
//           <div className="space-y-4">
//             {flights.map((flight, index) => (
//               <div key={index} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
//                 <div className="flex gap-4 items-center">
//                   <div className="text-3xl">{flight.logo}</div>
//                   <div>
//                     <h3 className="text-lg font-semibold">{flight.airline}</h3>
//                     <span className="text-sm text-gray-500">{flight.code}</span>
//                     <p className="text-sm">Facilities: {flight.baggage} • {flight.meal}</p>
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-lg font-semibold">{flight.time}</p>
//                   <p className="text-gray-500 text-sm">{flight.duration} • {flight.type}</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-gray-500">To</p>
//                   <p className="text-lg font-semibold">{flight.toTime}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-xl font-bold text-yellow-600">{flight.price}/pax</p>
//                   <button className="mt-2 px-4 py-2 bg-gray-800 text-white rounded">View Detail</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default FlightSchedulePage;






// import React from "react";
// import { FaPlaneDeparture, FaPlaneArrival, FaSearch, FaUserCircle } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
// import { BsFillPersonFill } from "react-icons/bs";
// import { MdFlight } from "react-icons/md";

// const flights = [
//   {
//     id: 1,
//     airline: "SkyHigh Airlines",
//     logoColor: "bg-blue-500",
//     depTime: "6:00 AM",
//     arrTime: "9:00 PM",
//     from: "Los Angeles",
//     to: "New York",
//     duration: "3h 00m",
//     stops: "Direct",
//     price: "$350",
//     baggage: "1 Baggage",
//     meal: "No Meal"
//   },
//   {
//     id: 2,
//     airline: "FlyFast Airways",
//     logoColor: "bg-red-500",
//     depTime: "8:00 AM",
//     arrTime: "11:30 AM",
//     from: "Los Angeles",
//     to: "New York",
//     duration: "3h 00m",
//     stops: "Direct",
//     price: "$400",
//     baggage: "2 Baggage",
//     meal: "No Meal"
//   },
//   {
//     id: 3,
//     airline: "AeroJet",
//     logoColor: "bg-yellow-400",
//     depTime: "10:00 AM",
//     arrTime: "12:45 PM",
//     from: "Los Angeles",
//     to: "New York",
//     duration: "2h 45m",
//     stops: "1 Stop",
//     price: "$450",
//     baggage: "2 Baggage",
//     meal: "In-Flight Meal"
//   },
//   {
//     id: 4,
//     airline: "JetStream Aviation",
//     logoColor: "bg-gray-500",
//     depTime: "10:30 AM",
//     arrTime: "1:00 PM",
//     from: "Los Angeles",
//     to: "New York",
//     duration: "2h 30m",
//     stops: "2 Stops",
//     price: "$600",
//     baggage: "2 Baggage",
//     meal: "In-Flight Meal"
//   },
//   {
//     id: 5,
//     airline: "Nimbus Airlines",
//     logoColor: "bg-pink-500",
//     depTime: "11:00 AM",
//     arrTime: "2:00 PM",
//     from: "Los Angeles",
//     to: "New York",
//     duration: "3h 00m",
//     stops: "Direct",
//     price: "$600",
//     baggage: "1 Baggage",
//     meal: "In-Flight Meal"
//   }
// ];

// const FlightCard = ({ flight }) => (
//   <div className="flex items-center justify-between bg-white shadow rounded-lg p-4 mb-4">
//     <div className="flex items-center gap-4 w-[20%]">
//       <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${flight.logoColor}`}>{flight.airline[0]}</div>
//       <div>
//         <p className="font-semibold text-sm">{flight.airline}</p>
//         <p className="text-xs text-gray-500">SH-{flight.id * 217689}</p>
//       </div>
//     </div>
//     <div className="flex flex-col items-center w-[15%]">
//       <span className="font-bold">{flight.depTime}</span>
//       <span className="text-sm text-gray-600">{flight.from}</span>
//     </div>
//     <div className="w-[20%] relative flex items-center justify-center">
//       <div className="border-t border-dotted w-full absolute top-1/2 z-0" />
//       <MdFlight className="text-yellow-500 z-10 bg-white" size={24} />
//       <div className="absolute bottom-[-1.2rem] text-xs text-gray-500 text-center w-full">
//         {flight.duration} • {flight.stops}
//       </div>
//     </div>
//     <div className="flex flex-col items-center w-[15%]">
//       <span className="font-bold">{flight.arrTime}</span>
//       <span className="text-sm text-gray-600">{flight.to}</span>
//     </div>
//     <div className="flex flex-col text-xs text-gray-600 w-[15%]">
//       <span>{flight.baggage}</span>
//       <span>{flight.meal}</span>
//     </div>
//     <div className="text-right w-[15%]">
//       <p className="text-lg font-bold text-yellow-600">{flight.price}</p>
//       <button className="mt-2 px-4 py-1 border border-black rounded text-sm">View Detail</button>
//     </div>
//   </div>
// );

// const FlightSchedulePage = () => {
//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Flight List</h1>
//       {flights.map((flight) => (
//         <FlightCard key={flight.id} flight={flight} />
//       ))}
//     </div>
//   );
// };

// export default FlightSchedulePage;






// import { useState } from 'react';
// import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';
// import { GiCommercialAirplane } from 'react-icons/gi';

// const flights = [
//   {
//     id: 1,
//     airline: 'SkyHigh Airlines',
//     departure: '6:00 AM',
//     arrival: '9:00 PM',
    // from: 'Delhi',
    // to: 'Bhubaneswar',
//     duration: '3 hours',
//     stops: 'Direct',
//     price: '$350',
//     baggage: '1 Baggage',
//     meal: 'No Meal',
//   },
//   {
//     id: 2,
//     airline: 'FlyFast Airways',
//     departure: '8:00 AM',
//     arrival: '11:30 AM',
//     from: 'Delhi',
//     to: 'Bhubaneswar',
//     duration: '3 hr 30 m',
//     stops: 'Direct',
//     price: '$400',
//     baggage: '2 Baggage',
//     meal: 'No Meal',
//   },
// ];

// export default function FlightSchedule() {
//   return (
//     <div className="flex w-full min-h-screen bg-[#F8F6F4] text-gray-800">
//       {/* Sidebar Filter */}
//       <aside className="w-72 p-6 bg-white border-r">
//         <h2 className="text-lg font-semibold mb-4">Filter</h2>

//         <div className="mb-4">
//           <h3 className="font-medium mb-2">Transit</h3>
//           <div className="space-y-1">
//             <label className="block"><input type="checkbox" className="mr-2" /> Direct</label>
//             <label className="block"><input type="checkbox" className="mr-2" /> 1 Transit</label>
//             <label className="block"><input type="checkbox" className="mr-2" /> 2+ Transits</label>
//           </div>
//         </div>

//         <div className="mb-4">
//           <h3 className="font-medium mb-2">Price Range</h3>
//           <div className="flex space-x-2">
//             <input type="text" className="w-1/2 border px-2 py-1 rounded" placeholder="$350" />
//             <input type="text" className="w-1/2 border px-2 py-1 rounded" placeholder="$1000" />
//           </div>
//         </div>

//         <div className="mb-4">
//           <h3 className="font-medium mb-2">Departure Time</h3>
//           <input type="range" className="w-full" min="0" max="24" />
//         </div>

//         <div className="mb-4">
//           <h3 className="font-medium mb-2">Airline</h3>
//           <div className="space-y-1 text-sm">
//             <label className="block"><input type="checkbox" className="mr-2" /> SkyHigh Airlines</label>
//             <label className="block"><input type="checkbox" className="mr-2" /> FlyFast Airways</label>
//             <label className="block"><input type="checkbox" className="mr-2" /> JetStream Aviation</label>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="text-xl font-bold mb-6">Flight List</div>

//         {flights.map((flight) => (
//           <div
//             key={flight.id}
//             className="bg-white rounded-lg shadow p-6 mb-4 flex justify-between items-center"
//           >
//             <div className="flex items-center space-x-4">
//               <GiCommercialAirplane size={32} className="text-blue-500" />
//               <div>
//                 <div className="text-lg font-semibold">{flight.airline}</div>
//                 <div className="text-sm text-gray-500">{flight.baggage} · {flight.meal}</div>
//               </div>
//             </div>

//             <div className="flex-1 px-6">
//               <div className="flex items-center justify-between">
//                 <div className="text-center">
//                   <div className="text-xl font-bold">{flight.departure}</div>
//                   <div className="text-sm text-gray-500">{flight.from}</div>
//                 </div>

//                 <div className="flex-1 mx-4 relative">
//                   <div className="border-t border-dotted border-gray-400 h-0 absolute top-1/2 w-full"></div>
//                   <FaPlaneDeparture className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-yellow-600 rotate-45 bg-white" />
//                 </div>

//                 <div className="text-center">
//                   <div className="text-xl font-bold">{flight.arrival}</div>
//                   <div className="text-sm text-gray-500">{flight.to}</div>
//                 </div>
//               </div>
//               <div className="text-sm text-gray-500 text-center mt-1">
//                 {flight.duration} · {flight.stops}
//               </div>
//             </div>

//             <div className="text-right">
//               <div className="text-xl font-bold text-yellow-600">{flight.price}</div>
//               <button className="mt-2 px-4 py-1 border border-yellow-600 text-yellow-600 rounded hover:bg-yellow-100">
//                 View Detail
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





import { useState } from "react";
import { MdOutlineFlight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function FlightSchedule() {
  const [date, setDate] = useState("2028-07-01");
  const [fromLocation, setFromLocation] = useState("Delhi");
  const [toLocation, setToLocation] = useState("Bhubaneswar");
const navigate = useNavigate()
  const flights = [
    {
    id:1,
      airline: "SkyHigh Airlines",
      time: "6:00 AM",
      arrival: "9:00 PM",
      from: 'Delhi',
      to: 'Bhubaneswar',
      flightNo: "SH-276789",
      baggage: "1 Baggage",
      meal: "No Meal",
      price: "$350",
      duration: "3h 0m",
      transits: "Direct",
      logo: "✈️",
    },
    {
        id:2,
      airline: "FlyFast Airways",
      time: "8:00 AM",
      arrival: "11:30 AM",
      from: 'Delhi',
      to: 'Bhubaneswar',
      flightNo: "SH-276790",
      baggage: "2 Baggage",
      meal: "No Meal",
      price: "$400",
      duration: "3h 30m",
      transits: "Direct",
      logo: "✈️",
    },
    {
        id:3,
      airline: "AeroJet",
      time: "10:00 AM",
      arrival: "12:45 PM",
      from: 'Delhi',
      to: 'Bhubaneswar',
      flightNo: "SH-276791",
      baggage: "2 Baggage",
      meal: "In-Flight Meal",
      price: "$450",
      duration: "2h 45m",
      transits: "2 Transits",
      logo: "✈️",
    },
    {
        id:4,
      airline: "JetStream Aviation",
      time: "10:30 AM",
      arrival: "1:00 PM",
      from: 'Delhi',
      to: 'Bhubaneswar',
      flightNo: "SH-276792",
      baggage: "2 Baggage",
      meal: "In-Flight Meal",
      price: "$600",
      duration: "2h 30m",
      transits: "1 Transit",
      logo: "✈️",
    },
    {
        id:5,
      airline: "Nimbus Airlines",
      time: "11:00 AM",
      arrival: "2:00 PM",
      from: 'Delhi',
      to: 'Bhubaneswar',
      flightNo: "SH-276793",
      baggage: "1 Baggage",
      meal: "In-Flight Meal",
      price: "$600",
      duration: "3h 0m",
      transits: "Direct",
      logo: "✈️",
    }
  ];

//   const handleDetail = () => {
//     navigate(`flightdetail/${flights.id}`)
//   }
  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-gray-800 font-sans">
      {/* Sidebar Filter */}
      <div className="w-72 p-5 bg-white/80 border-r border-blue-300 shadow-sm backdrop-blur-sm">
        <h2 className="font-semibold text-xl mb-6 text-blue-700">Filters</h2>

        <div className="mb-6">
          <label className="block font-medium mb-2 text-blue-600">Transit</label>
          <div className="space-y-1 text-sm">
            <label className="flex items-center"><input type="checkbox" className="mr-2 accent-blue-500" /> Direct</label>
            <label className="flex items-center"><input type="checkbox" className="mr-2 accent-blue-500" /> 1 Transit</label>
            <label className="flex items-center"><input type="checkbox" className="mr-2 accent-blue-500" /> 2+ Transits</label>
          </div>
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-2 text-blue-600">Price Range</label>
          <input type="range" min="350" max="1000" defaultValue="350" className="w-full accent-blue-500" />
          <div className="text-xs mt-2 flex justify-between text-blue-600">
            <span>$350</span><span>$1000+</span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-2 text-blue-600">Departure Times</label>
          <input type="range" min="5" max="18" defaultValue="6" className="w-full accent-blue-500" />
          <div className="text-xs mt-2 text-blue-600">05:00 AM - 06:00 PM</div>
        </div>

        <div>
          <label className="block font-medium mb-2 text-blue-600">Airline</label>
          <div className="space-y-1 text-sm">
            {["CloudNine Airlines", "AeroJet", "SkyHigh Airlines", "Nimbus Airlines", "FlyFast Airways", "JetStream Aviation", "SuperJet Airways"].map((airline, idx) => (
              <label key={idx} className="flex items-center"><input type="checkbox" className="mr-2 accent-blue-500" /> {airline}</label>
            ))}
          </div>
          <button className="mt-4 px-3 py-1 border border-blue-500 text-blue-600 rounded text-sm hover:bg-blue-50">Clear All</button>
        </div>
      </div>

      {/* Main Panel */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <div className="flex flex-wrap gap-3 items-center">
            <input
              type="text"
              className="border border-blue-300 px-3 py-2 rounded-md bg-white focus:outline-blue-400"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              placeholder="From"
            />
            <input
              type="text"
              className="border border-blue-300 px-3 py-2 rounded-md bg-white focus:outline-blue-400"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              placeholder="To"
            />
            <input
              type="date"
              className="border border-blue-300 px-3 py-2 rounded-md bg-white focus:outline-blue-400"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <select className="border border-blue-300 px-3 py-2 rounded-md bg-white">
              <option>Economy</option>
              <option>Business</option>
            </select>
            <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">Search</button>
          </div>
          <div className="flex gap-2">
            <select className="border border-blue-300 px-3 py-2 rounded-md bg-white">
              <option>Cheapest</option>
              <option>Fastest</option>
            </select>
            <select className="border border-blue-300 px-3 py-2 rounded-md bg-white">
              <option>Earliest</option>
              <option>Latest</option>
            </select>
            <button className="bg-white border border-blue-400 text-blue-600 px-3 py-2 rounded hover:bg-blue-100 transition">+ Add Flight</button>
          </div>
        </div>

        {/* Flight List */}
        <div className="space-y-4">
          {flights.map((flight, idx) => (
            <div key={idx} className="bg-white/90 border border-blue-200 rounded-lg p-5 hover:shadow-md flex justify-between items-center transition">
              <div>
                <div className="text-3xl">{flight.logo}</div>
                <h3 className="font-semibold text-lg text-blue-800">{flight.airline}</h3>
                <div className="text-xs text-blue-500">{flight.flightNo}</div>
                <div className="text-sm text-gray-600 mt-1">Facilities: {flight.baggage}, {flight.meal}</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-blue-700">{flight.time}</div>
                <div className="text-sm">{flight.from}</div>
              </div>
              <div className="flex-1 mx-4 relative">
                <div className="border-t border-dotted border-blue-300 h-0 absolute top-1/2 w-full"></div>
                <MdOutlineFlight className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-blue-400 mt-7 rotate-90 bg-white rounded-full" />
                <div className="text-sm text-blue-600 text-center mt-10">
                  {flight.duration} · {flight.transits}
                </div>
              </div>
              <div className="text-center pr-7">
                <div className="text-xl font-semibold text-blue-700">{flight.arrival}</div>
                <div className="text-sm">{flight.to}</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-blue-600">{flight.price}/pax</div>
                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm transition" onClick={() => navigate(`/flightdetail/${flight.id}`)}>View Detail</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




// import { useState } from "react";
// import { format } from "date-fns";

// export default function FlightSchedule() {
//   const [date, setDate] = useState("2028-07-01");
//   const [fromLocation, setFromLocation] = useState("Los Angeles (Delhi)");
//   const [toLocation, setToLocation] = useState("New York (Bhubaneswar)");

//   const flights = [
//     {
//       airline: "SkyHigh Airlines",
//       time: "6:00 AM",
//       arrival: "9:00 PM",
//       flightNo: "SH-276789",
//       baggage: "1 Baggage",
//       meal: "No Meal",
//       price: "$350",
//       duration: "3h 0m",
//       transits: "Direct"
//     },
//     {
//       airline: "FlyFast Airways",
//       time: "8:00 AM",
//       arrival: "11:30 AM",
//       flightNo: "SH-276789",
//       baggage: "2 Baggage",
//       meal: "No Meal",
//       price: "$400",
//       duration: "3h 30m",
//       transits: "Direct"
//     },
//     {
//       airline: "AeroJet",
//       time: "10:00 AM",
//       arrival: "12:45 PM",
//       flightNo: "SH-276789",
//       baggage: "2 Baggage",
//       meal: "In-Flight Meal",
//       price: "$450",
//       duration: "2h 45m",
//       transits: "2 Transits"
//     },
//     {
//       airline: "JetStream Aviation",
//       time: "10:30 AM",
//       arrival: "1:00 PM",
//       flightNo: "SH-276789",
//       baggage: "2 Baggage",
//       meal: "In-Flight Meal",
//       price: "$600",
//       duration: "2h 30m",
//       transits: "1 Transit"
//     },
//     {
//       airline: "Nimbus Airlines",
//       time: "11:00 AM",
//       arrival: "2:00 PM",
//       flightNo: "SH-276789",
//       baggage: "1 Baggage",
//       meal: "In-Flight Meal",
//       price: "$600",
//       duration: "3h 0m",
//       transits: "Direct"
//     }
//   ];

//   return (
//     <div className="flex h-screen bg-gray-50 text-gray-800 font-sans">
//       {/* Sidebar Filter */}
//       <div className="w-72 p-4 bg-white border-r overflow-auto">
//         <h2 className="font-semibold text-lg mb-4">Filter</h2>
//         <div className="mb-4">
//           <label className="block font-medium mb-2">Transit</label>
//           <div className="space-y-1">
//             <label className="flex items-center"><input type="checkbox" className="mr-2" /> Direct</label>
//             <label className="flex items-center"><input type="checkbox" className="mr-2" /> 1 Transit</label>
//             <label className="flex items-center"><input type="checkbox" className="mr-2" /> 2+ Transits</label>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block font-medium mb-2">Price Range</label>
//           <input type="range" min="350" max="1000" defaultValue="350" className="w-full" />
//           <div className="text-sm mt-2 flex justify-between">
//             <span>$350</span><span>up to $1000</span>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block font-medium mb-2">Departure Times</label>
//           <input type="range" min="5" max="18" defaultValue="6" className="w-full" />
//           <div className="text-sm mt-2">05:00 AM - 06:00 PM</div>
//         </div>
//         <div>
//           <label className="block font-medium mb-2">Airline</label>
//           <div className="space-y-1">
//             {["CloudNine Airlines", "AeroJet", "SkyHigh Airlines", "Nimbus Airlines", "FlyFast Airways", "JetStream Aviation", "SuperJet Airways"].map((airline, idx) => (
//               <label key={idx} className="flex items-center"><input type="checkbox" className="mr-2" /> {airline}</label>
//             ))}
//           </div>
//           <button className="mt-4 px-3 py-1 border rounded text-sm">Clear All</button>
//         </div>
//       </div>

//       {/* Main Panel */}
//       <div className="flex-1 p-6 overflow-auto">
//         <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
//           <div className="flex flex-wrap gap-2 items-center">
//             <input
//               type="text"
//               className="border px-3 py-2 rounded"
//               value={fromLocation}
//               onChange={(e) => setFromLocation(e.target.value)}
//               placeholder="From"
//             />
//             <input
//               type="text"
//               className="border px-3 py-2 rounded"
//               value={toLocation}
//               onChange={(e) => setToLocation(e.target.value)}
//               placeholder="To"
//             />
//             <input
//               type="date"
//               className="border px-3 py-2 rounded"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//             <select className="border px-3 py-2 rounded">
//               <option>Economy</option>
//               <option>Business</option>
//             </select>
//             <button className="bg-black text-white px-4 py-2 rounded">Search</button>
//           </div>
//           <div className="flex gap-2">
//             <select className="border px-3 py-2 rounded">
//               <option>Cheapest</option>
//               <option>Fastest</option>
//             </select>
//             <select className="border px-3 py-2 rounded">
//               <option>Earliest</option>
//               <option>Latest</option>
//             </select>
//             <button className="bg-gray-200 px-3 py-2 rounded">+ Add Flight</button>
//           </div>
//         </div>

//         {/* Flight List */}
//         <div className="space-y-4">
//           {flights.map((flight, idx) => (
//             <div key={idx} className="bg-white border rounded p-4 hover:shadow-md flex justify-between items-center">
//               <div>
//                 <h3 className="font-semibold text-lg">{flight.airline}</h3>
//                 <div className="text-sm text-gray-500">{flight.flightNo}</div>
//                 <div className="text-sm mt-1">Facilities: {flight.baggage}, {flight.meal}</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-xl font-bold">{flight.time}</div>
//                 <div className="text-sm">Delhi</div>
//               </div>
//               <div className="text-gray-500 text-sm">{flight.duration} • {flight.transits}</div>
//               <div className="text-center">
//                 <div className="text-xl font-bold">{flight.arrival}</div>
//                 <div className="text-sm">Bhubaneswar</div>
//               </div>
//               <div className="text-right">
//                 <div className="text-xl font-bold text-yellow-600">{flight.price}/pax</div>
//                 <button className="mt-2 bg-black text-white px-3 py-1 rounded text-sm">View Detail</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }








// import { useState } from 'react';
// import { FaUserCircle, FaBell, FaCog, FaSearch } from 'react-icons/fa';
// import { MdOutlineFlight } from 'react-icons/md';

// const flights = [
//   {
//     id: 1,
//     airline: 'SkyHigh Airlines',
//     time: '6:00 AM',
//     duration: '3 hours',
//     price: '$350',
//     baggage: '1 Baggage',
//     meal: 'No Meal',
//     stops: 'Direct',
//     arrival: '9:00 PM',
//     logo: '🛫'
//   },
//   {
//     id: 2,
//     airline: 'FlyFast Airways',
//     time: '8:00 AM',
//     duration: '3 hr',
//     price: '$400',
//     baggage: '2 Baggage',
//     meal: 'No Meal',
//     stops: 'Direct',
//     arrival: '11:30 AM',
//     logo: '🛬'
//   },
//   // Add more flight objects as in the image
// ];

// export default function FlightSchedulePage() {
//   return (
//     <div className="min-h-screen bg-[#f5f4f2] font-sans text-sm">
//       {/* Header */}
//       <div className="flex justify-between items-center px-6 py-3 border-b bg-white">
//         <h2 className="font-bold text-lg">Schedule</h2>
//         <div className="flex items-center gap-4 text-gray-600">
//           <FaBell className="text-xl" />
//           <FaCog className="text-xl" />
//           <FaUserCircle className="text-2xl text-gray-700" />
//           <span className="font-semibold text-sm">Martin Septimus</span>
//           <span className="text-xs text-gray-400">Admin</span>
//         </div>
//       </div>

//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-64 p-4 bg-white border-r">
//           <div className="font-semibold mb-4">Filter</div>

//           <div className="mb-6">
//             <h4 className="font-semibold mb-2">Transit</h4>
//             <div className="space-y-2">
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" /> Direct
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" /> 1 Transit
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" /> 2+ Transits
//               </label>
//             </div>
//           </div>

//           <div className="mb-6">
//             <h4 className="font-semibold mb-2">Price Range</h4>
//             <div className="flex gap-2">
//               <input className="w-full border px-2 py-1 text-xs" placeholder="$350" />
//               <input className="w-full border px-2 py-1 text-xs" placeholder="Up to $1000" />
//             </div>
//           </div>

//           <div className="mb-6">
//             <h4 className="font-semibold mb-2">Departure Times</h4>
//             <div className="text-xs">05:00 AM - 06:00 PM</div>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-2">Airline</h4>
//             <div className="space-y-2 text-xs">
//               {['CloudNine Airlines', 'SkyHigh Airlines', 'FlyFast Airways', 'Nimbus Airlines'].map(name => (
//                 <label key={name} className="flex items-center gap-2">
//                   <input type="checkbox" /> {name}
//                 </label>
//               ))}
//               <button className="text-xs text-yellow-500 mt-2">Clear All</button>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           {/* Search */}
//           <div className="bg-white p-4 rounded shadow mb-4 flex flex-wrap gap-4 items-end">
//             <div className="flex flex-col w-40">
//               <label className="text-xs mb-1">From</label>
//               <input className="border px-2 py-1" placeholder="Los Angeles (Delhi)" />
//             </div>
//             <div className="flex flex-col w-40">
//               <label className="text-xs mb-1">To</label>
//               <input className="border px-2 py-1" placeholder="New York (Bhubaneswar)" />
//             </div>
//             <div className="flex flex-col w-40">
//               <label className="text-xs mb-1">Departure Date</label>
//               <input className="border px-2 py-1" placeholder="Sat, 1 Jul 2028" />
//             </div>
//             <div className="flex flex-col w-40">
//               <label className="text-xs mb-1">Seat Class</label>
//               <select className="border px-2 py-1">
//                 <option>Economy</option>
//               </select>
//             </div>
//             <button className="ml-auto bg-yellow-500 text-white px-4 py-2 rounded flex items-center gap-2">
//               <FaSearch /> Search
//             </button>
//             <button className="bg-black text-white px-4 py-2 rounded">+ Add Flight</button>
//           </div>

//           {/* Flight List */}
//           <div className="flex justify-between mb-2">
//             <div className="text-sm text-gray-500">Flight List (10 results)</div>
//             <div className="flex gap-2 items-center">
//               <span className="text-xs">Sort by:</span>
//               <select className="text-xs border rounded px-2 py-1">
//                 <option>Cheapest</option>
//               </select>
//               <select className="text-xs border rounded px-2 py-1">
//                 <option>Earliest</option>
//               </select>
//             </div>
//           </div>

//           <div className="space-y-4">
//             {flights.map(flight => (
//               <div key={flight.id} className="bg-white rounded shadow p-4 flex justify-between items-center">
//                 <div className="flex items-center gap-4">
//                   <div className="text-2xl">{flight.logo}</div>
//                   <div>
//                     <div className="font-semibold">{flight.airline}</div>
//                     <div className="text-xs text-gray-500">SH-{flight.id}</div>
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <div className="font-semibold text-lg">{flight.time}</div>
//                   <div className="text-xs text-gray-400">Los Angeles</div>
//                 </div>
//                 <div className="text-xs text-gray-500">{flight.duration} • {flight.stops}</div>
//                 <div className="text-center">
//                   <div className="font-semibold text-lg">{flight.arrival}</div>
//                   <div className="text-xs text-gray-400">New York</div>
//                 </div>
//                 <div className="text-right">
//                   <div className="font-bold text-lg text-yellow-600">{flight.price}</div>
//                   <div className="text-xs text-gray-500">/pax</div>
//                 </div>
//                 <button className="bg-black text-white px-4 py-2 rounded text-xs">View Detail</button>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import { format } from "date-fns";

// export default function FlightSchedule() {
//   const [date, setDate] = useState(new Date("2028-07-01"));

//   const flights = [
//     {
//       airline: "SkyHigh Airlines",
//       time: "6:00 AM",
//       arrival: "9:00 PM",
//       flightNo: "SH-276789",
//       baggage: "1 Baggage",
//       meal: "No Meal",
//       price: "$350",
//       duration: "3h 0m",
//       transits: "Direct"
//     },
//     {
//       airline: "FlyFast Airways",
//       time: "8:00 AM",
//       arrival: "11:30 AM",
//       flightNo: "SH-276789",
//       baggage: "2 Baggage",
//       meal: "No Meal",
//       price: "$400",
//       duration: "3h 30m",
//       transits: "Direct"
//     },
//     {
//       airline: "AeroJet",
//       time: "10:00 AM",
//       arrival: "12:45 PM",
//       flightNo: "SH-276789",
//       baggage: "2 Baggage",
//       meal: "In-Flight Meal",
//       price: "$450",
//       duration: "2h 45m",
//       transits: "2 Transits"
//     },
//     {
//       airline: "JetStream Aviation",
//       time: "10:30 AM",
//       arrival: "1:00 PM",
//       flightNo: "SH-276789",
//       baggage: "2 Baggage",
//       meal: "In-Flight Meal",
//       price: "$600",
//       duration: "2h 30m",
//       transits: "1 Transit"
//     },
//     {
//       airline: "Nimbus Airlines",
//       time: "11:00 AM",
//       arrival: "2:00 PM",
//       flightNo: "SH-276789",
//       baggage: "1 Baggage",
//       meal: "In-Flight Meal",
//       price: "$600",
//       duration: "3h 0m",
//       transits: "Direct"
//     }
//   ];

//   return (
//     <div className="flex h-screen bg-gray-50 text-gray-800 font-sans">
//       {/* Sidebar Filter */}
//       <div className="w-72 p-4 bg-white border-r overflow-auto">
//         <h2 className="font-semibold text-lg mb-4">Filter</h2>
//         <div className="mb-4">
//           <label className="block font-medium mb-2">Transit</label>
//           <div className="space-y-1">
//             <label className="flex items-center"><input type="checkbox" className="mr-2" /> Direct</label>
//             <label className="flex items-center"><input type="checkbox" className="mr-2" /> 1 Transit</label>
//             <label className="flex items-center"><input type="checkbox" className="mr-2" /> 2+ Transits</label>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block font-medium mb-2">Price Range</label>
//           <input type="range" min="350" max="1000" defaultValue="350" className="w-full" />
//           <div className="text-sm mt-2 flex justify-between">
//             <span>$350</span><span>up to $1000</span>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block font-medium mb-2">Departure Times</label>
//           <input type="range" min="5" max="18" defaultValue="6" className="w-full" />
//           <div className="text-sm mt-2">05:00 AM - 06:00 PM</div>
//         </div>
//         <div>
//           <label className="block font-medium mb-2">Airline</label>
//           <div className="space-y-1">
//             {['CloudNine Airlines', 'AeroJet', 'SkyHigh Airlines', 'Nimbus Airlines', 'FlyFast Airways', 'JetStream Aviation', 'SuperJet Airways'].map((airline, idx) => (
//               <label key={idx} className="flex items-center"><input type="checkbox" className="mr-2" /> {airline}</label>
//             ))}
//           </div>
//           <button className="mt-4 px-3 py-1 border rounded text-sm">Clear All</button>
//         </div>
//       </div>

//       {/* Main Panel */}
//       <div className="flex-1 p-6 overflow-auto">
//         <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
//           <div className="flex flex-wrap gap-2 items-center">
//             <select className="border px-3 py-2 rounded">
//               <option>Los Angeles (Delhi)</option>
//               <option>San Francisco (SFO)</option>
//             </select>
//             <select className="border px-3 py-2 rounded">
//               <option>New York (Bhubaneswar)</option>
//             </select>
//             <input type="date" value="2028-07-01" onChange={() => {}} className="border px-3 py-2 rounded" />
//             <select className="border px-3 py-2 rounded">
//               <option>Economy</option>
//               <option>Business</option>
//             </select>
//             <button className="bg-black text-white px-4 py-2 rounded">Search</button>
//           </div>
//           <div className="flex gap-2">
//             <select className="border px-3 py-2 rounded">
//               <option>Cheapest</option>
//               <option>Fastest</option>
//             </select>
//             <select className="border px-3 py-2 rounded">
//               <option>Earliest</option>
//               <option>Latest</option>
//             </select>
//             <button className="bg-gray-200 px-3 py-2 rounded">+ Add Flight</button>
//           </div>
//         </div>

//         {/* Flight List */}
//         <div className="space-y-4">
//           {flights.map((flight, idx) => (
//             <div key={idx} className="bg-white border rounded p-4 hover:shadow-md flex justify-between items-center">
//               <div>
//                 <h3 className="font-semibold text-lg">{flight.airline}</h3>
//                 <div className="text-sm text-gray-500">{flight.flightNo}</div>
//                 <div className="text-sm mt-1">Facilities: {flight.baggage}, {flight.meal}</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-xl font-bold">{flight.time}</div>
//                 <div className="text-sm">Delhi</div>
//               </div>
//               <div className="text-gray-500 text-sm">{flight.duration} • {flight.transits}</div>
//               <div className="text-center">
//                 <div className="text-xl font-bold">{flight.arrival}</div>
//                 <div className="text-sm">Bhubaneswar</div>
//               </div>
//               <div className="text-right">
//                 <div className="text-xl font-bold text-yellow-600">{flight.price}/pax</div>
//                 <button className="mt-2 bg-black text-white px-3 py-1 rounded text-sm">View Detail</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
