import React from "react";

export const Results = props => (
  <div className="card" key={props._id}>
    {/* {console.log({key})} */}
    <div className="card-body" >{props.headline}
      <button type="submit" className="btn btn-success float-right" id="save-art">Save</button>
    </div>
  </div>
)

export default Results;
