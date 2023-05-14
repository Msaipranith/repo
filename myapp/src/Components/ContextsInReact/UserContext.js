import React from "react";

const Context=React.createContext('sunny')
const UserProvider=Context.Provider
const UserConsumer=Context.Consumer

export{UserProvider, UserConsumer}