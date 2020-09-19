import React, {useState} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Card, CardGrid, PanelHeader, Div, Avatar} from "@vkontakte/vkui";

const NewsList = (newsList) => {
    const [news, setNews] = useState([
        {
            author: {
                name: 'Михаил',
                avatar: <Avatar src='../img/Avatar.png' />
            },
            date: 'Час назад',
            mood: 'спокойное настроение',
            likes: 65,
            comments: 65,
            reposts: 4,
            views: 7200
        }
    ])
    let content = newsList.map(el => )
    return (
        <>
            <PanelHeader

            >
                Фото
            </PanelHeader>
            <CardGrid>
            </CardGrid>
        </>
    )
};

export default NewsList;