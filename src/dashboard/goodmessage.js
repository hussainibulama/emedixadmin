import React from "react";
import { Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Good = (props) => {
  return (
    <div className="goodmessage">
      <Grid>
        <Cell col={2}>
          <div className="center">
            <div className="goodcircle">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
          </div>
        </Cell>
        <Cell col={10}>
          <p>{props.msg}</p>
        </Cell>
      </Grid>
    </div>
  );
};
export default Good;
