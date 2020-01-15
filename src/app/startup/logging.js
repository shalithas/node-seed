import winston, {transports} from "winston";

const path = '../logs';

/**
 * Provides the configurations to winston console formatting
 *
 */
const alignColorsAndTime = winston.format.combine(
    winston.format.colorize({
        all:true
    }),
    winston.format.label({
        label:'[LOGGER]'
    }),
    winston.format.timestamp({
        format:"YY-MM-DD HH:MM:SS"
    }),
    winston.format.printf(
        info => ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`
    )
);

export default function () {
    winston.add(new winston.transports.File({ filename: `${path}/combined.log` }));

    winston.add(new winston.transports.Console({
        level: 'debug',
        format: winston.format.combine(winston.format.colorize(), alignColorsAndTime)
    }));

    //TODO: get winston to handle unhandled exceptions
    winston.handleExceptions(
        new winston.transports.File({
            filename: `${path}/unhandled.log`
        })
    );
};