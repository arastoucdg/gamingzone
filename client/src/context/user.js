// import React from "react";

// export const UserContext = createContext({
//   username: "",
//   loggedIn: true,
//   handleLogin: () => {},
// });

// export default function User({ children }) {
//     const loginSession = JSON.parse(sessionStorage.getItem("login")) || {
//         username: "",
//         loggedIn: false,
//     };

//     const [username, setUsername] = useState(loginSession["username"]);
//     const [loggedIn, setLoggedIn] = useState(loginSession["loggedIn"]);

//     const handleLogin = (_username) => {
//         if (_username) {
//             setUsername(_username);
//             setLoggedIn(true);
//         } else {
//             setUsername("");
//             setLoggedIn(false);
//         }
//     };

//   return (
//       <UserContext.Provider
//       value={{ username, loggedIn, handleLogin }}
//     ></UserContext.Provider>
//   );
// }
// useEffect(() => {
//   sessionStorage.setItem(
//     "login",
//     JSON.stringify({ username: username, loggedIn: loggedIn })
//   );
// }, [username, loggedIn]);
