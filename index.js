/**
 * Convert object { templateUrl: ''} to { templateUrl: require(path)}
 * @param {*} source 
 */
module.exports = function (source) {


    // template pattern
    const pattern = new RegExp(/\w+:(|[\s]+?)("|')?([\w+-?[\w\s+.\\*]+.s?css)("|')/gm);
    const groups = source.match(pattern);

    if (groups !== null) {
        // relative path declared in js file
        const pathModule = groups[3]
        const newSource = source.replace(pattern, `styleUrl: require('${pathModule}').toString()`);
        return newSource;
    }

    return source;
}