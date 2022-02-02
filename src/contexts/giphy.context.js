import React, { createContext, useReducer } from 'react';
import axios from 'axios';

// import useLocalStorage from '../common/useLocalStorage';

const initialState = {
    data: null,
    loading: false,
    loaded: false,
    errors: {},
    message: null,
    color: null
}

export const GiphyStateContext = createContext();
export const GiphyDispatchContext = createContext();

const reducers = (state, { type, payload }) => {
    switch (type) {
        case 'REQUEST_GIPHY':
            return {
                ...state,
                loading: true,
                loaded: false,
                data: null,
                errors: {},
                message: null,
                color: null,
            };
        case 'GET_ALL_GIPHY_SUCCESSFULL':
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload.data,
                errors: {},
                message: null,
                color: 'success',
            };
        case 'GET_GIPPHY_SUCCESSFULL':
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload.data,
                message: 'Account created successfully, Kindly alert the admin to activate your account',
                color: 'success',
            };
            case 'GET_GIPHY_UNSUCCESSFULL':
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    data: null,
                    errors: payload.errors,
                    message: payload.message,
                    color: 'danger',
                };

        default:
            throw new Error('Unknown action type');
    }
}

const GiphyProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, initialState);
    return (
        <GiphyDispatchContext.Provider value={dispatch}>
            <GiphyStateContext.Provider value={state}>
                {children}
            </GiphyStateContext.Provider>
        </GiphyDispatchContext.Provider>
    )
}
const APIKEY = "deokzgUjxm6QHQdp3H3aca1LSZcCpucc";

export const getAllGiphy = async (dispatch, data) => {
    // console.log(token);
    dispatch({ type: 'REQUEST_GIPHY' });
    
    await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&offset=0&rating=Y&limit=25&lang=en&q=${data}`)
        .then(res => {
                console.log(res.data);
                return dispatch({
                    type: 'GET_ALL_GIPHY_SUCCESSFULL',
                    payload: {
                        data: res.data.data
                    }
                })
        })
        .catch(err => {
            console.log(err);
            return dispatch({
                type: 'GET_GIPHY_UNSUCCESSFULL',
                payload: {
                    message: err.message
                }
            });
        });
}


export default GiphyProvider;