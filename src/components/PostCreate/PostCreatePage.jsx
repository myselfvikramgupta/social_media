import React from 'react'
import PostEditor from './PostEditor'
const PostCreatePage = () => {
    return (
        <div className='container'>
            <div className="main">
                <div className='row'>
                    <div className='col-8 col-offset-2'>
                       <PostEditor />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostCreatePage