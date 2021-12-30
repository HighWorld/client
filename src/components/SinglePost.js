import { useQuery } from '@apollo/client';
import React, {useContext, useState} from 'react'
import { GET_POST_QUERY } from '../gql/GetPostQuery';
import moment from 'moment';

import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import DeleteButton from './DeleteButton';
import { AuthContext } from '../context/auth';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';


export default function SinglePost(props) {

    const postId = props.match.params.postId;

    const {loading, error, data} = useQuery(GET_POST_QUERY, {
        variables: {postId}
    });


    const {user} = useContext(AuthContext);

    

    let postComponent;

    if(data){

        const {_id, username, likes, likeCount, comments, commentCount, body, createdAt} = data.getPost;

        postComponent = (
            <div className="container p-5">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">

                        <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" className="img-fluid rounded-start p-5" alt="..." />

                        </div>

                        <div className="col-md-8">

                            <div className="card-body p-3">
                                
                                <h4 className="card-title">
                                    {username}
                                </h4>

                                <p className="card-text">
                                    <small className="text-muted">
                                        {moment(createdAt).fromNow()}
                                    </small>
                                </p>

                                <h5 className="card-text">
                                    {body}
                                </h5>

                                

                                <div className='d-flex flex-row w-full d-flex justify-content-end'>

                                    <LikeButton user={user} post={{_id, likeCount, likes}} />
                                    
                                
                                <CommentButton user={user} post={{_id, commentCount, comments}} />


                                

                                {user && user.username===username && <DeleteButton user={user} postId={_id}/>}

                                </div>



                    {user && <CommentForm postId={_id} /> }


                            </div>

                            {
                                comments.map(comment => (
                                    <CommentCard user={user} key={comment._id} comment={comment} postId={postId} />
                                    
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        postComponent = (
            <div className="container">
                <h1 className="text-center">
                    Loading Post...
                </h1>
            </div>
        )
    }

    return postComponent;
}
