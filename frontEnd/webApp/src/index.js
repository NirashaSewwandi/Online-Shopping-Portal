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
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { AuthContextProvider } from "context";
import { AuthProvider } from "@asgardeo/auth-react";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
const config = {
  // signInRedirectURL: "http://localhost:3000/",
  signInRedirectURL:
    "https://1ceefae4-b046-4593-96e7-23daa86d155e.e1-us-east-azure.choreoapps.dev",
  signOutRedirectURL:
    "https://1ceefae4-b046-4593-96e7-23daa86d155e.e1-us-east-azure.choreoapps.dev",
  clientID: "fvfdPe4sObBISxN3aR_vsmyhehEa",
  baseUrl: "https://api.asgardeo.io/t/sns24",
  scope: [
    "openid",
    "profile",
    "app_roles",
    "groups",
    "email",
    "displayName",
    // "urn:interns:identitycheckserviceident:check_identity urn:interns:policecheckservicepolicev:police_ver_check urn:interns:addresscheckserviceaddres:check_address urn:interns:gramaapiservicerequests91:reqeust_reaction urn:interns:gramaapiservicerequests91:get_all_requests urn:interns:gramaapiservicerequests91:post_a_request",
  ],
  resourceServerURLs: [
    "https://02c6919b-de66-4977-ad24-2353ebcd8048-dev.e1-us-east-azure.choreoapis.dev/mhmp/new-user-api/newuser-2ab/v1.0",
    "https://02c6919b-de66-4977-ad24-2353ebcd8048-dev.e1-us-east-azure.choreoapis.dev/mhmp/new-user-api/newuser-2ab/v1.0/newUser",
    "http://new-user-api-608428337:9091/newUser",
    "https://02c6919b-de66-4977-ad24-2353ebcd8048-dev.e1-us-east-azure.choreoapis.dev/mhmp/add-new-user/newuser-2ab/v1.0",
    "https://02c6919b-de66-4977-ad24-2353ebcd8048-dev.e1-us-east-azure.choreoapis.dev/mhmp/add-new-user/newuser-2ab/v1",

    "https://02c6919b-de66-4977-ad24-2353ebcd8048-dev.e1-us-east-azure.choreoapis.dev/mhmp/add-new-user/newuser-2ab/v1",
    // https://02c6919b-de66-4977-ad24-2353ebcd8048-dev.e1-us-east-azure.choreoapis.dev/mhmp/new-user-api/newuser-2ab/v1.0
  ],
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <AuthProvider config={config}>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </AuthProvider>
  </BrowserRouter>
);