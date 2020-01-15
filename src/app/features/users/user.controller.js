import {log} from "winston";

export const getActiveUser = (req, res) => {
    log('info', 'mes');
    res.send({text: 'me'});
};
