import React, { useState, useEffect } from 'react';
import List from '../list/List';
import Put from '../put/Put';
import Loader from '../loader/Loader';
import './Content.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAll, showLoader } from '../../redux/actions';

const Content = (props) => {
    const reduxData = useSelector(state => state.getDataReducer.data);
    const loaderTrigger = useSelector(state => state.getDataReducer.showLoader);
    const dispatch = useDispatch();
    useEffect(() => {
        if(!reduxData.length) {
          dispatch(getAll())
        } 
    })

    const updateData = () => {
      dispatch(getAll());
    }

    return (
        <div className="content-container">
            {loaderTrigger && <Loader/>}
            <List data = {reduxData}
                    showLoader = {showLoader}
                    toggleUpdateData = {updateData}
                />
            <Put updateData = {updateData}
              showLoader = {showLoader}
            />
        </div>
    )
}

export default Content;