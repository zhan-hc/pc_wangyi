import React from 'react'
import { Navigate } from 'react-router-dom'

import Discover from '@/pages/discover'
import Recommend from '@/pages/discover/views/recommend'
import Artist from '@/pages/discover/views/artist'
import Album from '@/pages/discover/views/album'
import DJRadio from '@/pages/discover/views/djradio'
import Songs from '@/pages/discover/views/songs'
import Ranking from '@/pages/discover/views/ranking'

import Friend from '@/pages/friend'
import Mine from '@/pages/mine'

const routes = [
  {
    path: '/',
    exact: true,
    element: <Navigate to="/discover" />,
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        element: <Recommend />,
      },
      {
        path: '/discover/djradio',
        element: <DJRadio />,
      },
      {
        path: '/discover/ranking',
        element: <Ranking />,
      },
      {
        path: '/discover/artist',
        element: <Artist />,
      },
      {
        path: '/discover/songs',
        element: <Songs />,
      },
      {
        path: '/discover/album',
        element: <Album />,
      },
    ],
  },
  {
    path: '/mine',
    element: <Mine />,
  },
  {
    path: '/friend',
    element: <Friend />,
  },
]

export default routes
