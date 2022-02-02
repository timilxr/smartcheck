import React from "react";

const GiphyInfo = ({ data, full }) => {
    return (
        <figure className={`container border rounded ${full ? 'py-4' : 'py-2'}`}>
            <img src={data.images.downsized.url} alt={data.title} className="img-fluid" />
            <figcaption>
                {!full &&
                    <div className="">
                        <p>Title: </p><p className="mt-0">{data.title}</p>
                    </div>}
                {full &&
                    <>
                        <div className="d-flex justify-content-between">
                            <h3>Title: </h3><h3>{data.title}</h3>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h3>Type: </h3><h3>{data.type}</h3>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h3>Username: </h3><h3>{data.username}</h3>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h3>Author name: </h3><h3>{data.user.display_name}</h3>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h3>Link: </h3> <a href={data.url} target="_blank" style={{fontSize: '24px'}}>view on page</a>
                        </div>
                    </>}
            </figcaption>
        </figure>
    )
}

export default GiphyInfo;