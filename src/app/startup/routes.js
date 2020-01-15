import express from 'express';
import user from '../features/users/user.routes';


/**
 * Initiates the routes from each component
 * @param app Express app
 */
export default function(app){

    app.get('/', (req, res) => {
        res.send('Welcome to the app');
    });

    app.use(express.json());
    app.use('/api/users', user);
};
