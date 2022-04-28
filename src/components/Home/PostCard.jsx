import React, {useState} from 'react'
import {LikeIcon,CommentIcon,SharedIcon,BookMarkIcon} from '../svgIcons';
function PostCard({post,id}) {
    const {name,title,story,like,comment,share,saved}={...post};
    const [totalLike,setTotalLike]=useState(like);
    const [totalComment,setTotalComment]=useState(comment);
    const [totalShare,setTotalShare]=useState(share);
    const [totalBookMark,setTotalBookMark]=useState(saved);
    const [isLiked,setIsLiked]=useState(false);
    const [isBookMark,setIsBookMark]=useState(false);
    const updateLike=()=>{
        if(!isLiked){
            setTotalLike(Number(totalLike)+1)
            setIsLiked(true);
        }else{
            setTotalLike(Number(totalLike)-1)
            setIsLiked(false);
        }
    }
   const updateBookMark=()=>{
    if(!isBookMark){
        setTotalBookMark(Number(totalBookMark)+1)
        setIsBookMark(true);
    }else{
        setTotalBookMark(Number(totalBookMark)-1)
        setIsBookMark(false);
    }
   }
   const updateComment=()=>{
     setTotalComment(Number(totalComment)+1)
   }
   const updateShare=()=>{
    setTotalShare(Number(totalShare)+1)
}
   const numberFormat=(num)=>{
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; 
    }else if(num < 900){
        return num; 
    }
   }

  return (
   
    <div className="card">
    <div className="card_header ">
        <div className="d_flex_space_between">
            <div className="user_info ">
                <div className="user_profile_img ">
                    <img src="/images/profile.png" alt="" />
                </div>
                <span>{name} {id+1}</span>
            </div>
            <div className="post_menu">
                <img src="/images/menu.png" alt="" />
            </div>
        </div>
        <div className="card_title">
            <p>{title}</p>
        </div>
    </div>
    <div className="card_body">
        {`${story.substring(0,200) }...`}  <a href="/"><em>Read More</em></a>
    </div>
    <div className="card_footer ">
    <div className="d_flex_space_between">
        <div className="post_like_section d_flex_space_between">
            <div className={`post_like ${isLiked ? 'active' : ''}`} >
                <button onClick={updateLike}><LikeIcon  /></button>
                <span>{numberFormat(totalLike)}</span>
            </div>
            <div className="post_like" >
            <button onClick={updateComment}><CommentIcon /></button>
            <span>{numberFormat(totalComment)}</span>
            </div>
            <div className="post_like" >
            <button onClick={updateShare}> <SharedIcon /></button>
            <span>{numberFormat(totalShare)}</span>
            </div>
        </div>
        <div className={`post_like ${isBookMark ? 'active' : ''}`} >
        <button onClick={updateBookMark}><BookMarkIcon /></button>
       <span>{numberFormat(totalBookMark)}</span>
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