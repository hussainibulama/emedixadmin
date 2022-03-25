import axios from "axios";
import https from "https";

const instance = axios.create({
  baseURL: "https://api.e-medix.ng/", //http://localhost:3301
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods":" GET, PUT, POST, DELETE, OPTIONS"
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

const instances = (props) =>
  axios.create({
    baseURL: "https://api.e-medix.ng/", //https://api.swip.ng/
    mode: "cors",
    headers: {
      accept: "application/json",
      "Accept-Language": "en-US,en;q=0.8",
      "Content-Type": `multipart/form-data; boundary=${props.boundary}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods":" GET, PUT, POST, DELETE, OPTIONS"
    },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
export default instance;
module.export = {
  instance: instance,
  instances: instances,
};
