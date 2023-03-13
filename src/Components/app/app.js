//Component
import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form/post-add-form";

//css
import './app.css';
import styled from 'styled-components'

const AppBlock = styled.div`
        margin: 0 auto;
        max-width: 800px;
`
//Экспортируемый класс
export default class App extends Component {
    //Конструктор
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Иди учи реакт', important: false, id:1},
                {label: 'Это хорошо', important: false, id:2},
                {label: 'Мне нужен перерыв...', important: false, id:3}
                ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }
    //Удаление записей
    deleteItem(id) {
        //State нельзя изменять на прямую.
        this.setState(({data}) => {
            //Находим индех элемента который нужно удалить
            const index = data.findIndex(elem => elem.id === id)
            //Находим элементы до и после 
            const before = data.slice(0,index);
            const after = data.slice(index + 1);
            //Создаем новый массив из найденых элементов
            const newArray = [...before, ...after]; //Код можно сократить если подставить элементы до и после прямо в формулу.
            return {
                data: newArray
            }
        });
    }
    //Добавление новых записей
    addItem(body) {
        //Создаем навую запись
        const newItem = {
            label:body,
            important: false,
            id: this.maxId++
        }
        //State нельзя изменять на прямую.
        this.setState(({data}) => {
            const newArray = [...data, newItem];
            return {
                data: newArray
            }
        });
    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                    <div className="search-panel d-flex">
                        <SearchPanel/>
                        <PostStatusFilter/>
                    </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        );
    }
};
