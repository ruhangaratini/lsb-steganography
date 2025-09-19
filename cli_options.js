import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export function getCliOptions() {
    const argv = yargs(hideBin(process.argv));

    argv.option('mode', {
        alias: 'm',
        describe: 'write or read image',
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

    argv.check((args) => args.image !== undefined && args.text !== undefined && (args.mode == 'write' || args.mode == 'read'));

    return {
        mode: argv.argv['mode'],
        image: argv.argv['image'],
        text: argv.argv['text']
    };
}

