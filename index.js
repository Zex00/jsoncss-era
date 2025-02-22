function jsonToCss(json) {
    let css = "";

    for (const selector in json) {
        css += `${selector} {\n`;
        for (const property in json[selector]) {
            css += `  ${property}: ${json[selector][property]};\n`;
        }
        css += `}\n\n`;
    }

    return css;
}

export function convert(jsonCss) {
    return jsonToCss(jsonCss);
}