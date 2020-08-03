const characters = 'abcdefghijklmnopqrstuvwxyz';
const TLD = ['com', 'net', 'edu', 'gov'];

function combinations(prefix, k, result = []) {
    if (k === 0) {
        result.push(`${prefix}`);
        //result.push([`${prefix}.${TLD[i]}`, await urlExists(`${prefix}.${TLD[i]}`)])
        return;
    }
    for (let i = 0; i < characters.length; i++) {
        let newPrefix;
        newPrefix = prefix + characters[i];
        combinations(newPrefix, k - 1, result);
    }
    //start <= iterations && iterations <= end
    return result;
}

export default combinations;