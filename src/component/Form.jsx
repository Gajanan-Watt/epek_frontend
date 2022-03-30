import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "./Table";
import "./form.css";

export const Form = () => {
  const [text, setText] = useState({});

  const [info, setInfo] = useState([]);

  useEffect(() => {
    getData();
  }, [info]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setText({ ...text, [name]: value });
    // console.log(text);
  };

  const getData = () => {
    axios
      .get("https://epek-backend.herokuapp.com/api/issue/")
      .then((res) => setInfo(res.data))
      .catch((e) => console.log(e));
    console.log("info", info);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://epek-backend.herokuapp.com/api/issue/", text)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    getData();
  };
  return (
    <>
      <h1 className="head">FULLSTACK ASSESMENT </h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "25ch", height: "7ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Project Name"
          variant="outlined"
          name="projectName"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          name="title"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Priority"
          variant="outlined"
          name="priority"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} className="btn" variant="contained">
          Submit
        </Button>
      </Box>

      <br />
      <Table info={info} setInfo={setInfo} />
    </>
  );
};
