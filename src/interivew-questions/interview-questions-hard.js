// Implement deep equal function
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function deepEqual(value1, value2) {

}

const result = deepEqual('anurag', 'anurag');
// const result = deepEqual({ parent: { child: { name: 'anurag' } } }, { parent: { child: { name: 'anurag' } } });
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Implement below
let deeplyNestedMap = {
    user: {
        key_value_map: {
            CreatedDate: "123424",
            Department: {
                Name: "XYZ",
            },
        },
    },
};

const flaternObj = (obj) => {
    // Implement
};

console.log(flaternObj(deeplyNestedMap));
// {
//     "user.key_value_map.CreatedDate": "123424",
//     "user.key_value_map.Department.Name": "XYZ"
// }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Remove nested duplcated
const allValues = [1, [1, [[9], [2], [3]]]];

const removeNestedDuplicates = (values) => {
    if (!Array.isArray(values)) {
        return values;
    }

    const resultArray = []

    for (const item of values) {
        const value = removeNestedDuplicates(item);

        if (Array.isArray(value)) {
            for (const inner of value) {
                if (!resultArray.includes(inner)) {
                    resultArray.push(inner);
                }
            }
        } else if (item && !resultArray.includes(value)) {
            resultArray.push(value);
        }
    }

    return resultArray;
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<