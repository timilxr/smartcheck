import React from "react";

const FindGiphyInput = ({handleInput, submit}) => {
    return(
        <main className="py-2 d-flex justify-content-center">
      <form className="form-inline">
        <label htmlFor="search">Search: </label>
        <input id="search" name="search" className="form-control mx-3" onChange={(e)=>handleInput(e)} type="search" />
        <button id="btnSearch" className="btn btn-primary" onClick={(e)=>submit(e)} type="button">Go</button>
      </form>
    </main>
    )
}

export default FindGiphyInput;