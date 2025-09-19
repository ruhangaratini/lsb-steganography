import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export function getCliOptions() {
    const argv = yargs(hideBin(process.argv));

    argv.option('mode', {
        alias: 'm',
        describe: 'write OR read',
        type: 'string'
    })

    argv.option('image', {
        alias: 'i',
        describe: 'Image path',
        type: 'string'
    });

    argv.option('text', {
        alias: 't',
        describe: 'Text to be hidden',
        type: 'string'
    });

    argv.check((args) => {
        if(args?.mode == 'write' && args?.image !== undefined && args?.text !== undefined) {
            return true;
        }

        if(args?.mode == 'read' && args?.image !== undefined) {
            return true;
        }

        return false;
    });

    return {
        mode: argv.argv['mode'],
        image: argv.argv['image'],
        text: argv.argv['text']
    };
}

