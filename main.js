import { hideTextInImage } from "./functions/hide_text_in_image.js";
import { getCliOptions } from "./functions/cli_options.js";
import { revealTextFromImage } from "./functions/reveal_text_from_image.js";

const _kFinishFlag = '---FINISH---';
const options = getCliOptions();

if (options.mode == 'write') {
    await hideTextInImage(options.image, options.text, _kFinishFlag);
}

if (options.mode == 'read') {
    console.log(await revealTextFromImage(options.image, _kFinishFlag));
}
