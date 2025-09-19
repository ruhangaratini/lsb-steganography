import { hideTextInImage } from "./hide_text_in_image.js";
import { getCliOptions } from "./cli_options.js";

const options = getCliOptions();

if(options.mode == 'write') {
    await hideTextInImage(options.image, options.text);
}

if(options.mode == 'read') {
    
}
