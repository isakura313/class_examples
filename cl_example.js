class Human {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
    this.arms_count = 2;
  }
  greet() {
    console.log(`this is ${this.name}`);
  }
}
vasya = new Human("Вася", "Васильев");
console.log(vasya.name, vasya.arms_count);
console.log(typeof Human);
const h_m = vasya.__proto__;
console.log(h_m.isPrototypeOf(vasya));

class Terminator extends Human {
  saySomething() {
    console.log(`this is ${this.name}. I need your clothes, boots and mt`);
  }
}
const t_800 = new Terminator("Paps", "200kg");
t_800.saySomething();

// React.component - класс, от него наследуем свой и создаем
// любой компонент
// игровой пример - обший класс враги - атаковать, отступать, умирать, получать урон
// разные подклассы врагов - кто-то быстрый, но мало HP, у каждого мб свои особенности
// посмотреть переопределение
