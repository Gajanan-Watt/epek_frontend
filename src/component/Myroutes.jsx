import { Route, Routes } from "react-router";
import { Form } from "./Form";
export const Myroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />}></Route>
      </Routes>
    </>
  );
};
