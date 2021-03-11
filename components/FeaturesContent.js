import { useState, useEffect } from "react";
import axios from "axios";
export default function FeaturesContent() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://newapi.ahadev.net/wp-json/wp/v2/pages/3370`)
      .then((res) => {
        setUserData(res.data.content.rendered);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <p dangerouslySetInnerHTML={{ __html: userData }}></p>;
}
