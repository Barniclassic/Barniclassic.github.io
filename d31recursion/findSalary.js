/* eslint-disable require-jsdoc */
"use strict";
let company = { // the same object, compressed for brevity
    sales: [{ name: "John", salary: 1000 },
            { name: "Alice", salary: 600 }
            ],
    development: {
        sites: [{ name: "Peter", salary: 2000 },
                { name: "Alex", salary: 1800 }
                ],
        internals: [{ name: "Jack", salary: 1300 }]
    }
};

function collectNames(department) {
    if (Array.isArray(department)) { // case (1)
        return department.map((current) => current.name);
    } else { // case (2)
        let names = [];
        for (let subdep of Object.values(department)) {
            let subdepNames = collectNames(subdep);
            names = names.concat(subdepNames); // recursively call for subdepartments, sum the result
        }
        return names;
    }
}

console.log(collectNames(company)); // 6700
