import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import List from './components/list';
import Favorites from './components/favorites';
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "./store/actions"

function App() {

  const offset = useSelector((state) => state.offset);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDrivers(offset))
    },[offset, dispatch])

  return (
    <Routes>
      <Route path='/' element={<List/>}/>
      <Route index path='favorites' element={<Favorites/>}/>
    </Routes>    
  );
}

export default App;
