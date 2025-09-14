/* type UserType = {
    id: number;
    name: string;
}; */

interface UserInterface {
  id: number;
  name: string;
}

let u01: UserInterface = {
    id: 33,
    name: "ahmed"
}
console.log(`${u01.id} - ${u01.name}`);
