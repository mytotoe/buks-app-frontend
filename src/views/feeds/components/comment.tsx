import { Fragment } from "react";
import "./style.scss";

const Comment = () => {
  return <Fragment>
    <div className="card">
      <div className="container">
        <h4 className="title"><b>Unable to run react native</b><br/></h4>
        <small>Ojo Babatunde @ 12/02/2020 11:40pm</small>
        <div className="description">I am having difficulty running react native on my macbook m1. I got this error. blah blah blah</div> 
        <div className="status">
          <div className="icon">
            <span className="count">40</span>
            <i className="fas fa-thumbs-up"></i>
          </div>
          <div className="icon">
            <span className="count">10</span>
            <i className="fas fa-thumbs-down"></i>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}

export default Comment;