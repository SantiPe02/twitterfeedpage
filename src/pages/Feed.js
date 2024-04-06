import { Grid } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/tweetdisplay/Home'
import Recomendations from '../components/recomendations/Recomendations'

function Feed() {
  return (
    <Grid container display={'flex'} justifyContent={'space-evenly'}>
        <Navbar />
        <Home />
        <Recomendations />
    </Grid>
  )
}

export default Feed