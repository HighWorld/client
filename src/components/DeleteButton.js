import { useMutation } from '@apollo/client';
import React, {useState} from 'react'
import { DELETE_POST_QUERY } from '../gql/DeletePostQuery';
import { FETCH_POSTS_QUERY } from '../gql/FetchPostsQuery';
import {useHistory} from 'react-router-dom';

export default function DeleteButton(props) {

    const {user, postId} = props;

    const history = useHistory();

    const [deletePost,{error}] = useMutation(DELETE_POST_QUERY, {
        variables: {postId},
        update(proxy, result){

            

            const prevData = proxy.readQuery({
                query: FETCH_POSTS_QUERY
            });

            // console.log(prevData);
            
            const newData = prevData.getPosts.filter((post)=> post._id !== postId);
            
            // console.log(newData);

            proxy.writeQuery({
                query: FETCH_POSTS_QUERY,
                data:{
                    getPosts: [...newData]
                }
            })
        }
    }) 

    

    const onClick = (event)=>{
        event.preventDefault();
        
        deletePost();        
        history.push('/');              
       
    }

    return (


        <button type="button" className="btn btn-outline-danger position-relative mx-3 " onClick={onClick}>

            <i className="bi bi-file-x-fill"></i>

        </button>

    )
}
