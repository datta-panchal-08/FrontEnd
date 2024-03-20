import React, { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
    const[users,setUsers] = useState([
       {id:0,username:"John",city:"USA"},
       {id:1,username:"Krishna",city:"IND"},
       {id:2,username:"Julie",city:"COLAMBIA"}
    ]);
  return <UserContext.Provider value={{users,setUsers}}>{props.children}</UserContext.Provider>;
};

export default Context;
