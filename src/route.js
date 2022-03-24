import React from "react";

const SignUp1 = React.lazy(() =>
  import("./Demo/Authentication/SignUp/SignUp1")
);
const Signin1 = React.lazy(() =>
  import("./Demo/Authentication/SignIn/SignIn1")
);
const reset1 = React.lazy(() => import("./Demo/Authentication/Reset/reset"));
const verify = React.lazy(() => import("./Demo/Authentication/Reset/verify"));
const change = React.lazy(() =>
  import("./Demo/Authentication/Reset/changepassword")
);

const route = [
  { path: "/auth/signup", exact: true, name: "Signup", component: SignUp1 },
  { path: "/auth/signin", exact: true, name: "Signin", component: Signin1 },
  {
    path: "/auth/change-password/:id",
    exact: true,
    name: "Change Password",
    component: change,
  },
  {
    path: "/auth/reset-password",
    exact: true,
    name: "Reset Password",
    component: reset1,
  },
  {
    path: "/auth/verify/:id",
    exact: true,
    name: "Verify Account",
    component: verify,
  },
];

export default route;
