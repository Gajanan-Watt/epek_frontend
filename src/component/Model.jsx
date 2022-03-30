import axios from "axios";
import Modal from "react-modal";
import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import "./model.css";

export const Model = ({ flag, setFlag, id }) => {
  const [text, setText] = useState({});
  const [t, setT] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`https://epek-backend.herokuapp.com/api/issue/${id}`, text)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    setT(true);
  };

  if (t) {
    window.location.href = "/";
  }

  const handleChange = (e) => {
    let { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  return (
    <>
      <Modal className="modal" isOpen={flag} width="400px" height="400px">
        <Button
          onClick={() => setFlag(false)}
          className="btn"
          variant="contained"
        >
          Close
        </Button>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch", height: "7ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            type="text"
            label="Project Name"
            variant="outlined"
            name="projectName"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            type="text"
            label="Title"
            variant="outlined"
            name="title"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            type="text"
            label="Description"
            variant="outlined"
            name="description"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            type="number"
            label="Priority"
            variant="outlined"
            name="priority"
            onChange={handleChange}
          />
          <Button onClick={handleSubmit} className="btn" variant="contained">
            Contained
          </Button>
        </Box>
      </Modal>
    </>
  );
};
