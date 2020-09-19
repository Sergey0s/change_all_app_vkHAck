import React, {useState} from 'react';
import './App.css';
import '@vkontakte/vkui/dist/vkui.css';
import {Panel, View} from "@vkontakte/vkui";
import NewsList from "./screens/NewsList";
import MapScreen from "./screens/MapScreens";

function App() {
    const [screen, setScreen] = useState('newsList')
  return (
    <div className="App">
      <View activePanel={screen}>
          <Panel id='newsList'>
            <NewsList setScreen={setScreen}/>
          </Panel>
          <Panel id='MapScreen'>
              <MapScreen setScreen={setScreen}/>
          </Panel>
      </View>
    </div>
  );
}

export default App;
