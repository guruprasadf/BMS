
import React from "react";
export default function MovieTitle (props){
    return(
        <div className="box" id={props.index} key={props.item.EventCode} onClick={()=>{props.handleClick(props.index)}}>
              <div
                style={{
                  backgroundImage: `url('https://in.bmscdn.com/events/moviecard/${
                    props.item.EventCode
                  }.jpg')`
                }}
                className="box-inner"
              >
                <span className="show-date">{props.item.ShowDate.split(",")[0]}</span>

                <i className="far fa-play-circle" />

                <span className="ratings">
                  <i className="fas fa-thumbs-up" /> {props.item.wtsPerc} %
                  <span className="votes"> {props.item.totalVotes} votes</span>
                </span>

                <span className="title">{props.item.EventTitle}</span>
              </div>
            </div>
    )
}