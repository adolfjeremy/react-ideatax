import { useState, useMemo, createContext } from "react";

export const AlertContext = createContext();

const AlertContextProvider = ({ children }) => {
    const [alertState, setAlertState] = useState(false);

    const toggleAlert = (state) => {
        setAlertState(state);
    };
    const AlertContextValue = useMemo(() => {
        return { alertState, toggleAlert };
    }, [alertState]);

    return (
        <AlertContext.Provider value={AlertContextValue}>
            {children}
        </AlertContext.Provider>
    );
};
export default AlertContextProvider;
