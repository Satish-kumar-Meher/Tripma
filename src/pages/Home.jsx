// import React, { useState } from 'react'
// import Navbar from '../components/Navbar'

// // const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'San Francisco'];

// function Home() {
//     // const [fromLocation, setFromLocation] = useState('');
//     // const [toLocation, setToLocation] = useState('');
//     const [departureDate, setDepartureDate] = useState('');
//     const [arrivalDate, setArrivalDate] = useState('');
//     // const [adults, setAdults] = useState(1);
//     // const [minors, setMinors] = useState(0);
  
//     // // Sample location suggestions (You can replace this with a dynamic API)
//     // const locations = ['New York', 'Los Angeles', 'Paris', 'London', 'Tokyo', 'Dubai'];
//     // const filteredFromLocations = locations.filter(loc => loc.toLowerCase().includes(fromLocation.toLowerCase()));
//     // const filteredToLocations = locations.filter(loc => loc.toLowerCase().includes(toLocation.toLowerCase()));
  

//     const [from, setFrom] = useState("");
//     const [to, setTo] = useState("");
//     const [adult, setAdult] = useState(1);
//     const [minor, setMinor] = useState(0);
//     const [suggestions, setSuggestions] = useState([]);
  
//     const locations = ["New York", "Los Angeles", "London", "Delhi", "Paris", "Tokyo", "Dubai"];
  
//     const handleInput = (value, setter) => {
//       setter(value);
//       setSuggestions(locations.filter(loc => loc.toLowerCase().includes(value.toLowerCase())));
//     };

//   return (
//    <>
//     <div className="min-h-screen bg-[url('/bg-map.png')] bg-no-repeat bg-cover">
//       <Navbar />
//       <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
//         <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
//           It’s more than just a trip
//         </h1>

//         {/* Search Section */}
//         <div className="mt-12 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center md:space-x-4 p-4 w-full max-w-4xl">
//           <div className="flex items-center border md:border-0 w-full md:w-auto px-4 py-2">
//             ✈️ <input type="text" placeholder="From where?" className="ml-2 outline-none w-full"  value={from}
//           onChange={(e) => handleInput(e.target.value, setFrom)} />
//               {from && (
//           <ul className="absolute bg-white border mt-1 w-48 z-10">
//             {suggestions.map((loc, idx) => (
//               <li
//                 key={idx}
//                 onClick={() => {
//                   setFrom(loc);
//                   setSuggestions([]);
//                 }}
//                 className="p-1 hover:bg-gray-100 cursor-pointer"
//               >
//                 {loc}
//               </li>
//             ))}
//           </ul>
//         )}
//           </div>
//           <div className="flex items-center border-t md:border-t-0 md:border-l w-full md:w-auto px-4 py-2">
//             ✈️ <input type="text" placeholder="Where to?" className="ml-2 outline-none w-full" value={to}
//           onChange={(e) => handleInput(e.target.value, setTo)}/>
//               {to && (
//           <ul className="absolute bg-white border mt-1 w-48 z-10">
//             {suggestions.map((loc, idx) => (
//               <li
//                 key={idx}
//                 onClick={() => {
//                   setTo(loc);
//                   setSuggestions([]);
//                 }}
//                 className="p-1 hover:bg-gray-100 cursor-pointer"
//               >
//                 {loc}
//               </li>
//             ))}
//           </ul>
//         )}
//           </div>
//           <div className="flex items-center border-t md:border-t-0 md:border-l w-full md:w-auto px-4 py-2">
//             📅 <input type="date" placeholder="Depart Date" value={departureDate}
//               onChange={(e) => setDepartureDate(e.target.value)} className="ml-2 outline-none w-full" />
//           </div>
//           <div className="flex items-center border-t md:border-t-0 md:border-l w-full md:w-auto px-4 py-2">
//             📅 <input type="date" placeholder="Return Date" value={arrivalDate}
//               onChange={(e) => setArrivalDate(e.target.value)} className="ml-2 outline-none w-full" />
//           </div>
//           <div className="flex items-center border-t md:border-t-0 md:border-l w-full md:w-auto px-4 py-2">
//             👤 <input type="text" placeholder="1 adult" className="ml-2 outline-none w-full" />
//           </div>
//           <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-full md:w-auto">Search</button>
//         </div>
//       </div>
//     </div>
//    </>
//   )
// }

// export default Home



import React, { useState } from 'react';
import TestimonialSlider from '../components/Testinomials';
import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

