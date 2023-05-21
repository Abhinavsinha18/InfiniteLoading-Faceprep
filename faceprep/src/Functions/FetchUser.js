import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchUser(pageNumber) {
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState([]);


  useEffect(() => {
    setLoad(true);
    setError(false);
    setTimeout(() => {
      axios({
        method: "GET",
        url: `https://randomuser.me/api/`,
        params: { page: pageNumber, results: 10 },
      })
        .then((data) => {
          setUserData((prev) => { 
            return [...prev, ...data.data.results];
          }); 
          setLoad(false);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    }, 1000);
  }, [pageNumber]);

  return { load, error, userData };
}
