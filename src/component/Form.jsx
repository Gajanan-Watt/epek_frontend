import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "./Table";
import "./form.css";

export const Form = () => {
  const [text, setText] = useState({});
  const [check, setCheck] = useState(false);
  const [del, setDel] = useState(false);
  const [pat, setPat] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getData();
  }, [check, del]);

  useEffect(() => {
    getData();
  }, [pat]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setText({ ...text, [name]: value });
    // console.log(text);
  };

  const getData = () => {
    axios
      .get("http://localhost:3456/api/issue/")
      .then((res) => setInfo(res.data))
      .catch((e) => console.log(e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3456/api/issue/", text)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    setCheck((prev) => !prev);
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
      <Table setPat={setPat} setDel={setDel} info={info} setInfo={setInfo} />
    </>
  );
};
