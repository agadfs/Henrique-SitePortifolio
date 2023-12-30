import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, LinearProgress, Stack, Typography } from '@mui/material';


const labels: { [index: string]: string } = {
  10: 'Level 10          ',
  20: 'Level 20         ',
  30: 'Level 30           ',
  40: 'Level 40          ',
  50: 'Level 50 ',
  60: 'Level 60',
  70: 'Level 70           ',
  80: 'Level 80          ',
  90: 'Level 90          ',
  100: 'Level 100         ',
};



export default function TextRating({ valuenovo }: { valuenovo: number }) {
  const value = valuenovo;

  return (



    <Grid container spacing={2} columns={16} sx={{ mt: 2, flexGrow: 1 }} >

      <Grid xs={8} sx={{ }} >
        <Box
          sx={{
            width: 100,
            display: 'column',
            alignItems: 'center',
          }}
        >

          <Typography sx={{
            fontSize: 20, display: 'flex',
            alignItems: 'center',
          }} variant="h6" gutterBottom>
            {labels[value]}

          </Typography>
          <LinearProgress
            sx={{
              backgroundColor: '#011e4d',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#90afe0'
              },
              width:'200%',
              

            }}
            variant="determinate"
            value={value}


          />
        </Box>
      </Grid>


    </Grid>

  );
}