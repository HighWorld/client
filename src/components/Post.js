import React, { useContext } from 'react';

import moment from 'moment';

import {Link} from 'react-router-dom';





import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import DeleteButton from './DeleteButton';




export default function Post(props) {

    const {user} = useContext(AuthContext);



    const {body, createdAt, username, _id, likeCount, commentCount, likes, comments} = props.post;

    
    const popUpContent = "hello";

    return (
        <Link to={`/posts/${_id}`} className='text-dark text-decoration-none '>   

            <div className="card p-3 shadow" style={{maxWidth: "540px"}}>

                <div className="row g-0">

                    <div className="col-md-4">
                        <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" className="img-fluid rounded-start" alt="..." />
                    </div>

                    <div className="col-md-8">  

                        <div className="card-body">

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

                            

                            <div className='d-flex flex-row w-full d-flex justify-content-end mt-4'>

                                <LikeButton user={user} post={{_id, likeCount, likes}} />
                                
                            
                               <CommentButton user={user} post={{_id, commentCount, comments}} />


                            {user && user.username===username && <DeleteButton user={user} postId={_id}/>}
                                


                            </div>



                            

                        </div>

                    </div>

                </div>

            </div>

        </Link>
    )
}


