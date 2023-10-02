import React, { useState } from "react";

//Seats
function SeatAvailabilityCheck() {
  const [seats, setSeats] = useState([
    { id: 1, name: "Seat 1", booked: false },
    { id: 2, name: "Seat 2", booked: false },
    { id: 3, name: "Seat 3", booked: true },
    { id: 4, name: "Seat 4", booked: false },
    // ...more information
  ]);

  return (
    <div>
      <h2>Seats</h2>
      {seats.map((seat) => (
        <div
          key={seat.id}
          style={{ backgroundColor: seat.booked ? "yellow" : "grey" }}
        >
          {seat.name}
        </div>
      ))}
    </div>
  );
}

// Seat reservation component
function SeatBooking() {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatSelect = (seat) => {
    setSelectedSeat(seat);
  };

  const handleSeatBooking = () => {
    if (selectedSeat) {
      // Execute the reservation process
      alert(`لقد قمت بحجز ${selectedSeat.name}`);
    } else {
      alert("الرجاء تحديد المقعد المراد حجزه");
    }
  };

  return (
    <div>
      <h2>حجز المقاعد</h2>
      <div>
        <button onClick={() => handleSeatSelect({ id: 1, name: "Seat 1" })}>
          مقعد 1
        </button>
        <button onClick={() => handleSeatSelect({ id: 2, name: "Seat 2" })}>
          مقعد 2
        </button>
        <button onClick={() => handleSeatSelect({ id: 3, name: "Seat 3" })}>
          مقعد 3
        </button>
        <button onClick={() => handleSeatSelect({ id: 4, name: "Seat 4" })}>
          مقعد 4
        </button>
        {/* ...Add more seats here*/}
      </div>
      <button onClick={handleSeatBooking}>Seat reservation</button>
    </div>
  );
}

// Core application component
function TheatreBookingApp() {
  const [page, setPage] = useState("availability");

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <h1>Theater reservation system</h1>
      <div>
        <button onClick={() => handlePageChange("availability")}>
        Check seat availability
        </button>
        <button onClick={() => handlePageChange("booking")}>
        Reserve seats
        </button>
      </div>
      {page === "availability" ? <SeatAvailabilityCheck /> : <SeatBooking />}
    </div>
  );
}

export default TheatreBookingApp;