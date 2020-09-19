import React from 'react';
import {Card, Subhead, Title} from "@vkontakte/vkui";
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';

const NewsItem = ({post}) => {
    return (
        <Card size='l'>
            <div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '4px 14px 8px 12px'}}>
                    {post.author.avatar}
                    <div>
                        <Title weight='medium' level='3'>{post.author.name}</Title>
                        <div style={{display: 'flex', flexDirection: 'row', color: '#818C99', fontSize: 12}}>
                            <Subhead weight='regular'>{post.date}</Subhead>
                            &#8226;
                            <Subhead weight='regular'>{post.mood}</Subhead>
                        </div>
                    </div>
                    <Icon24MoreHorizontal fill='#B8C1CC'/>
                </div>
                <div>
                    {post.img}
                </div>
                <div>

                </div>
            </div>
        </Card>
    )
};

export default NewsItem;