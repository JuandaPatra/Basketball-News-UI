import React, { useState, useEffect } from "react";
import "../home.scss";
import axios from "axios";
import { Table } from "react-bootstrap";

export const Standings = () => {
  const [teams, setTeams] = useState([]);
  const [standing, setStanding] = useState([]);

  const options = {
    method: "GET",
    url: "https://api-nba-v1.p.rapidapi.com/standings",
    params: { league: "standard", season: "2021", conference: "east" },
    headers: {
      "X-RapidAPI-Key": "7cb26f17a3mshcce0bbe7511179bp168c0djsna4bf40afe038",
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.response);

        let res = response.data.response.sort((a, b) => {
          return a.conference.rank - b.conference.rank;
        });
        // setTeams(response.data.response);
        setTeams(res);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1 className="text-center">Standings</h1>
      <h2 className="text-center">EAST</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>No</th>
            <th>Teams</th>
            <th>Win</th>
            <th>Lose</th>
          </tr>
        </thead>
        <tbody>
        {teams.map((item, index) => {
        return (
            <tr key={index}>
            <td>{item.conference.rank}</td>
            <td><img
              src={item.team.logo}
               alt=""
               style={{ width: "20px", height: "20px" }}
             />
            <span>{item.team.name}</span></td>
            <td>{item.conference.win}</td>
            <td>{item.conference.loss}</td>
          </tr>
        //   <div key={index}>
        //     <img
        //       src={item.team.logo}
        //       alt=""
        //       style={{ width: "20px", height: "20px" }}
        //     />
        //     <span>{item.team.name}</span>
        //     {/* <span>{item.team.nickname}</span>   */}
        //     &nbsp;
        //     <span>{item.conference.rank}</span>
        //   </div>
        );
      })}
          
        </tbody>
      </Table>

      
    </>
  );
};
