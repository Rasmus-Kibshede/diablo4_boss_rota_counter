import { Button, TextField } from '@mui/material';

interface Player {
  name: string;
  count: number;
}

function PlayerDisplay({ player }: { player: Player }) {
  return (
    <>
      <TextField label="Player" variant="standard" />
      <h4>{player.count}</h4>
      <Button
        variant="contained"
        // onClick={}
      >
        +
      </Button>
      <Button
        variant="contained"
        // onClick={}
      >
        -
      </Button>
    </>
  );
}

export default PlayerDisplay;
