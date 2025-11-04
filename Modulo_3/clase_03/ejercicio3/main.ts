import createUser from "./user";

const user = createUser("Sil", 34);
console.log(`Usuario nuevo: ${user.name}, edad ${user.age}`);