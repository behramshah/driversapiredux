import React from "react";
import { useNavigate } from "react-router-dom";
import { uid } from 'uid';
import { useSelector, useDispatch } from "react-redux";
import 'antd/dist/antd.css';
import { Table, Space, Button } from 'antd';

const Favorites = () => {


    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data =  Array.from(new Set(useSelector(state => state.favorite)));

    const columns = [
        {
          title: ' Driver Name',
          key: 'name',
          render: (text) => <span>{text}</span>
        },
        {
          title: 'remove from favorites',
          key: 'favorites',
          dataIndex: 'driverId',
          render: (text, record) => <Button onClick={
            (e) => {removeFavorite(record)}
          }>Delete</Button>,
        },
      ];
    
    const removeFavorite = (name) => {
        dispatch({type: 'REMOVE_FAVORITE', payload: name})
    }

    const goFavorites = () => {
        navigate("/")
    }

    

    

    return (
        <>
            <Table
             columns={columns} 
             dataSource={data} 
             pagination={true} 
             rowKey={() => uid()}
            />
            <Space direction='horizontal' align="end" size={'large'}>
                <Button onClick={goFavorites} size="large" type="primary">Favorites</Button>
            </Space>
        </>
    )
}

export default Favorites;