import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter  } from 'react-router-dom'
// import App from '../client/src/components/App.tsx'


// const isDev = (process.env.NODE_ENV !== 'production')

export function handleRender(req: any, res: any) {
        console.log(' [x] Request for', req.url)
        
        let initialState = {}
        
        res.render('index', { initialState: JSON.stringify(initialState)})
  }