import React, { useEffect, useState } from "react";

export default function CurrentBookings() {
  const [bookings, setBookings] = useState([]);

  // Simulated fetch (replace this with actual API/Firebase call)
  useEffect(() => {
    const mockBookings = [
      {
        id: "BK123456",
        passenger: "John Doe",
        email: "john@example.com",
        date: "May 10, 2025",
        checkedBags: 2,
        bagWeight: 25,
        paymentStatus: "Paid",
      },
      {
        id: "BK123457",
        passenger: "Alice Smith",
        email: "alice@example.com",
        date: "May 12, 2025",
        checkedBags: 1,
        bagWeight: 15,
        paymentStatus: "Paid",
      },
    ];

    setBookings(mockBookings);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Current Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-gray-600">No current bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">Booking ID</th>
                <th className="px-4 py-2 text-left">Passenger</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Checked Bags</th>
                <th className="px-4 py-2 text-left">Bag Weight (kg)</th>
                <th className="px-4 py-2 text-left">Payment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{booking.id}</td>
                  <td className="px-4 py-2">{booking.passenger}</td>
                  <td className="px-4 py-2">{booking.email}</td>
                  <td className="px-4 py-2">{booking.date}</td>
                  <td className="px-4 py-2">{booking.checkedBags}</td>
                  <td className="px-4 py-2">{booking.bagWeight}</td>
                  <td className="px-4 py-2">
                    <span className={`font-semibold ${booking.paymentStatus === "Paid" ? "text-green-600" : "text-red-500"}`}>
                      {booking.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
