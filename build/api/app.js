"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import App from '../client/src/components/App.tsx'
// const isDev = (process.env.NODE_ENV !== 'production')
function handleRender(req, res) {
    console.log(' [x] Request for', req.url);
    let initialState = {};
    res.render('index', { initialState: JSON.stringify(initialState) });
}
exports.handleRender = handleRender;
