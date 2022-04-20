import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

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
    <>
      <Link to="/create">
        <button>Criar conta</button>
      </Link>
      <ul>
        {data.map((currentPlayer) => {
          return (
            <li>
              <p>{currentPlayer.nickname}</p>
              <Link to={`/detail/${currentPlayer._id}`}>Saiba mais</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
