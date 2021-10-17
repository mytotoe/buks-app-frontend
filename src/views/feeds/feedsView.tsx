import { Fragment } from "react";
import Header from "./components/header";
import AddComment from "./components/addComment";
import Comment from "./components/comment";

const FeedsView = () => {
  return <Fragment>
    <Header />
    <AddComment />
    <Comment />
    <Comment />
    <Comment /> 
  </Fragment>
}

export default FeedsView;