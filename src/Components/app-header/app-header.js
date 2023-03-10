import React from "react";

import './app-header.css';
import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`
//Заголовок принимает 2 параметра и обновляет в реальном фремени 
const AppHeader = ({liked, allPosts}) => {
    return (
        <Header>
            <h1>Sergeev Alexey</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;