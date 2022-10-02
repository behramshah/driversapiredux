import React from "react";
import { useNavigate } from "react-router-dom";
import { uid } from 'uid';
import { useSelector, useDispatch } from "react-redux";
import 'antd/dist/antd.css';
import { Table, Space, Button } from 'antd';

const List = () => {

    const data = useSelector((state) => state.list);
    const offset = useSelector((state) => state.offset);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const columns = [
        {
          title: ' Driver Name',
          dataIndex: 'givenName',
          key: 'givenName',
        },
        {
          title: ' Permanent Number',
          dataIndex: 'permanentNumber',
          key: 'permanentNumber',
        },
        {
          title: 'Nationality',
          dataIndex: 'nationality',
          key: 'nationality',
        },
        {
          title: 'DOB',
          key: 'dateOfBirth',
          dataIndex: 'dateOfBirth',
        },
        {
          title: 'Information',
          key: 'url',
          dataIndex: 'url',
          render: (text) => <a href={text}>{text}</a>,
        },
        {
          title: 'Add to favorites',
          key: 'favorites',
          dataIndex: 'driverId',
          render: (text, record) => <Button onClick={
            (e) => {addFavorite(record.givenName)}
          }>Favorite</Button>,
        },
      ];
    
    const addFavorite = (name) => {
        dispatch({type: "ADD_FAVORITE", payload: name})
    }

    const goNext = () => {
        if(offset > 849){ return}
        dispatch({type: "NEXT"})
    }
    
    const goPrev = (e) => {
      if(offset < 10){ return}
      dispatch({type: "PREV"})
    }

    const goFavorites = () => {
        navigate("/favorites")
    }

    

    

    return (
        <>
            <Table
             columns={columns} 
             dataSource={data} 
             pagination={false} 
             rowClassName={(record) => !record.permanentNumber ? 'noNumber': null}
             rowKey={() => uid()}
            />
            <Space direction='horizontal' align="end" size={'large'}>
                <Button onClick={goPrev} size="large" type="primary">Previous</Button>
                <Button onClick={goNext} size="large" type="primary">Next</Button>
                <Button onClick={goFavorites} size="large" type="primary">Favorites</Button>
            </Space>
        </>
    )
}

export default List;