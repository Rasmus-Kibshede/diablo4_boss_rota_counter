import { Box, Button, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import PlayerDisplay from './components/PlayerDisplay';

function App() {
  // const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [player1, setPlayer1] = useState<Player>({
    name: 'Player 1',
    count: 0,
  });
  const [player2, setPlayer2] = useState<Player>({
    name: 'Player 2',
    count: 0,
  });
  const [player3, setPlayer3] = useState<Player>({
    name: 'Player 3',
    count: 0,
  });
  const [player4, setPlayer4] = useState<Player>({
    name: 'Player 4',
    count: 0,
  });

  const [rotaCount, setrotaCount] = useState<number>(0);

  return (
    <>
      <Box>
        <Stack spacing={2} width={'10%'}>
          <TextField
            required
            id="text-field-player-1"
            label="Player Name"
            defaultValue="Player 1"
            onChange={(e) => setPlayer1({ ...player1, name: e.target.value })}
          />
          <TextField
            required
            id="text-field-player-2"
            label="Player Name"
            defaultValue="player 2"
            onChange={(e) => setPlayer2({ ...player2, name: e.target.value })}
          />
          <TextField
            required
            id="text-field-player-3"
            label="Player Name"
            defaultValue="player 3"
            onChange={(e) => setPlayer3({ ...player3, name: e.target.value })}
          />
          <TextField
            required
            id="text-field-player-4"
            label="Player Name"
            defaultValue="player 4"
            onChange={(e) => setPlayer4({ ...player4, name: e.target.value })}
          />
        </Stack>

        <h1>Total Count: {rotaCount}</h1>

        {/* <Stack spacing={2} width={'10%'}> */}
        <PlayerDisplay player={player1} />

        <PlayerDisplay player={player2} />

        <PlayerDisplay player={player3} />
        <PlayerDisplay player={player4} />

        <Button variant="contained" onClick={() => setrotaCount(rotaCount + 1)}>
          Count 1 rota
        </Button>
        {/* <Button
          variant="contained"
          onClick={() => {
            setrotaCount(0);
            setPlayer1Name('');
            setPlayer2Name('');
            setPlayer3Name('');
            setPlayer4Name('');
          }}
        >
          Reset
        </Button> */}
      </Box>
    </>
  );
}

export default App;
