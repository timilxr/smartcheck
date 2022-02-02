import React from 'react';
import '../styles/table.scss';
import triangle from '../assets/triangle.svg';
import checkMark from '../assets/correct.png';
import xls from '../assets/xls.svg';
import pdf from '../assets/PDF.svg';

const Table = ({ data, useCase }) => {
    const headers = Object.keys(data[0]);
    const color = (index) => {
        if(headers[0] === 'application' && index === 5){
            return 'bg-danger'
        }
        return 'bg-success'
    }
    return (
        <>
            <div className="table-responsive">
                <div className="summary d-flex justify-content-end alin-items-center py-2 w-100 ml-auto">
                    <img src={pdf} alt="pdf" width="18px" className="img-fluid mr-1 ml-auto" />
                    <img src={xls} alt="xls" width="18px" className="img-fluid mr-1" />
                    <p className='entries my-0 ml-2 mx-sm-3 align-self-center'>Showing 10 of 5000 Entries</p>
                </div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            {
                                headers.map((heading, index) => (<th key={index} scope='col'>{heading.replace(/_/g, ' ')}</th>))
                            }
                            <th scope="col">Action</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((info, index)=>(
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td className='px-0'><div className={`sign ${color(index+1)} rounded-circle`}></div></td>
                                {
                                    headers.map(heading=>{
                                        if(heading.toLocaleLowerCase() === 'status'){
                                            return <td key={heading}>{info[heading].toLowerCase() === 'critical' ? <img className='img-fluid' src={triangle} alt={info[heading]} />: <img className='img-fluid' width="20px" src={checkMark} alt={info[heading]} />} {info[heading]}</td>
                                        }
                                            return <td key={heading} className={heading.toLocaleLowerCase().split('_')[0]}>{info[heading]}</td>
                                    })
                                    }
                                    <td className=''><button className='btn btn-primary btn-sm'>{useCase === 'home' ? 'View result' : 'Edit'}</button></td>
                                    <td className='more'><div><p className='my-0'>.</p><p className='my-0'>.</p><p className='my-0'>.</p></div></td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;