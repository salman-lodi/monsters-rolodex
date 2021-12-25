import React from 'react';
import './search-box.css';

export const SearchBox = ({placeholder, handleChange})=>{

    return(
        <input type='search' className='search' placeholder={placeholder} onChange={handleChange} />     
    )

}