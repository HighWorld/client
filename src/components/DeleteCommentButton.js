import { useMutation } from '@apollo/client';
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import '../App.css';
import { DELETE_COMMENT_QUERY } from '../gql/DeleteCommentQuery';

export default function DeleteCommentButton(props) {

    const {user, commentId, postId} = props;

    const history = useHistory();

    const [deleteComment,{error}] = useMutation(DELETE_COMMENT_QUERY, {
        variables: {postId, commentId},
        update(proxy, result){  
            
        }
    }) 

    

    const onClick = (event)=>{
        event.preventDefault();
        
        deleteComment();        
        history.push('/');              
       
    }

    return (


        <button type="button" className="btn btn-outline-danger right-align " onClick={onClick} style={{marginTop: "-7px"}}>

            <i className="bi bi-file-x-fill"></i>

        </button>

    )
}
