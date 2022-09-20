import { useState, useEffect } from "react";
import React from 'react';
import { AppContext } from "./Context/Constant";
import { getData } from './Api/Axios';
import Router from './Routes'


const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getUserDetails()
    }, [])
    const getUserDetails = async () => {
        const api = await getData('');
        setData(api);
    }
    return (
        <AppContext.Provider value={{ data, setData }}>
          <Router/>
        </AppContext.Provider>
    )
}

export default App;