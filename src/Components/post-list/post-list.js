import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";

import './post-list.css';
//Переменная принимает параметры из app.js 
const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

    const elements = posts.map((item => {
        // const {id, ...itemProps} = item;
        return (
            <div key={item.id} className='list-group-item'>
                <PostListItem 
                    label={item.label}
                    important={item.important}
                    onDelete={()=> onDelete(item.id)}
                    onToggleImportant={()=> onToggleImportant(item.id)}
                    onToggleLike={() => onToggleLike(item.id)}/>
            </div>
        )
    }));

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;