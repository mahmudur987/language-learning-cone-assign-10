import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { authContext } from "../../UserContext/UserContext";

const MyBookings = () => {
  const { user } = useContext(authContext);
  console.log(user);
  const [bookings, setBookings] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/bookings?email=${user.email}name=${user.displayName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user]);
  console.log(bookings);

  return <div>booking</div>;
};

export default MyBookings;
