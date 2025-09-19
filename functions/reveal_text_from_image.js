import sharp from "sharp";

export async function revealTextFromImage(path, finishFlag) {
    const { data, info } = await sharp(path).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    let text = '';

    for(let i = 0; i < data.length; i += info.channels) {
        const alpha = data[i + 3];
        text += String.fromCharCode(alpha / 2);

        if(text.slice(-finishFlag.length) == finishFlag) {
            return text.slice(0, -finishFlag.length);
        }
    }
}