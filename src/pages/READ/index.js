import { useState, useEffect } from "react";
import axios from "axios";

export function Read() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/crud-intro"
      );

      setData(response.data);
    }
    fetchPlayers();
  }, []);

  return (
    <ul>
      {data.map((currentPlayer) => {
        return <li>{currentPlayer.nickname}</li>;
      })}
    </ul>
  );
}
