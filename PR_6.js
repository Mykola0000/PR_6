// Клас квадрату
class Square {
    constructor(a) {
      this.a = a;
    }
  
    static help() {
      console.log("Квадрат - це геометрична фігура з чотирма однаковими сторонами та чотирма кутами, рівними між собою.");
    }
  
    length() {
      console.log("Довжина сторони квадрата: " + this.a);
    }
  
    square() {
      console.log("Площа квадрата: " + (this.a ** 2));
    }
  
    info() {
      console.log("Інформація про квадрат:");
      console.log("Сторона: " + this.a);
      this.length();
      this.square();
    }
  }
  
  // Клас прямокутника
  class Rectangle extends Square {
    constructor(a, b) {
      super(a);
      this.b = b;
    }
  
    static help() {
      console.log("Прямокутник - це чотирикутник з протилежними сторонами, рівними між собою попарно.");
    }
  
    length() {
      console.log("Довжина прямокутника: " + this.a);
      console.log("Ширина прямокутника: " + this.b);
    }
  
    square() {
      console.log("Площа прямокутника: " + (this.a * this.b));
    }
  
    info() {
      console.log("Інформація про прямокутник:");
      console.log("Довжина: " + this.a);
      console.log("Ширина: " + this.b);
      this.length();
      this.square();
    }
  }
  
  // Клас ромба
  class Rhombus extends Square {
    constructor(a, alpha, beta) {
      super(a);
      this.alpha = alpha;
      this.beta = beta;
    }
  
    static help() {
      console.log("Ромб - це чотирикутник з усіма сторонами рівними між собою.");
    }
  
    length() {
      console.log("Довжина сторони ромба: " + this.a);
    }
  
    square() {
      console.log("Площа ромба: " + (this.a ** 2) * Math.sin(this.alpha * Math.PI / 180));
    }
  
    info() {
      console.log("Інформація про ромб:");
      console.log("Сторона: " + this.a);
      console.log("Тупий кут: " + this.alpha + " градусів");
      console.log("Гострий кут: " + this.beta + " градусів");
      this.length();
      this.square();
    }
  }
  
  // Клас паралелограма
  class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
      super(a, b);
      this.alpha = alpha;
      this.beta = beta;
    }
  
    static help() {
      console.log("Паралелограм - це чотирикутник, у якого протилежні сторони паралельні.");
    }
  
    info() {
      console.log("Інформація про паралелограм:");
      console.log("Довжина: " + this.a);
      console.log("Ширина: " + this.b);
      console.log("Тупий кут: " + this.alpha + " градусів");
      console.log("Гострий кут: " + this.beta + " градусів");
      this.length();
      this.square();
    }
  }
  
  // Виклик статичного методу help для кожного класу
  Square.help();
  Rectangle.help();
  Rhombus.help();
  Parallelogram.help();
  
  // Створення об'єктів для кожного класу
  const square = new Square(5);
  const rectangle = new Rectangle(4, 6);
  const rhombus = new Rhombus(5, 60, 120);
  const parallelogram = new Parallelogram(4, 6, 60, 120);
  
  // Виклик методу info для кожного об'єкта
  square.info();
  console.log("--------------");
  rectangle.info();
  console.log("--------------");
  rhombus.info();
  console.log("--------------");
  parallelogram.info();
  