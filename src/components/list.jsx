import React, { useEffect } from "react";
import { axiosInstance } from '../utils/axios';


const List = () => {

    let table;

    useEffect(()=>{
        axiosInstance.get()
        .then(
            response => console.log(response.data)
        
        )
    })

    return (
        <h1>drivers</h1>
    )
}

export default List;