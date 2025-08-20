  // Group the people based on the Role ( You can find in hr array )
  
  /*
  
  Sample output:
  
  {
    "Customer Support": ['Sninder Donna',...etc],
     "Javascript Developer": ['Bruce Michael',...etc]
     .
     .
     .so on
  
  }
  
  */

function problem1(data) {
    const role = {}
    for (let key in data) {
        let value = data[key]
        for (let i = 0; i < value.length; i++) {
            let personRole = `${value[i].hr[0]}`
            let name = value[i].name
            if (!(personRole in role)) {
                role[personRole] = []
            }
            let fullName = `${name[0]} ${name[1]}`;
            role[personRole].push(fullName);
        }
    }
    return role
}

module.exports = problem1;