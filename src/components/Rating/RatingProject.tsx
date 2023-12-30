import { Grid, LinearProgress, Typography } from '@mui/material';
import Box from '@mui/material/Box';


const labels: { [index: string]: string } = {
  10: 'Done in minutes',
  20: 'Very easy',
  30: 'Easy',
  40: 'Medium',
  50: 'Medium with research',
  60: 'Medium with a lot of research',
  70: 'Was kinda hard ',
  80: 'Hard with a lot of research         ',
  90: 'Hard with new subjects to learn          ',
  100: 'Really Hard         ',
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
            textAlign: 'center',
          }}
        >

          <Typography sx={{
            fontSize: 30, display: 'flex',
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