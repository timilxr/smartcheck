import React from 'react';
import '../styles/pagination.scss'

const Pagination = () => {
    return(
        <>
        <div className="pagination d-flex justify-content-between align-items-center">
            <p>PREVIOUS</p>
            <p className='active'>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>...</p>
            <p>1539</p>
            <p>NEXT</p>
        </div>
        </>
    )
}

export default Pagination