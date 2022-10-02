import { axiosInstance } from "../utils/axios";

export const getDrivers = (offset) => {
    return async (dispatch) => {
        axiosInstance(`drivers.json?limit=10&offset=${offset ? offset : null}`)
            .then( response => {
                dispatch({ type: 'GET_DRIVERS', payload: response.data})
            })        
    }    
}