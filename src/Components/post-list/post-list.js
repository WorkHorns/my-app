import React from "react";
import PostListItem from "../post-list-item";

const PostList = ({posts}) => {

    const elements = posts.map((item => {
        // const {id, ...itemProps} = item;
        return (
            <div key={item.id} className='list-group-item'>
                <PostListItem 
                    label={item.label}
                    important={item.important}/>
            </div>
        )
    }));

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;