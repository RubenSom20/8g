import React from "react";
import { Badge } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Greet({ firstName, lastName }) {
  return (
    <p>
      Hola {firstName} {lastName}</p>
  );
}

export default Greet;
