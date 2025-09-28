

import React, { useEffect, useState } from 'react'
import './App.css';

const App = () => {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data");
        const data = await res.json();
        const sorted  = data.sort((a,b) => a.NRR - b.NRR);
        setTeams(sorted);
      } catch (err) {
        console.log("Server Error0", err);
      }
    }
    fetchData();
  },[]);

  return (
    <div className='container'>
      <h1>
        IPL 2022 Points Table
      </h1>

      <table className='table' border="1" cellPadding="8" >
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key = {team.No}>
              <td>{team.No}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default App
