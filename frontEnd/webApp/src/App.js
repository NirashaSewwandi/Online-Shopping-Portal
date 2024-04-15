// import { useState, useEffect, useMemo, useContext } from "react";

// // react-router components
// import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

// // @mui material components
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Icon from "@mui/material/Icon";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";

// // Material Dashboard 2 React example components
// import Sidenav from "examples/Sidenav";
// import Configurator from "examples/Configurator";

// // Material Dashboard 2 React themes
// import theme from "assets/theme";
// import themeRTL from "assets/theme/theme-rtl";

// // Material Dashboard 2 React Dark Mode themes
// import themeDark from "assets/theme-dark";
// import themeDarkRTL from "assets/theme-dark/theme-rtl";

// // RTL plugins
// import rtlPlugin from "stylis-plugin-rtl";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";

// // Material Dashboard 2 React routes
// import routes from "routes";

// // Material Dashboard 2 React contexts
// import { setMiniSidenav, setOpenConfigurator } from "context";

// // Images
// import brandWhite from "assets/images/logo-ct.png";
// import brandDark from "assets/images/logo-ct-dark.png";

// import { setupAxiosInterceptors } from "./services/interceptor";
// import ProtectedRoute from "examples/ProtectedRoute";
// import ForgotPassword from "auth/forgot-password";
// import ResetPassword from "auth/reset-password";
// import Login from "./auth/login/index.js";
// import Register from "auth/register";
// import { useAuthContext } from "@asgardeo/auth-react";
// // import { AuthContext } from "context";
// import UserProfile from "layouts/user-profile";
// import UserManagement from "layouts/user-management";
// import { Helmet } from "react-helmet";
// import UserContext from "./UserContext";

// export default function App() {
//   const {state} = useAuthContext();
  

//   // const [controller, dispatch] = useMaterialUIController();
//   // const {
//   //   miniSidenav,
//   //   direction,
//   //   layout,
//   //   openConfigurator,
//   //   sidenavColor,
//   //   transparentSidenav,
//   //   whiteSidenav,
//   //   darkMode,
//   // } = controller;
//   const [onMouseEnter, setOnMouseEnter] = useState(false);
//   const [rtlCache, setRtlCache] = useState(null);
//   const { pathname } = useLocation();

//   const [isDemo, setIsDemo] = useState(false);

//   useEffect(() => {
//     console.log(state.isAuthenticated)
//     setIsDemo(process.env.REACT_APP_IS_DEMO === "true");
//   }, []);

//   // Cache for the rtl
//   useMemo(() => {
//     const cacheRtl = createCache({
//       key: "rtl",
//       stylisPlugins: [rtlPlugin],
//     });

//     setRtlCache(cacheRtl);
//   }, []);

//   // Open sidenav when mouse enter on mini sidenav
//   const handleOnMouseEnter = () => {
//     if (miniSidenav && !onMouseEnter) {
//       setMiniSidenav(dispatch, false);
//       setOnMouseEnter(true);
//     }
//   };

//   // Close sidenav when mouse leave mini sidenav
//   const handleOnMouseLeave = () => {
//     if (onMouseEnter) {
//       setMiniSidenav(dispatch, true);
//       setOnMouseEnter(false);
//     }
//   };

//   // Change the openConfigurator state
//   const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

//   // if the token expired or other errors it logs out and goes to the login page
//   const navigate = useNavigate();
//   setupAxiosInterceptors(() => {
    
//     navigate("/auth/login");
//   });

//   // Setting the dir attribute for the body element
//   // useEffect(() => {
//   //   document.body.setAttribute("dir", direction);
//   // }, [direction]);
//   const { direction } = useContext(UserContext);

//   const { darkMode } = useContext(UserContext);

//   const { layout } = useContext(UserContext);
//   const { sidenavColor } = useContext(UserContext);
//   const { transparentSidenav } = useContext(UserContext);
//   const { whiteSidenav } = useContext(UserContext);


//   // Setting page scroll to 0 when changing the route
//   useEffect(() => {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//   }, [pathname]);

//   const getRoutes = (allRoutes) =>
//     allRoutes.map((route) => {
//       if (route.collapse) {
//         return getRoutes(route.collapse);
//       }

//       if (route.route && route.type !== "auth") {
//         return (
//           <Route
//             exact
//             path={route.route}
//             element={
//               <ProtectedRoute isAuthenticated={state.isAuthenticated}>
//                 {route.component}
//               </ProtectedRoute>
//             }
//             key={route.key}
//           />
//         );
//       }
//       return null;
//     });

