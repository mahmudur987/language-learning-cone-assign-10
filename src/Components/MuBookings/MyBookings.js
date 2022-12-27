import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { authContext } from "../../UserContext/UserContext";
import Booking from "./Booking";

const MyBookings = () => {
  const { user } = useContext(authContext);
  console.log(user);
  const [bookings, setBookings] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/bookings?email=${user.email}&name=${user.displayName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user]);
  console.log(bookings);

  return (
    <div>
      {bookings.map((booking) => (
        <Booking key={booking._id} booking={booking}></Booking>
      ))}
    </div>
  );
};

export default MyBookings;
