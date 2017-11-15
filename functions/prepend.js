function prepend(arr, params) {
    if (params.length != 1) {
        return "Error: invalid command parameters";
    }

    let res = arr;
    res.unshift(params[0]);
    return res
}