import axios from "axios";
import https from "https";

const instance = axios.create({
  baseURL: "http://localhost:3301", //http://localhost:3301
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

const instances = (props) =>
  axios.create({
    baseURL: "http://13.40.222.137:3001/", //https://api.swip.ng/
    mode: "cors",
    headers: {
      accept: "application/json",
      "Accept-Language": "en-US,en;q=0.8",
      "Content-Type": `multipart/form-data; boundary=${props.boundary}`,
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
