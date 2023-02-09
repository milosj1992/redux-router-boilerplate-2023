import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchItems} from '../redux/actions';
import {Link} from "react-router-dom";
import {CircularProgress} from "@mui/material";

// import RentBar from "./RentBar";


const initialRent = {
    id: "id",
    year: "year",
    effectiveRent: "effective rent",
    startingRent: "starting rent"
};

const RentList = () => {
    const dispatch = useDispatch();
    const rent = useSelector(state => state.rents);
    const isLoading = useSelector(state => state.rents.isLoading);
    const hasError = useSelector(state => state.rents.hasError);

    useEffect(() => {
        dispatch(fetchItems());

    }, [dispatch]);


    return (
        <div>
            {hasError ? (<div>Error</div>) : isLoading ?
                <CircularProgress/> : rent && rent.items.data && rent.items.data.map((item) => {
                return <div key={item.id}>{item.id}</div>
            })}
            {hasError}
        </div>
    );
};

export default RentList;