//   const configsButton = (
//     <MDBox
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       width="3.25rem"
//       height="3.25rem"
//       bgColor="white"
//       shadow="sm"
//       borderRadius="50%"
//       position="fixed"
//       right="2rem"
//       bottom="2rem"
//       zIndex={99}
//       color="dark"
//       sx={{ cursor: "pointer" }}
//       onClick={handleConfiguratorOpen}
//     >
//       <Icon fontSize="small" color="inherit">
//         settings
//       </Icon>
//     </MDBox>
//   );

//   return (
//     <>
//       {isDemo && (
//         <Helmet>
//           <meta
//             name="keywords"
//             content="creative tim, updivision, material, node.js json:api, html dashboard, node.js, react, api admin, react node.js, html css dashboard node.js, material dashboard node.js, node.js api, react material dashboard, material admin, react dashboard, react admin, web dashboard, bootstrap 5 dashboard node.js, bootstrap 5, css3 dashboard, bootstrap 5 admin node.js, material dashboard bootstrap 5 node.js, frontend, api dashboard, responsive bootstrap 5 dashboard, api, material dashboard, material node.js bootstrap 5 dashboard, json:api"
//           />
//           <meta
//             name="description"
//             content="A free full stack app powered by MUI component library, React and Node.js API, featuring dozens of handcrafted UI elements"
//           />
//           <meta
//             itemProp="name"
//             content="Material Dashboard 2 React Node.js by Creative Tim & UPDIVISION"
//           />
//           <meta
//             itemProp="description"
//             content="A free full stack app powered by MUI component library, React and Node.js API, featuring dozens of handcrafted UI elements"
//           />
//           <meta
//             itemProp="image"
//             content="https://s3.amazonaws.com/creativetim_bucket/products/157/original/react-material-dashboard-nodejs.jpg?1664786816"
//           />
//           <meta name="twitter:card" content="product" />
//           <meta name="twitter:site" content="@creativetim" />
//           <meta
//             name="twitter:title"
//             content="Material Dashboard 2 React Node.js by Creative Tim & UPDIVISION"
//           />
//           <meta
//             name="twitter:description"
//             content="A free full stack app powered by MUI component library, React and Node.js API, featuring dozens of handcrafted UI elements"
//           />
//           <meta name="twitter:creator" content="@creativetim" />
//           <meta
//             name="twitter:image"
//             content="https://s3.amazonaws.com/creativetim_bucket/products/157/original/react-material-dashboard-nodejs.jpg?1664786816"
//           />
//           <meta property="fb:app_id" content="655968634437471" />
//           <meta
//             property="og:title"
//             content="Material Dashboard 2 React Node.js by Creative Tim & UPDIVISION"
//           />
//           <meta property="og:type" content="article" />
//           <meta
//             property="og:url"
//             content="https://www.creative-tim.com/live/react-material-dashboard-node.js/"
//           />
//           <meta
//             property="og:image"
//             content="https://s3.amazonaws.com/creativetim_bucket/products/157/original/react-material-dashboard-nodejs.jpg?1664786816"
//           />
//           <meta
//             property="og:description"
//             content="A free full stack app powered by MUI component library, React and Node.js API, featuring dozens of handcrafted UI elements"
//           />
//           <meta property="og:site_name" content="Creative Tim" />
//         </Helmet>
//       )}
//       {direction === "rtl" ? (
//         <CacheProvider value={rtlCache}>
//           <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
//             <CssBaseline />
//             {layout === "dashboard" && (
//               <>
//                 <Sidenav
//                   color={sidenavColor}
//                   brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
//                   brandName="Material Dashboard 2"
//                   routes={routes}
//                   onMouseEnter={handleOnMouseEnter}
//                   onMouseLeave={handleOnMouseLeave}
//                 />
//                 <Configurator />
//                 {configsButton}
//               </>
//             )}
//             {layout === "vr" && <Configurator />}
//             <Routes>
//               <Route index path="login" element={<Navigate to="/auth/login" />} />
//               <Route path="register" element={<Navigate to="/auth/register" />} />
//               <Route path="forgot-password" element={<Navigate to="/auth/forgot-password" />} />
//               {getRoutes(routes)}
//               <Route path="*" element={<Navigate to="/dashboard" />} />
//             </Routes>
//           </ThemeProvider>
//         </CacheProvider>
//       ) : (
//         <ThemeProvider theme={darkMode ? themeDark : theme}>
//           <CssBaseline />
//           {layout === "dashboard" && (
//             <>
//               <Sidenav
//                 color={sidenavColor}
//                 brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
//                 brandName="Material Dashboard 2"
//                 routes={routes}
//                 onMouseEnter={handleOnMouseEnter}
//                 onMouseLeave={handleOnMouseLeave}
//               />
//               <Configurator />
//               {configsButton}
//             </>
//           )}
//           {layout === "vr" && <Configurator />}
//           <Routes>
//             <Route path="/auth/login" element={<Login />} />
//             <Route path="/auth/register" element={<Register />} />
//             <Route path="/auth/forgot-password" element={<ForgotPassword />} />
//             <Route path="/auth/reset-password" element={<ResetPassword />} />
//             <Route
//               exact
//               path="user-profile"
//               element={
//                 <ProtectedRoute isAuthenticated={state.isAuthenticated}>
//                   <UserProfile />
//                 </ProtectedRoute>
//               }
//               key="user-profile"
//             />
//             <Route
//               exact
//               path="user-management"
//               element={
//                 <ProtectedRoute isAuthenticated={state.isAuthenticated}>
//                   <UserManagement />
//                 </ProtectedRoute>
//               }
//               key="user-management"
//             />
//             {getRoutes(routes)}
//             <Route path="*" element={<Navigate to="/dashboard" />} />
//           </Routes>
//         </ThemeProvider>
//       )}
//     </>
//   );
// }





