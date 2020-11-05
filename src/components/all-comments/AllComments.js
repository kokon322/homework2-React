import React, {Component} from 'react';
import {CommentsService} from "../../services/CommentsService";
import Comment from "../comment/Comment";

class AllComments extends Component {
    state = {comments: []};
    _commentService = new CommentsService();

    componentDidMount() {
        this._commentService.getAllComments().then(value => {
            this.setState({comments: value});
        })
    };

    render() {
        let {comments} = this.state;
        return (
            <div>
                {
                    comments.map((value,index) => <Comment comments={value} key={index}/>)
                }
            </div>
        );
    }
}

export default AllComments;