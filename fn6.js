console.log("clossure property in js");
const global_data = "Global"

const parent = () => {
    let parent_data = "parent"
    console.log(`inside parent function, its local variable is '${parent_data}' and its global variable is '${global_data}' `);
}


