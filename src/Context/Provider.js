import React, {createContext, useReducer} from 'react';
import authInitialState from './InitialStates/authState';
import contactsInitialStates from './InitialStates/contactsInitialStates';
import auth from './Reducers/auth';
import contacts from './Reducers/contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsInitialStates,
  );

  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
