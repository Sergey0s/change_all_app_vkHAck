import React, {useState} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {CardGrid, PanelHeader, Div, Avatar} from "@vkontakte/vkui";
import NewsItem from "../component/NewsItem";

const NewsList = () => {
    const [news, setNews] = useState([
        {
            author: {
                name: 'Михаил',
                avatar: <Avatar src={require('../img/Avatar.png')} />
            },
            date: 'Час назад',
            mood: 'спокойное настроение',
            likes: 65,
            comments: 65,
            reposts: 4,
            views: 7200,
            img: <Avatar mode='image' src={require('../img/Rectangle7.png')}/>
        },
        {
            author: {
                name: 'Михаил',
                avatar: <Avatar src={require('../img/Avatar.png')} />
            },
            date: 'Час назад',
            mood: 'спокойное настроение',
            likes: 65,
            comments: 65,
            reposts: 4,
            views: 7200,
            img: <Avatar mode='image' src={require('../img/Rectangle7.png')} />
        }
    ])

    let content = news.map(el => <NewsItem post={el}/>)
    return (
        <>
            <PanelHeader

            >
                Фото
            </PanelHeader>
            <CardGrid>
                {content}
            </CardGrid>
        </>
    )
};

export default NewsList;