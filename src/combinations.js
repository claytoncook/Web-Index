const characters = 'abcdefghijklmnopqrstuvwxyz';
const TLD = ['com', 'net', 'edu', 'gov'];

let iterations = 1;

function combinations(prefix, k, start, end, result = []) {
    console.log(iterations)
    if (k === 0) {
        iterations++;
        if(start <= iterations && iterations <= end) {
            result.push(`${prefix}`);
        }
        //result.push([`${prefix}.${TLD[i]}`, await urlExists(`${prefix}.${TLD[i]}`)])
        return;
    }
    for (let i = 0; i < characters.length; i++) {
        let newPrefix;
        newPrefix = prefix + characters[i];
        combinations(newPrefix, k - 1, start, end, result);
    }
    //start <= iterations && iterations <= end
    return result;
}

export default combinations;