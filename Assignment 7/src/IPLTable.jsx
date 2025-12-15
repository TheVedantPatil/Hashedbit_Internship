import { useState, useEffect } from "react";

function IPLTable() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        const sortData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortData);
      })
      .catch((error) => console.error("Error fetching data:", error));
    });

  return (
    <div>
        <h1>IPL Points Table</h1>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>No.</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.No}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Points}</td>
              <td>{team.NRR}</td>
            </tr>
          ))};
        </tbody>
      </table>
    </div>
  );
};

export default IPLTable;
