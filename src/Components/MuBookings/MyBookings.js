import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { authContext } from "../../UserContext/UserContext";
import Booking from "./Booking";

const MyBookings = () => {
  const { user } = useContext(authContext);

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const url = `https://language-learning-server.vercel.app/bookings?email=${user?.email}&name=${user?.displayName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user]);

  return (
    <div>
      {bookings?.map((booking, idx) => (
        <Booking key={booking._id} idx={idx} booking={booking}></Booking>
      ))}
    </div>
  );
};

export default MyBookings;
