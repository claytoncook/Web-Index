async function urlExists(url) {
    let status = 1;
    await fetch(`https://${url}`, {
        method: 'GET',
        mode: "no-cors"
    }).then((val) => {
        if (val.status === 0) {
            status = 0;
        }
    });
    return status;
}

export default urlExists;