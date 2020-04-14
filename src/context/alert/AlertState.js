import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import { SET_ALERT, REMOVE_ALERT } from '../types';
import AlertReducer from './alertReducer';

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const alertUser = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg: msg,
        type: type,
      },
    });
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      });
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        alertUser,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
