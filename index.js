module.exports = (text) => {
    return text.replace(/(\_|\*|\~|\`|\||\\|\<|\>|\:|\!|(?<=^|\n|\r)#+\s|(?<=(?:^|\n|\r)\s*)-\s)/g, "\\$1").replace(/((?<=(?:^|\n|\r)\s*)\d+)\.(\s)/g, "$1\\.$2").replace(/@(everyone|here|[!&]?[0-9]{17,21})/g, "@\u200b\$1");
}
