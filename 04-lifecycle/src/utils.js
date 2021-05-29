const pad = val => {
    if (val < 10) {
        return '0' + val;
    }

    return val;
}

export { pad };