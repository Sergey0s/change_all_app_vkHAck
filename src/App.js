import React from 'react';
import './App.css';
import '@vkontakte/vkui/dist/vkui.css';
import {Panel, View} from "@vkontakte/vkui";
import NewsList from "./screens/NewsList";

function App() {
  return (
    <div className="App">
      <View activePanel='newsList'>
          <Panel id='newsList'>
            <NewsList />
          </Panel>
      </View>
    </div>
  );
}

export default App;
