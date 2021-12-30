import { useMutation } from '@apollo/client';
import React, {useState} from 'react';

import { CREATE_COMMENT_QUERY } from '../gql/CreateCommentQuery';



export default function CommentForm(props) {

    const {postId} = props;
    const [body, setBody] = useState("")

   

    const [commentPost, {error}] = useMutation(CREATE_COMMENT_QUERY,{
        variables: {body, postId},
        update(proxy, result){
            // console.log(result);
        }
    });

    // console.log(body);

    const onSubmit = (event)=>{
        event.preventDefault();

        // create comment mutation
        commentPost();

        setBody("");
        
    }

    return (
        <form className='container mt-5 border border-1 border-light p-2 rounded' onSubmit={onSubmit}>
            
            <div className="container">
                <p>
                    Post a comment
                </p>
            </div>
                
            <div className="d-flex  align-items-center justify-content-between">
                <div className=" flex-grow-1 w-100 m-1">
                    <div className="form-floating ">
                        <input type="text" className="form-control" id="comment" placeholder="Write your comments here..." value={body} onChange={(event)=>(setBody(event.target.value))}/>
                        <label htmlFor="comment">Comment</label>
                    </div>
                </div>
                <div className="text-center flex-shrink-1 m-1">
                    <button type="submit" className="btn btn-primary">Post</button>
                </div>
            </div>
            
            
        </form>
    )
}
