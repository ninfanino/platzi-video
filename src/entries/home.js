import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
//import Playlist from './src/playlist/components/playlist'
import data from '../api.json'

const homeContainer = document.getElementById('home-container');

render(<Home data={data} />, homeContainer);