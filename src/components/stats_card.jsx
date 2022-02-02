import React from "react";
import '../styles/stats_card.scss'
const StatsCard = ({stat}) => {
    return(
        <>
        <div className="cardi">
            <p className="topic">{stat.topic}</p>
            <div className="card-body mt-2 px-md-3">
                {stat.data.length > 1 ? 
                stat.data.map((currentData, index) =>(<div key={index} className="info">
                    <div className={currentData.text}>
                        {currentData.figure}
                    </div>
                    <p>{currentData.text}</p>
                    </div>))
            : 
            (<>
                <div className="one">
                    <h2>
                        {stat.data[0].figure}
                    </h2>
                    <p>{stat.data[0].text}</p>
                </div>
            </>)}
            </div>
        </div>
        </>
    )
}

export default StatsCard;