import {useState, useEffect} from 'react';

import {isAuth} from '../../hoc/isAuth'
import PostCard from '../PostCard/PostCard';
import * as postService from '../../services/postService.js';

function CarPost(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAllPost()
            .then(result => {
                setPosts(result)
                //console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>Cars all post</h1>
            <div>
                {posts.length > 0
                    ? posts.map(x => <PostCard key={x._id} post={x}/>)
                    : <p>No post for the car</p>
                }
            </div>
        </div>
    )
}

export default isAuth(CarPost)

