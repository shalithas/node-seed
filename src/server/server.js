import express from 'express';
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import routes from '../app/startup/routes';
import config from '../../webpack.dev.config.js';
import logger from '../app/startup/logging';

const env = process.env.ENV || 'DEV';

const app = express(),
    compiler = webpack(config);

/**
 * Reloading turned on if in DEV mode
 */
if (env === 'DEV'){
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));
}

/**
 * Start up scripts
 */
routes(app);
logger();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.')
});