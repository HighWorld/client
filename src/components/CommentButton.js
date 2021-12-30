import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';

export default function CommentButton(props) {

    const {post:{_id, commentCount, comments}, user} = props;

    const [totComments, setTotComments] = useState(commentCount);

    const history = useHistory();

    const [commented, setCommented] = useState(false);

    const onClick = (event)=>{
        event.preventDefault();

        history.push(`/posts/${_id}`);
    }

    useEffect(() => {
        
        setTotComments(commentCount);

        if(user && comments.find((comment)=> comment.username === user.username)){
            setCommented(true);
        }
        else{
            setCommented(false);
        }

        return () => {
            
        }
    }, [])

    return (
        <button type="button" className={`btn btn-${commented?"success":"light"} position-relative mx-3`} onClick={onClick}>

            <i className={`bi bi-chat${commented?"":"-fill"}`}></i>

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {commentCount}
            </span>

        </button>
    )
}
