import sharp from "sharp";

export async function revealTextFromImage(path, finishFlag) {
    const { data, info } = await sharp(path).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    let text = '';
    let charBinary = '';

    for (let i = 0; i < data.length; i++) {
        charBinary += data[i] & 1;

        if (charBinary.length == 8) {
            text += String.fromCharCode(parseInt(charBinary, 2));
            charBinary = '';
        }

        if (text.slice(-finishFlag.length) == finishFlag) {
            return text.slice(0, -finishFlag.length);
        }
    }
}