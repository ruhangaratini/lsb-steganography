import sharp from "sharp";

export async function hideTextInImage(path, text, finishFlag) {
    const filename = path.split('/').at(-1).split('.').slice(0, -1).join('.');
    const { data, info } = await sharp(path).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    let characterIndex = 0;
    let pixelRGBA = 0;
    text = text.toLowerCase();

    while(characterIndex < (text.length + finishFlag.length) && pixelRGBA < data.length) {
        const char = characterIndex < text.length ? text.charCodeAt(characterIndex): finishFlag.charCodeAt(characterIndex % text.length);
        const alphaIndex = pixelRGBA + 3;

        data[alphaIndex] = char * 2;

        characterIndex++;
        pixelRGBA += info.channels;
    }

    await sharp(data, {raw: { width: info.width , height: info.height, channels: info.channels}}).toFormat('png').toFile(`${filename}_hidden.png`);
}