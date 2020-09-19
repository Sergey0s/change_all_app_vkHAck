import React from 'react'
import '@vkontakte/vkui/dist/vkui.css';
import mapImg from '../img/MapsicleMap.jpg';
import bottomImg from '../img/Frame 70.png';
import mood1 from '../img/Mood.png';
import mood2 from '../img/Mood (1).png';
import mood3 from '../img/Mood (2).png';
import mood4 from '../img/Mood (3).png';
import comp from '../img/Medium w Emoji & Title.png';
import car from '../img/Medium w Emoji.png';
import carantine from '../img/Large w Emoji & Titl.png';


const MapScreen = ({setScreen}) => {
    return (
        <>
            <div style={{position: "relative"}}>
                <img style={{position: "absolute", top: 300, right: 20}} src={(mood1)} alt={''}/>
                <img style={{position: "absolute", top: 300, left: 20}} src={(mood2)} alt={''}/>
                <img style={{position: "absolute", top: 40, left: '40%'}} src={(mood3)} alt={''}/>
                <img style={{position: "absolute", top: 550, left: '40%'}} src={(mood4)} alt={''}/>
                <img style={{position: "absolute", top: 200, left: '20%'}} src={(comp)} alt={''}/>
                <img style={{position: "absolute", top: 210, left: '50%'}} src={(car)} alt={''}/>
                <img style={{position: "absolute", top: 300, left: '25%'}} src={(carantine)} alt={''}/>
            <div style={{display:"block", flexDirection: "column"}}>
                <img width={'100%'} src={(mapImg)} alt={''}/>
                <img width={'100%'} src={(bottomImg)} alt={''}/>
            </div>
            </div>
        </>
    );
};

export default MapScreen;
