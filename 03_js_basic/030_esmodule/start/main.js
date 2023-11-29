// import { hello } from "./module.js";
// import { User } from "./module.js";
// import funcB from "./module.js";
import funcB, { hello, User } from "./module.js";

hello();

const user = new User('Tarara');
user.hello();

funcB();