import React, { useState, useEffect } from 'react';
import Ably, { Types } from 'ably';
import { Typography } from '@mui/material';

import Text from './conponents/Text';
import InputLine from './conponents/InputLine'

import './App.css';

const apiKey = 'Pns68A.YZZ_rg:7kRIzyMgEs_ZtiQL';
const channelName = 'Alex channel'

const App = () => {
  const [channel, setChannel] = useState<Types.RealtimeChannelCallbacks>();
  const [currentUser, setCurrentUser] = useState<string | null>();
  const [allMessages, setAllMessages] = useState<Array<{ payload: string, name: string }>>([])

  useEffect(() => {
    const ably = new Ably.Realtime(apiKey);
    ably.connection.on('connected', () => {
      const ablyChannel = ably.channels.get(channelName);
      setChannel(ablyChannel);
    });
    const userName = prompt('Please, enter your name');
    setCurrentUser(userName);
  }, []);

  channel && channel.subscribe(({ data, name }) => {
    setAllMessages([...allMessages, { payload: data, name }])
  })

  const handlePublish = (message: string) => {
    channel && channel.publish(String(currentUser), message);
  }

  return (
    <div className="App">
      <Typography variant='h4'>{currentUser}</Typography>
      {allMessages.map(({ payload, name }) => <Text message={payload} userName={name} />)}
      <InputLine publish={handlePublish} />
    </div>
  );
}

export default App;
