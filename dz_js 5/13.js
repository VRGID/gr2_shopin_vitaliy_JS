let user = {
  name:"Вася",
  surname:"Петров"
};
console.log(user);
user.name = "Сергей";

console.log(user.name);

delete user.name;

console.log(user.name);