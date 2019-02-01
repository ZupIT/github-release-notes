#!/usr/bin/env node

import Program from '../dist/Program';
import Gren from '../dist/Gren';
import { globalOptions, notifyOptions } from './_options';
import { green } from 'chalk';

const notifyCommand = new Program({
    name: `${green('gren')} notify`,
    description: 'send changelog to an email address list',
    argv: process.argv,
    cwd: process.cwd(),
    options: notifyOptions.concat(globalOptions),
    events: {
        '--help': () => {
            console.log('');
            console.log('  Basic Examples:');
            console.log('');
            console.log('    $ gren changelog');
            console.log('');
            console.log('    $ gren changelog --generate');
            console.log('');
        }
    }
});

notifyCommand.init()
    .then(options => {
        const notifyAction = new Gren(options);

        return notifyAction.notify();
    })
    .catch(error => {
        console.error(error);
    });
