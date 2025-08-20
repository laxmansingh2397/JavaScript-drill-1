// Return an array with all the full names

function problem3(data) {
    const fullNameArray = [];
    for (let key in data) {
        let value = data[key]
        for (let i = 0; i < value.length; i++) {
            let fullName = `${value[i].name[0]} ${value[i].name[1]}`;
            fullNameArray.push(fullName);
        }
    }
    return fullNameArray;
}

module.exports = problem3;