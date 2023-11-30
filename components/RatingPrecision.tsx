import Stack from '@mui/material/Stack';
import React from 'react'
import Rating from '@mui/material/Rating';


const RatingPrecision = () => {
  return (
    <Stack spacing={1}>
      <Rating name='half-rating' defaultValue={5} precision={0.5}/>
    </Stack>
  )
}

export default RatingPrecision