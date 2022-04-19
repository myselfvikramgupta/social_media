import React from 'react'
import { Link}  from "react-router-dom";
import data from '../../data/data'
import PostCard from './PostCard'

function Post() {
    return <>
        <Link to="/post/create">
        <div className="post_create d_flex_space_between">
            <div className="post_logo">
                <div className="user_profile_img post_logo_img ">
                    <img src="/images/profile.png" alt="" />
                </div>
            </div>
            <div className="post_text">
                Write Your Story.... 
            </div>
            <div className="post_btn">
                <button className="btn btn_primary btn-round">
                    Post
                </button>
            </div>
        </div>
        </Link>
        <div className="post_list">
            {
                data.map((post, i) => <PostCard post={post} key={i} id={i} />)
            }

        </div>
    </>
}

export default Post