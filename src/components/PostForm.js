import { useMutation } from '@apollo/client';
import React,{useState} from 'react';
import { CREATE_POST_QUERY } from '../gql/CreatePostQuery';
import { FETCH_POSTS_QUERY } from '../gql/FetchPostsQuery';



export default function PostForm() {

    const [body, setBody] = useState("");

    const [createPost, {error}] = useMutation(CREATE_POST_QUERY, {
        variables: {body},
        update(proxy, result){
            
            // console.log(result);


            // accessing the cache and updating the cache 

            const data = proxy.readQuery({
                query: FETCH_POSTS_QUERY
            });

            

            proxy.writeQuery({
                query: FETCH_POSTS_QUERY,
                data:{
                    getPosts: [result.data.createPost, ...data.getPosts]
                }
            });

            setBody('');
        }
    });

    const addPost = (event)=>{
        event.preventDefault();
        createPost();
    }

    // console.log(body);

    return (
        <form className='p-2 text-center border border-light border-1 rounded-3' onSubmit={addPost}>

            <div className="form-floating m-2">

                <textarea className="form-control" id="body" placeholder='Enter your thoughts with respect..' value={body} onChange={(event)=>setBody(event.target.value)} name='body' style={{height:"165px"}}></textarea>

                <label htmlFor="body">Write you thoughts here......</label>
            </div>

            <button type="submit" className="btn btn-primary m-3">Submit</button>

        </form>
    )
}
