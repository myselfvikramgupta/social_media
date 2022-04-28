import React from 'react'
import {TypeUnderlineIcon,TypeItalicIcon,TypeBoldIcon} from './../svgIcons'
const PostEditor = () => {
    return (
        <>
        <div className='card'>
            <div className="card_body ">
                <div className="editor_title">
                    <input type="text" placeholder="New story title here..." />
                </div>
                <div className="editor_icon d_flex_space_between">
                    <div className="editor_font_style d_flex_space_between">
                        <button className="editor_btn"><TypeBoldIcon/></button>
                        <button className="editor_btn"><TypeItalicIcon/></button>
                        <button className="editor_btn"><TypeUnderlineIcon/></button>
                    </div>
                    <div className="editor_emoji">
                        <button className="editor_btn"><span>🙂</span></button>
                    </div>
                   
                </div>
                <div className=" text_editor">
                      <textarea type="text"  placeholder="Write your story" ></textarea>
                </div>
            </div>

        </div>
        <div className="text_editor_btn">
            <button className="btn">Save Draf</button><button className="btn btn_primary">Post</button>
        </div>
        </>
    )
}

export default PostEditor