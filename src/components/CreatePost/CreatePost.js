import { useNavigate} from "react-router-dom";
import { useContext} from 'react';

import { isAuth } from "../../hoc/isAuth";
import { AuthContext } from "../../contexts/AuthContext";
import * as postService from '../../services/postService.js';

import './CreatePost.css'

function CreatePost() {
   const navigate = useNavigate();
   const { user } = useContext(AuthContext);
   
   const onPostCreate = (e) => {
       e.preventDefault();

       let formData = new FormData(e.currentTarget);

       let name = formData.get('name');

       postService.createPost({
           name
       }, user.accessToken)
       .then(response => {
            //console.log(response)
            navigate('/')
       })
   }
    return (
        <section className="create-post">
            <form id='create-post-form' className="create-post-form" method="POST" onSubmit={onPostCreate}>
                <div className='form-header-create-post'>
                    <h3 className='form-header-create-post-title'>Create post</h3>
                </div>
                <div className='form-element'>
                    <label className='form-element-label' htmlFor='name'>Post</label>
                    <textarea rows='4' cols='100' type='text' className='form-input' name='name' placeholder='some text' />
                </div>
                <input className='button-submit-create-post' type='submit' value='Create Post' />
            </form>
        </section>
    )
}

export default isAuth(CreatePost)