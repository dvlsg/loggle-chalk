"use strict";

import Loggle, { LEVELS } from 'loggle';
import chalk from 'chalk';

function getDate() {
    return (new Date()).toISOString();
}

const prefixes = {
    log   : `${chalk.styles.white.open}  Log:${chalk.styles.white.close}`,
    error : `${chalk.styles.red.open}Error:${chalk.styles.red.close}`,
    warn  : `${chalk.styles.yellow.open} Warn:${chalk.styles.yellow.close}`,
    info  : `${chalk.styles.green.open} Info:${chalk.styles.green.close}`,
    debug : `${chalk.styles.cyan.open}Debug:${chalk.styles.cyan.close}`,
    silly : `${chalk.styles.magenta.open}Silly:${chalk.styles.magenta.close}`
};

export class ChalkInterface {

    error(...args) {
        return console.error(`${getDate()} ${prefixes.error}`, ...args);
    }

    warn(...args) {
        return console.warn(`${getDate()} ${prefixes.warn}`, ...args);
    }

    log(...args) {
        return console.log(`${getDate()} ${prefixes.log}`, ...args);
    }

    info(...args) {
        return console.info(`${getDate()} ${prefixes.info}`, ...args);
    }

    debug(...args) {
        // note that nodejs does not have console.debug
        return console.log(`${getDate()} ${prefixes.debug}`, ...args);
    }

    silly(...args) {
        return console.log(`${getDate()} ${prefixes.silly}`, ...args);
    }

}

export { LEVELS, LogError } from 'loggle';

export default function LoggleChalk(level = LEVELS.STANDARD) {
    return new Loggle(new ChalkInterface(), level);
}
