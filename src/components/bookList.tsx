import React from 'react';
import {useSelector} from "react-redux";

const BookList: React.FC = () => {
    const state = useSelector(state => state)
    console.log(state)
    return (
        <div>
            
        </div>
    );
};

export default BookList;