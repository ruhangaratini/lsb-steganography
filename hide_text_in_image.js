import sharp from "sharp";

const _kFinishFlag = '---FINISH---';

export async function hideTextInImage(path, text) {
    const filename = path.split('/').at(-1).split('.').slice(0, -1).join('.');
    const { data, info } = await sharp(path).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    let characterIndex = 0;
    let pixelRGBA = 0;

    console.log(info)

    while(characterIndex < (text.length + _kFinishFlag.length) && pixelRGBA < data.length) {
        const char = characterIndex < text.length ? text.charCodeAt(characterIndex): _kFinishFlag.charCodeAt(characterIndex % text.length);
        const alpha = pixelRGBA + 3;

        data[alpha] = char;

        characterIndex++;
        pixelRGBA += info.channels;
    }

    await sharp(data, {raw: { width: info.width , height: info.height, channels: info.channels}}).toFormat('png').toFile(`${filename}_lsb.png`);
}