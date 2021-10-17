import { Fragment } from "react";
import "./style.scss";

const AddComment = () => {
  return <Fragment>
    <textarea 
      placeholder="This is an awesome comment box" 
      rows={40}
      name="comment[text]" 
      id="comment_text" 
      cols={40} 
      className="ui-autocomplete-input" 
      autoComplete="off" 
      aria-autocomplete="list" 
      aria-haspopup="true"
    />
    <button className="pushable">
      <span className="front">
        Post
      </span>
    </button>
  </Fragment>
}

export default AddComment;