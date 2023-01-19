
import React from 'react';

const AppContext = React.createContext()


const AppProvider = ({ childern }) => {

    return (
        <AppContext.Provider value="Adnan">
            {childern}
        </AppContext.Provider>
    )


};
export { AppContext, AppProvider }
