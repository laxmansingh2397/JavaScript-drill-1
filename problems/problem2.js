// Find average salary based for each role ( You can find in hr array )

function problem2(data) {
    const averageSalary = {}
    for (let key in data) {
        let value = data[key];
        for (let i = 0; i < value.length; i++) {
            let salary = value[i].hr[1];
            let role = value[i].hr[0];
            if (!(role in averageSalary)) {
                averageSalary[role] = [];
            }
            averageSalary[role].push(parseFloat(salary.slice(1, salary.length).replace(/,/g, '')));
        }
    }
    for (let key in averageSalary) {
        let salaryArray = averageSalary[key]
        if (salaryArray.length < 2) {
            averageSalary[key] = salaryArray[0]
        }
        else {
            let totalSalary = 0;
            for (let salary of salaryArray) {
                totalSalary += salary
            }
            averageSalary[key] = (totalSalary / salaryArray.length)
        }
    }
    return averageSalary
}

module.exports = problem2;