/////////////////////////////////////////////////////
import React from "react";
// import "./App.css";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from "./auth/login";
// import Request from "./Components/Request/Request";
import NotFound from "./components/NotFound";
// import Contact from "./Components/Contact/Contact";
// import Status from "./Components/User/Status";

// import UserDashBoard from "./Components/User/UserDashboard";
// import ViewRequest from "./Components/VerificationRequests/VerificationRequests";
import { useAuthContext } from "@asgardeo/auth-react";
import { useContext, useEffect, useState } from "react";
import { userRoles } from "./config";
// import Restrict from "./Components/Restrict/Restrict";
import UserContext from "./UserContext";
import Dashboard from "layouts/dashboard";
import ProtectedRoute from "./ProtectedRoute";
// import GramaDashboard from "./Components/GSDashboard/GramaSevakaDashboard";
// import FinalReport from "./Components/FinalReport/FinalReport";

function App() {
  const { state } = useAuthContext();
  const authContext = useAuthContext();

  const state1 = useAuthContext();

  const navigate = useNavigate();
  // const [role, setRole] = useState("");
  const { role, setRole } = useContext(UserContext);
  const { getDecodedIDToken } = useAuthContext();

  const getBasicInfo = async () => {
    try {
      const response = await getDecodedIDToken();
      console.log(response+"---");
      const { application_roles } = response;
      if (Array.isArray(application_roles)) {
        setRole(application_roles[0]);
      } else {
        setRole(application_roles);
      }
      // setRole("Customer");
      console.log(role);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    state?.isAuthenticated && getBasicInfo();
    console.log(state);
  });

  useEffect(() => {
    if (role !== "") {
      role === userRoles.USER
        ? navigate("/user/me")
        : role === userRoles.GRAMA
        ? navigate("/gs/me")
        : navigate("/");
    } else {
      console.log("role is empty");
    }
  }, [role]);
  return (
    <div>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="/error" element={<NotFound />} /> 
        <Route
          path="/user/me"
          element={
            <ProtectedRoute redirectPath="/" authRole={userRoles.USER}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/*
        <Route
          path="/user/report/download"
          element={
            <ProtectedRoute redirectPath="/" authRole={userRoles.USER}>
              <FinalReport />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute redirectPath="/" authRole={userRoles.USER}>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/me/request-cert"
          element={
            <ProtectedRoute redirectPath="/" authRole={userRoles.USER}>
              <Request />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/me/status"
          element={
            <ProtectedRoute redirectPath="/" authRole={userRoles.USER}>
              <Status />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gs/me/requests"
          element={
            <ProtectedRoute redirectPath="/" authRole={userRoles.GRAMA}>
              <ViewRequest />
            </ProtectedRoute>
          }
        />
        <Route path="/restricted" element={<Restrict />} />

        <Route
          path="/user/me/contact"
          element={
            <ProtectedRoute redirectPath="/" authRole={userRoles.USER}>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/me/status"
          element={
            <ProtectedRoute redirectPath="/" authRole={userRoles.USER}>
              <Status />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gs/me"
          element={
            <ProtectedRoute redirectPath="/" authRole={userRoles.GRAMA}>
              <GramaDashboard />
            </ProtectedRoute>
          } */}
        {/* /> */}
      </Routes>
    </div>
  );
}

export default App;
