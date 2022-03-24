import React from "react";
import { Grid, Cell } from "react-mdl";

const Error = (props) => {
  return (
    <div className="errormessage">
      <Grid>
        <Cell col={2}>
          <div className="center">
            <div className="errcircle">!</div>
          </div>
        </Cell>
        <Cell col={10}>
          <p>{props.msg}</p>
        </Cell>
      </Grid>
    </div>
  );
};
export default Error;
