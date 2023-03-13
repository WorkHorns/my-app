import React, { Component } from "react";

import './post-add-form.css';

//Класс формы для добавления постов
export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    //Обновляет данные относительно строки ввода
    onValueChange(event) {
        this.setState({
            text: event.target.value
        })
    }
    //Добавляет данные при нажатии на кнопку
    onSubmit(event){
        if(this.state.text !== ''){
            event.preventDefault();
            this.props.onAdd(this.state.text);
            this.setState({
                text: ''
            })
        } else {
            event.preventDefault();
        }
    }   

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Ну чё"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить
                </button>
            </form>
        )
    }
};
