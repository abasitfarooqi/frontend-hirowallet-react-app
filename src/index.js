import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from './context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./index.css";
import "./mystyle.css";
import App from "./App";
import { Connect } from "@stacks/connect-react";
import { userSession } from "./components/ConnectWallet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <Connect
      authOptions={{
        appDetails: {
          name: "Stacks React Template",
          // todo:
          icon: window.location.origin + "/logo.png",
        },
        redirectTo: "/",
        onFinish: () => {
          window.location.reload();
        },
        userSession,
      }}
    >
      <App />
    </Connect>
    </AuthProvider>
  </React.StrictMode>
);