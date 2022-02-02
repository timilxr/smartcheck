import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import FindGiphyInput from '../components/findgIphyInput'
import GiphyInfo from '../components/giphyInfo';
import { GiphyDispatchContext, GiphyStateContext, getAllGiphy } from '../contexts/giphy.context';

const Giphy = () => {
    const [search, setSearch] = useState('');
    const [single, setSingle] = useState(null);
    const dispatch = useContext(GiphyDispatchContext);
    const { data } = useContext(GiphyStateContext);

    const handleInput = e => {
        setSearch(e.target.value);
    }

    const submit = e => {
        e.preventDefault();
        getAllGiphy(dispatch, search);
    }

    return (
        <>
            <div className="container">
                <FindGiphyInput handleInput={handleInput} submit={submit} />
                {
                    single ?
                        (
                            <div className="container border rounded">
                                <button className='btn btn-danger' onClick={() => setSingle(null)}>close</button>
                                <GiphyInfo data={single} full />
                            </div>
                        )
                        :
                        (
                            <div className="container-fluid py-4 bg-white d-flex flex-wrap justify-content-between border rounded">
                                {
                                    data && data.map((dat, index) => (
                                        <div key={index} className='w-25' onClick={() => setSingle(dat)}>
                                            <GiphyInfo data={dat} />
                                        </div>
                                    ))
                                }
                            </div>
                        )
                }
            </div>
        </>
    )
}

export default Giphy