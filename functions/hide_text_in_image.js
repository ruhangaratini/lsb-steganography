import sharp from "sharp";

export async function hideTextInImage(path, text, finishFlag) {
    const filename = path.split('/').at(-1).split('.').slice(0, -1).join('.');
    const { data, info } = await sharp(path).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    let characterIndex = 0;
    let pixelRGBA = 0;
    text += finishFlag;

    if (text.length > (data.length / 8)) {
        console.log(`A imagem suporta apenas ${data.length / 8} caractéres`);
        return;
    }

    while (characterIndex < text.length && pixelRGBA < data.length) {
        const binaryChar = text.charCodeAt(characterIndex).toString(2).padStart(8, '0');

        for (const binary of binaryChar) {
            data[pixelRGBA] = binary == '1' ? toOdd(data[pixelRGBA]) : toEven(data[pixelRGBA]);
            pixelRGBA++;
        }

        characterIndex++;
    }

    await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } }).toFormat('png').toFile(`${filename}_hidden.png`);
}

function toOdd(number) {
    if (number % 2 == 1) {
        return number;
    }

    return ++number;
}

function toEven(number) {
    if (number % 2 == 0) {
        return number;
    }

    return --number;
}