function Home() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [adult, setAdult] = useState(1);
  const [minor, setMinor] = useState(0);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');

  const [isChatOpen, setIsChatOpen] = useState(false);

  const navigate = useNavigate()

  const locations = ['New York', 'Los Angeles', 'London', 'Delhi', 'Paris', 'Tokyo', 'Dubai'];

  const handleFromInput = (value) => {
    setFrom(value);
    setFromSuggestions(locations.filter(loc => loc.toLowerCase().includes(value.toLowerCase())));
  };

  const handleToInput = (value) => {
    setTo(value);
    setToSuggestions(locations.filter(loc => loc.toLowerCase().includes(value.toLowerCase())));
  };

  return (
    <>
      <div className="min-h-screen bg-[url('/bg-map.png')] bg-no-repeat bg-cover">
        {/* <Navbar /> */}
        <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
          <h1 className="pb-5 text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            It’s more than just a trip
          </h1>

          {/* Search Section */}
          <div className="mt-15 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center md:space-x-4 p-4 w-full max-w-6xl">

            {/* From Field */}
            <div className="relative w-full md:w-auto">
              <div className="flex items-center border md:border-0 px-4 py-2">
                ✈️
                <input
                  type="text"
                  placeholder="From where?"
                  className="ml-2 outline-none w-full"
                  value={from}
                  onChange={(e) => handleFromInput(e.target.value)}
                />
              </div>
              {from && fromSuggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 mt-1 w-full z-10 shadow-lg rounded-lg overflow-hidden animate-fade-in">
                  {fromSuggestions.map((loc, idx) => (
                    <li
                      key={idx}
                      onClick={() => {
                        setFrom(loc);
                        setFromSuggestions([]);
                      }}
                      className="px-4 py-3 hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors duration-200"
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* To Field */}
            <div className="relative w-full md:w-auto">
              <div className="flex items-center border-t md:border-t-0 md:border-l px-4 py-2">
                ✈️
                <input
                  type="text"
                  placeholder="Where to?"
                  className="ml-2 outline-none w-full"
                  value={to}
                  onChange={(e) => handleToInput(e.target.value)}
                />
              </div>
              {to && toSuggestions.length > 0 && (
                <ul className="absolute bg-white border mt-1 w-full z-10 shadow-md rounded">
                  {toSuggestions.map((loc, idx) => (
                    <li
                      key={idx}
                      onClick={() => {
                        setTo(loc);
                        setToSuggestions([]);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Departure Date */}
            <div className="flex items-center border-t md:border-t-0 md:border-l w-full md:w-auto px-4 py-2">
              📅
              <input
                type="date"
                placeholder="Depart Date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="ml-2 outline-none w-full"
              />
            </div>

            {/* Arrival Date */}
            <div className="flex items-center border-t md:border-t-0 md:border-l w-full md:w-auto px-4 py-2">
              📅
              <input
                type="date"
                placeholder="Return Date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="ml-2 outline-none w-full"
              />
            </div>



<div className="relative group">
  <button className="border-l pl-4 pr-6 py-2 w-48 text-left font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 ">
    👤 {adult} Adult, {minor} Minor
  </button>

  <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-xl p-4 mt-2 w-60 z-10">
    {/* Adults */}
    <div className="flex justify-between items-center mb-3">
      <span className="text-gray-700 font-semibold">Adults</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setAdult(adult > 0 ? adult - 1 : 0)}
          className="bg-red-100 text-red-600 hover:bg-red-200 rounded-full px-3 py-1 transition duration-200 font-bold"
        >−</button>
        <span className="text-gray-700 font-medium">{adult}</span>
        <button
          onClick={() => setAdult(adult + 1)}
          className="bg-green-100 text-green-600 hover:bg-green-200 rounded-full px-3 py-1 transition duration-200 font-bold"
        >+</button>
      </div>
    </div>

    {/* Minors */}
    <div className="flex justify-between items-center">
      <span className="text-gray-700 font-semibold">Minors</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setMinor(minor > 0 ? minor - 1 : 0)}
          className="bg-red-100 text-red-600 hover:bg-red-200 rounded-full px-3 py-1 transition duration-200 font-bold"
        >−</button>
        <span className="text-gray-700 font-medium">{minor}</span>
        <button
          onClick={() => setMinor(minor + 1)}
          className="bg-green-100 text-green-600 hover:bg-green-200 rounded-full px-3 py-1 transition duration-200 font-bold"
        >+</button>
      </div>
    </div>
  </div>
</div>


            {/* Search Button */}
            <button onClick={() => navigate("/flights")} className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-full md:w-auto">
              Search
            </button>
          </div>
        </div>
        {/* <div className="mt-55">
        <Footer/>
        </div> */}
       
      </div>
      <section className="w-full sm:px-20 mb-60 px-10 h-full bg-cover bg-center" >
      <TestimonialSlider />
            </section>
            {/* Floating Chatbot Button */}
<div className="fixed bottom-6 right-6 z-50">
  <button
    onClick={() => navigate("/chatbot")}
    className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
    aria-label="Open Chatbot"
  >
    💬
  </button>
</div>

{/* Chatbot Interface */}
{/* {isChatOpen && (
  <div className="fixed bottom-20 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
    <div className="bg-blue-600 text-white p-3 font-semibold flex justify-between items-center">
      Chat Assistant
      <button
        onClick={() => setIsChatOpen(false)}
        className="text-white font-bold text-lg"
      >
        ×
      </button>
    </div>
    <div className="p-3 h-64 overflow-y-auto text-sm text-gray-700">
      <p>Hello! How can I assist you today?</p>
     
    </div>
    <div className="flex items-center border-t">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 px-3 py-2 outline-none text-sm"
      />
      <button className="px-4 text-blue-600 font-semibold">Send</button>
    </div>
  </div>
)} */}

    </>
  );
}

export default Home;







// import React, { useState } from 'react';

// const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'San Francisco'];

// const Home = () => {
//     const [fromLocation, setFromLocation] = useState('');
//     const [toLocation, setToLocation] = useState('');
//     const [departureDate, setDepartureDate] = useState('');
//     const [arrivalDate, setArrivalDate] = useState('');
//     const [adults, setAdults] = useState(1);
//     const [minors, setMinors] = useState(0);
  
//     // Sample location suggestions (You can replace this with a dynamic API)
//     const locations = ['New York', 'Los Angeles', 'Paris', 'London', 'Tokyo', 'Dubai'];
//     const filteredFromLocations = locations.filter(loc => loc.toLowerCase().includes(fromLocation.toLowerCase()));
//     const filteredToLocations = locations.filter(loc => loc.toLowerCase().includes(toLocation.toLowerCase()));
  

//   return (
//     <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white min-h-screen flex flex-col justify-center items-center">
//       <div className="text-center mb-8">
//         <h1 className="text-5xl font-bold">It’s more than just a trip</h1>
//       </div>
      
//       <div className="w-full max-w-4xl bg-white rounded-xl p-6 shadow-lg">
//         <div className="flex space-x-4">
//           {/* From Location Input */}
//           <div className="w-1/3 relative">
//             <input
//               type="text"
//               placeholder="From where?"
//               className="w-full p-2 border border-gray-300 rounded-lg"
//               value={fromLocation}
//               onChange={(e) => setFromLocation(e.target.value)}
//             />
//             {fromLocation && (
//               <div className="absolute top-full left-0 right-0 bg-white border border-t-0 border-gray-300 mt-1 max-h-40 overflow-y-auto">
//                 {filteredFromLocations.map((loc, index) => (
//                   <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => setFromLocation(loc)}>
//                     {loc}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
          
//           {/* To Location Input */}
//           <div className="w-1/3 relative">
//             <input
//               type="text"
//               placeholder="Where to?"
//               className="w-full p-2 border border-gray-300 rounded-lg"
//               value={toLocation}
//               onChange={(e) => setToLocation(e.target.value)}
//             />
//             {toLocation && (
//               <div className="absolute top-full left-0 right-0 bg-white border border-t-0 border-gray-300 mt-1 max-h-40 overflow-y-auto">
//                 {filteredToLocations.map((loc, index) => (
//                   <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => setToLocation(loc)}>
//                     {loc}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex space-x-4 mt-4">
//           {/* Departure Date */}
//           <div className="w-1/3">
//             <input
//               type="date"
//               className="w-full p-2 border border-gray-300 rounded-lg"
//               value={departureDate}
//               onChange={(e) => setDepartureDate(e.target.value)}
//             />
//           </div>
          
//           {/* Arrival Date */}
//           <div className="w-1/3">
//             <input
//               type="date"
//               className="w-full p-2 border border-gray-300 rounded-lg"
//               value={arrivalDate}
//               onChange={(e) => setArrivalDate(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="flex space-x-4 mt-4">
//           {/* Adults Counter */}
//           <div className="w-1/3">
//             <div className="flex items-center space-x-2">
//               <label htmlFor="adults" className="text-lg">Adults</label>
//               <button onClick={() => setAdults(adults > 1 ? adults - 1 : 1)} className="px-2 py-1 border rounded-lg">-</button>
//               <span>{adults}</span>
//               <button onClick={() => setAdults(adults + 1)} className="px-2 py-1 border rounded-lg">+</button>
//             </div>
//           </div>
          
//           {/* Minors Counter */}
//           <div className="w-1/3">
//             <div className="flex items-center space-x-2">
//               <label htmlFor="minors" className="text-lg">Minors</label>
//               <button onClick={() => setMinors(minors > 0 ? minors - 1 : 0)} className="px-2 py-1 border rounded-lg">-</button>
//               <span>{minors}</span>
//               <button onClick={() => setMinors(minors + 1)} className="px-2 py-1 border rounded-lg">+</button>
//             </div>
//           </div>
//         </div>

//         {/* Search Button */}
//         <div className="mt-6 text-center">
//           <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300">Search</button>
//         </div>
//       </div>
//     </div>
//   );
// };
  

// export default Home;





