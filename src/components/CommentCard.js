import React from 'react';
import moment from 'moment';
import DeleteCommentButton from './DeleteCommentButton';

export default function CommentCard(props) {
    const {user, comment, postId} = props;

    return (
        <>
        <div className="card border-secondary ms-2 mt-3 me-5" >
            <div className="card-header py-2 px-4">
                {comment.username}

                {user && user.username === comment.username && (
                    <DeleteCommentButton user={user} commentId={comment._id} postId={postId} />
                )}

            </div>
            <div className="card-body text-secondary">
                <p className="card-text">{moment(comment.createdAt).fromNow()}</p>
                <h6 className="card-text">{comment.body}</h6>
            </div>
        </div>
        <hr  className='me-5 ms-2 mb-3'/>
        </>
    )
}
