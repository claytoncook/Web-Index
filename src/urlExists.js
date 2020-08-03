async function urlExists(url) {

    let status = 1;
    try {
        await fetch(`https://${url}`, {
            method: 'GET',
            mode: "no-cors"
        }).then((val) => {
            if (val.status === 0) {
                status = 0;
            }
        });
    } catch( error ) {
        //Nothing
    }
    return status;
}

export default urlExists;