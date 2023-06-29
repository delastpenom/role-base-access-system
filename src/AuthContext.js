import React, { createContext, useState } from 'react';

// Create the authContext
const AuthContext = createContext();

// AuthContext provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to update the user state
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export the authContext and AuthProvider
export default AuthContext;