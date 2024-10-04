import React, { createContext, useState, useContext } from 'react';

// ModeContext yarat
export const ModeContext = createContext();

// ModeProvider yarat
export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        // LocalStoragde yadda saxla
        const savedMode = localStorage.getItem('theme');
        return savedMode ? JSON.parse(savedMode) : 'dark';
    });

    const toggleMode = () => {
        setMode(prevMode => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', JSON.stringify(newMode));
            return newMode;
        });
    };

    return (
        <ModeContext.Provider value={[mode, toggleMode]}>
            {children}
        </ModeContext.Provider>
    );
};

export const useMode = () => useContext(ModeContext);
