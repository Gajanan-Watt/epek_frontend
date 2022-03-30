import "./table.css";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Model } from "./Model";

export const Table = ({ info, setInfo }) => {
  const [flag, setFlag] = useState(false);
  const [index, setIndex] = useState([]);

  console.log("info", info);
  const handlePatch = (id) => {
    setFlag(true);
    setIndex(id);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://epek-backend.herokuapp.com/api/issue/${id}`)
      .then(() => setInfo([...info]))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <table id="customers">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Delete Issue</th>
          </tr>
        </thead>
        <tbody>
          {info.map((el, id) => {
            return (
              <tr key={id}>
                <td onClick={() => handlePatch(el._id)}>{el.projectName}</td>
                <td onClick={() => handlePatch(el._id)}>{el.title}</td>
                <td onClick={() => handlePatch(el._id)}>{el.description}</td>
                <td onClick={() => handlePatch(el._id)}>{el.priority}</td>
                <td>
                  <Button
                    onClick={() => handleDelete(el._id)}
                    className="btn"
                    variant="contained"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {flag && <Model flag={flag} setFlag={setFlag} id={index} />}
    </>
  );
};
