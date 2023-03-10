//Component
import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form/post-add-form";

//css
import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-list-item/post-list-item.css';
import '../post-list/post-list.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';


const App = () => {
    const data = [
        {label: 'Иди учи реакт', important: false, id:'1'},
        {label: 'Это хорошо', important: true, id:'2'},
        {label: 'Мне нужен перерыв...', important: true, id:'3'}
        ];


    return (
        <div className="app">
            <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    );
};

export default App;