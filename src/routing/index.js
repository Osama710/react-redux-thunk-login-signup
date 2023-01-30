import React, { Fragment } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import { routes } from "./routes";

// function Auth() {
//     return (
//         <Fragment>
//             <Router>
//                 <Routes>
//                     <Route exact path="/login" element={<Login />} />
//                     <Route exact path="/signup" element={<Signup />} />
//                     <Route exact path="/" element={<App />} />
//                     <Route
//                         path="*"
//                         element={<Navigate to="/login" from="/*" component={Login} replace />}
//                     />
//                 </Routes>
//             </Router>
//         </Fragment>
//     );
// }

// function Root(props) {
//     return (
//         <Router>
//             <Routes>
//                 {routes.map((route, index) => (
//                     <Route
//                         key={index}
//                         exact={route.exact}
//                         path={route.path}
//                         element={route.component}
//                     />
//                 ))}
//                 <Route
//                     path="/"
//                     element={<Navigate to="/home" from="/" component={Home} />}
//                 />
//                 <Route
//                     path="/login"
//                     element={<Navigate to="/home" from="/login" component={Home} />}
//                 />
//                 <Route
//                     path="/signup"
//                     element={<Navigate to="/home" from="/signup" component={Home} />}
//                 />
//                 <Route
//                     path="*"
//                     render={() => (
//                         <div className="w-100 h-100">
//                             <h1>404 - Page not found</h1>
//                         </div>
//                     )}
//                 />
//             </Routes>
//         </Router>
//     )
// }

function Auth() {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/" element={<App />} />
                <Route
                    path="*"
                    element={<Navigate to="/login" from="/*" component={Login} replace />}
                />
            </Routes>
        </Router>
    );
}


function Root(props) {
    const redirectRoutes = [
        { from: '/', to: '/home' },
        { from: '/login', to: '/home' },
        { from: '/signup', to: '/home' },
    ];

    return (
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        element={route.component}
                    />
                ))}
                {redirectRoutes.map(({ from, to }) => (
                    <Route
                        path={from}
                        render={() => <Navigate to={to} component={Home} />}
                    />
                ))}
                <Route
                    path="*"
                    render={() => (
                        <div className="w-100 h-100">
                            <h1>404 - Page not found</h1>
                        </div>
                    )}
                />
            </Routes>
        </Router>
    );
}

export { Auth, Root };
