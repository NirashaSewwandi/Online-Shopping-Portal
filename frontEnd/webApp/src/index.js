/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "@asgardeo/auth-react";
import { AuthContextProvider } from "context";
import { useState, useEffect, useMemo, useContext } from "react";

// Material Dashboard 2 React Context Provider
import { ContextProvider } from "./UserContext";


const config = {
  signInRedirectURL:
    "https://b5a3c6ff-215f-4192-a3b4-351fba062ad6.e1-us-east-azure.choreoapps.dev/dashboard",
  signOutRedirectURL:
    "https://b5a3c6ff-215f-4192-a3b4-351fba062ad6.e1-us-east-azure.choreoapps.dev",
  clientID: "sLaZq4Byn23qXR0vHn9o33DlF88a",
  baseUrl: "https://api.asgardeo.io/t/sns24",
  scope: [
    // "openid",
    "profile",
    // "app_roles",
    // "urn:interns:identitycheckserviceident:check_identity urn:interns:policecheckservicepolicev:police_ver_check urn:interns:addresscheckserviceaddres:check_address urn:interns:gramaapiservicerequests91:reqeust_reaction urn:interns:gramaapiservicerequests91:get_all_requests urn:interns:gramaapiservicerequests91:post_a_request",
  ],
  // resourceServerURLs: [
  //   "https://cf3a4176-54c9-4547-bcd6-c6fe400ad0d8-dev.e1-us-east-azure.choreoapis.dev/maoe/grama-api-service/requests-915/1.0.0",
  //   "https://cf3a4176-54c9-4547-bcd6-c6fe400ad0d8-dev.e1-us-east-azure.choreoapis.dev/maoe/grama-api-service/requests-915/1.0.0/validate",
  //   "https://cf3a4176-54c9-4547-bcd6-c6fe400ad0d8-dev.e1-us-east-azure.choreoapis.dev/maoe/slacknotifications/endpoint-7070-070/1.0.0/sendNotifications",
  //   "https://cf3a4176-54c9-4547-bcd6-c6fe400ad0d8-dev.e1-us-east-azure.choreoapis.dev/maoe/grama-api-service/requests-915/1.0.0/police-report",
  //   " https://cf3a4176-54c9-4547-bcd6-c6fe400ad0d8-dev.e1-us-east-azure.choreoapis.dev/maoe/grama-api-service/requests-915/1.0.0/address-report",
  // ],
};


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <AuthProvider config={config}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<App />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ContextProvider>
  </React.StrictMode>
  // <BrowserRouter>
  //   <AuthProvider config={config}>
  //     <MaterialUIControllerProvider>
  //       <App />
  //     </MaterialUIControllerProvider>
  //   </AuthProvider>
  // </BrowserRouter>
);
reportWebVitals();