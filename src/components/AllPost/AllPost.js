import {useState, useEffect} from 'react';

import PostCard from '../PostCard/PostCard';
import * as postService from '../../services/postService.js';

function CarPost(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAllPost()
            .then(result => {
                setPosts(result)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>Car all post</h1>
            <div>
                {posts.length > 0
                    ? posts.map(x => <PostCard key={x._id} post={x}/>)
                    : <p>No post for the car</p>
                }
            </div>
        </div>
    )
}

export default CarPost

