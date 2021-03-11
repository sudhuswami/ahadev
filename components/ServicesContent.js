import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

// export default ServicesContent;
export default function ServicesContent() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://newapi.ahadev.net/wp-json/wp/v2/pages/3507`)
      .then((res) => {
        setUserData(res.data.content.rendered);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <p dangerouslySetInnerHTML={{ __html: userData }}></p>;
}
