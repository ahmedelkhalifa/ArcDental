import { Box } from '@mui/material'
import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero.jsx'
import FeaturesCard from '../components/FeaturesPaper.jsx'

const Home = () => {
  return (
    <>
    <Box sx={{display: 'flex', height: '100vh', flexDirection: "column"}}>
        <Nav active="home"/>
        <Box sx={{flex: 3, height: "100%", width: "100%"}}>
          <Hero />
        </Box>
        <Box sx={{width: "100%", height: "100%", flex: 1}}>
          <FeaturesCard />
        </Box>
    </Box>
    </>
  )
}

export default Home