import React, {useContext, useState, useEffect} from 'react'

import {gql, useQuery} from '@apollo/client'; 

import Post from './Post';
import { FETCH_POSTS_QUERY } from '../gql/FetchPostsQuery';


import { AuthContext } from '../context/auth';
import PostForm from './PostForm';
import AlertUser from './AlertUser';


export default function Home() {

    const {user} = useContext(AuthContext);

    const {loading, error, data} = useQuery(FETCH_POSTS_QUERY);

    

    return (
        <>

        {user && <AlertUser user={user} />}

        <div className="container p-5">  
           

            <div className="row text-center p-1">
                <div className="col">
                    <h2>
                        Recent posts 
                    </h2>
                </div>
            </div>

           { user && (<PostForm />) }

           <hr />

            <div className="row row-cols-2 d-flex justify-content-center flex-row align-items-center p-1 mt-5">


                    {loading?(
                        <h1>Loading Posts</h1>
                    ):(

                        data.getPosts && data.getPosts.map(post => (
                            <div className="col p-3 width-auto" key={post._id}>
                               <Post post={post} />
                            </div>
                        ))
                    )}                
            </div>
        </div>
        </>
    )
}
