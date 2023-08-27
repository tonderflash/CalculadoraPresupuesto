import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);

    return (
        <GlobalContext.Provider
            value={{
                data1,
                setData1,
                data2,
                setData2,
                data3,
                setData3,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalContextProvider };