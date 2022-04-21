/*

Вопрос: Чему равно foo?

var foo = 10 + '20';

---------------------------------------------------------------------------------------------

Вопрос: Что выводит код ниже?

console.log(0.1 + 0.2 == 0.3);

---------------------------------------------------------------------------------------------

Вопрос: Как сделать, чтобы это выражение работало?

add(2, 5); // 7
add(2)(5); // 7


---------------------------------------------------------------------------------------------

Вопрос: Какое значение возвращает данное выражение?

"i'm a lasagna hog".split("").reverse().join("");


---------------------------------------------------------------------------------------------

Вопрос: Чему равно window.foo?

( window.foo || ( window.foo = "bar" ) );


---------------------------------------------------------------------------------------------

Вопрос: Что покажут эти два alert?

var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);


---------------------------------------------------------------------------------------------

Вопрос: Чему равно foo.length?

var foo = [];
foo.push(1);
foo.push(2);


---------------------------------------------------------------------------------------------

Вопрос: Чему равно foo.x?

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};


---------------------------------------------------------------------------------------------

Вопрос: Что выводит код ниже?

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');


---------------------------------------------------------------------------------------------

Вопрос: В чем разница между этими четырьмя промисами (promises)?

doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);

---------------------------------------------------------------------------------------------
В чем разница между: function Person(){}, var person = Person(), и var person = new Person()?


---------------------------------------------------------------------------------------------
Сделайте так, чтобы этот код работал:
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]


---------------------------------------------------------------------------------------------
Напишите цикл, который перебирает числа до 100, возвращая “fizz” на числа кратные 3, “buzz” на числа кратные 5 и “fizzbuzz” на числа кратные 3 и 5



---------------------------------------------------------------------------------------------
Объясните разницу при использовании foo в function foo() {} и var foo = function() {}

---------------------------------------------------------------------------------------------
Можете ли вы привести пример деструктуризации объекта или массива?

---------------------------------------------------------------------------------------------
Шаблонные строки в ES6 намного упрощают создание строк, можете ли вы привести пример их использования?

---------------------------------------------------------------------------------------------
Можете ли вы привести пример каррированной функции (curry function) и в чём их преимущество?

---------------------------------------------------------------------------------------------
    Задача написать функцию, которая определит, являются ли 2 строки переданные в неё анаграммами(словами состоящими из одних и тех же букв).
    Например функция checkAnagram(silent,listen) должна вернуть true, тогда как  checkAnagram(rat,cat) должна вернуть false.

const isAnagram = (word1, word2) => word1.split('').sort().join('') == word2.split('').sort().join('')


---------------------------------------------------------------------------------------------

  Что такое фрагменты?

Специальный элемент в React позволяющий возвращать группу элементов без дополнительного родительского DOM элемента


---------------------------------------------------------------------------------------------

  Что такое строгий режим в React?

React.StrictMode — компонент для выявления потенциальных проблем в приложении.
Так же, как <Fragment>, <StrictMode> не добавляет каких-либо дополнительных элементов DOM.
Применимы только для режима разработки.


---------------------------------------------------------------------------------------------

  Что такое порталы в React?

Порталы позволяют рендерить дочерние элементы в DOM-узел, который находится вне DOM-иерархии родительского компонента.

ReactDOM.createPortal(child, container)

Где первый аргумент — любой React-компонент, который может быть отрендерен.
Второй аргумент — это DOM-элемент.



---------------------------------------------------------------------------------------------

  Что такое селекторы Redux и зачем их использовать?

Селекторы — геттеры для получения некоторых частей из целого state. Например, чтобы получить данные о пользователе:

const getUserData = state => state.user;



---------------------------------------------------------------------------------------------

  В чем разница между Shadow DOM и Virtual DOM?

Теневой DOM (Shadow DOM) — технология браузера, разработанная в первую очередь для установки области видимости переменных и CSS в веб-компонентах.

Виртуальный DOM (Virtual DOM) — концепция, реализованная JavaScript-библиотеками поверх API браузера.



---------------------------------------------------------------------------------------------




---------------------------------------------------------------------------------------------



 */