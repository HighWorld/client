import { useMutation } from '@apollo/client';
import React, { useState, useEffect } from 'react'
import { FETCH_POSTS_QUERY } from '../gql/FetchPostsQuery';
import { LIKE_POST_QUERY } from '../gql/LikePostQuery';

export default function LikeButton(props) {

    const {post:{_id, likeCount, likes}, user} = props;

    const [likePost] = useMutation(LIKE_POST_QUERY,{
        variables: {postId: _id}
    })

    const [numLikes, setNumLikes] = useState(likeCount);

    const [liked, setLiked] = useState(false);


    const onClick = (event)=>{
        event.preventDefault();
        if(!liked){

            // create like mutation
            likePost();
            setNumLikes(numLikes+1);
            setLiked(true);
        }
        else{

            // delete like mutation
            likePost();
            setNumLikes(numLikes-1);
            setLiked(false);
        }
    }

    useEffect(() => {
        if(user && likes.find(like => like.username === user.username)){
            setLiked(true);
        }
        else{
            setLiked(false);
        }
        return () => {
            
        }
    }, [])

    return (

        <>
        <button type="button" className={`btn ${liked?"btn-primary":"btn-light"} position-relative mx-3`} onClick={onClick}>

            <i className={`bi bi-heart${liked?"":"-fill"}`}></i>

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {numLikes}
            </span>

        </button>
        </>
    )
}
