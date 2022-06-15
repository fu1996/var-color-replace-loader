const colorVarJson = require('@osui/theme/dist');

const {lightColors} = colorVarJson;


const colorRe = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

const varColor = rawColor => {
    for (const key in lightColors) {
        if (Object.hasOwnProperty.call(lightColors, key)) {
            const element = lightColors[key];
            if (element === rawColor) {
                return key;
            }
        }
    }
};

function loader(source) {
    const matchResults = source.match(colorRe);
    if (Array.isArray(matchResults) && matchResults.length > 0) {
        Array.from(new Set(matchResults)).forEach(rawColor => {
            const key = varColor(rawColor);
            if (key) {
                const resultKey = `var(${key})`;
                const reg = new RegExp(rawColor, 'g');
                source = source.replace(reg, resultKey);
            }
        });
    }
    return source;
}

module.exports = loader;
