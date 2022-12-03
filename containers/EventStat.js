import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ip } from "../data/ip";

export default function EventStat(matchId) {
  const [events, setEvents] = useState([]);
  const getDataEvent = async () => {
    const res = await axios.get(`${ip}/website/events`);
    await res.data.data.map((event) => {
      event.matchId === matchId.id ? setEvents(event.events) : [];
    });
  };
  useEffect(() => {
    getDataEvent();
    setInterval(() => {
      getDataEvent();
    }, 60000);
  }, [matchId.id]);
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {events.map((event, index) => (
            <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {event.homeEvent === true ? (
                <>
                  <TableCell align="right" className="event-home">
                    {event.playerName}
                    <span>
                      {event.type === 1 ? (
                        <img src="https://www.bongdalu.fun/images/bf_img/1.png" />
                      ) : event.type === 2 ? (
                        <img src="https://www.bongdalu.fun/images/bf_img/2.png" />
                      ) : event.type === 3 ? (
                        <img src="https://www.bongdalu.fun/images/bf_img/3.png" />
                      ) : event.type === 7 ? (
                        <img src="https://www.bongdalu.fun/images/bf_img/7.png" />
                      ) : (
                        ""
                      )}
                    </span>
                  </TableCell>
                  <TableCell align="right" className="event-minutes">
                    {event.minute}'
                  </TableCell>
                  <TableCell align="right" className="event-away"></TableCell>
                </>
              ) : (
                <>
                  <TableCell align="right" className="event-home"></TableCell>
                  <TableCell align="right" className="event-minutes">
                    {event.minute}'
                  </TableCell>

                  <TableCell align="right" className="event-away">
                    <span>
                      {event.type === 1 ? (
                        <img src="https://www.bongdalu.fun/images/bf_img/1.png" />
                      ) : event.type === 2 ? (
                        <img src="https://www.bongdalu.fun/images/bf_img/2.png" />
                      ) : event.type === 3 ? (
                        <img src="https://www.bongdalu.fun/images/bf_img/3.png" />
                      ) : event.type === 7 ? (
                        <img src="https://www.bongdalu.fun/images/bf_img/7.png" />
                      ) : (
                        ""
                      )}
                    </span>

                    {event.playerName}
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
