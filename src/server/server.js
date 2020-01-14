import path from 'path';
import express from 'express';
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'

const env = process.env.ENV || 'DEV';

const app = express(),
    DIST_DIR = __dirname,
    compiler = webpack(config);

if (env === 'DEV'){
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));
}

app.get('/', (req, res) => {
    res.send('Started');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.')
});