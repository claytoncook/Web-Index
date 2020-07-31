import urlExists from './urlExists';

const characters = 'abcdefghijklmnopqrstuvwxyz';
const TLD = ['com', 'net', 'edu', 'gov'];

function combinations(prefix, k, result = []) {
    if (k === 0) {
        for (let i = 0; i < TLD.length; i++) {
            result.push(`${prefix}.${TLD[i]}`);
            //result.push([`${prefix}.${TLD[i]}`, await urlExists(`${prefix}.${TLD[i]}`)])
        }
        return result;
    }
    for (let i = 0; i < characters.length; i++) {
        let newPrefix;
        newPrefix = prefix + characters[i];
        combinations(newPrefix, k - 1, result);
    }
    return result;
}

export default combinations;