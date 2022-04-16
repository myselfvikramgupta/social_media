import React from 'react'
import {LikeIcon,CommentIcon,SharedIcon,BookMarkIcon} from './svgIcons';
function PostCard({post,id}) {
  return (
    <div className="card">
    <div className="card_header ">
        <div className="d_flex_space_between">
            <div className="user_info ">
                <div className="user_profile_img ">
                    <img src="/images/profile.png" alt="" />
                </div>
                <span>{post.name} {id+1}</span>
            </div>
            <div className="post_menu">
                <img src="/images/menu.png" alt="" />
            </div>
        </div>
        <div className="card_title">
            <p>{post.title}</p>
        </div>
    </div>
    <div className="card_body">
        {post.story} ... <a href=""><em>Read More</em></a>
    </div>
    <div className="card_footer ">
    <div className="d_flex_space_between">
        <div className="post_like_section d_flex_space_between">
            <div className="post_like">
                <LikeIcon />
                <span>{post.like}</span>
            </div>
            <div className="post_like">
            <CommentIcon />
            <span>{post.comment}</span>
            </div>
            <div className="post_like">
            <SharedIcon />
            <span>{post.share}</span>
            </div>
        </div>
        <div className="post_like">
        <BookMarkIcon />
       <span>{post.saved}</span>
        </div>
        </div>
        <div className="post_comment_box">
            Write comment
        </div>
    </div>
</div>
  )
}

export default PostCard