/*

Что такое CSS?

Cascading Style Sheets (CSS) — каскадные таблицы стилей, которые позволяют оформлять содержимое страницы в соответствии с описанными правилами

------------------------------------------------------------------------------------------

Какие есть способы изоляции в CSS?

Самое главное — это указать контейнер для блока. Всё, что оказывается внутри — и есть компонент (включая сам контейнер)

CSS каскадность
.block1 h1 { color: red; }

Уникальность именования классов (БЭМ)
Данный подход используется в методологии БЭМ, где каждый элемент обязательно содержит класс и именуется от своего родителя.
<div class="block1">
	<h1 class="block1_h1">Первый блок</h1>
	<div class="block1_div">Текст</div>
</div>
------------------------------------------------------------------------------------------

 Какие есть единицы измерения в CSS?

    Пиксели: px
Существуют также «производные» от пикселя единицы измерения: mm, cm, pt и pc, но они давно отправились на свалку истории.

Вот, если интересно, их значения:

1mm (мм) = 3.8px
1cm (см) = 38px
1pt (типографский пункт) = 4/3 px
1pc (типографская пика) = 16px
Так как браузер пересчитывает эти значения в пиксели, то смысла в их употреблении нет.

    Относительно шрифта: em
1em – текущий размер шрифта.

Можно брать любые пропорции от текущего шрифта: 2em, 0.5em и т.п.
Размеры в em – относительные, они определяются по текущему контексту.

    Проценты %
Проценты %, как и em – относительные единицы.

Когда мы говорим «процент», то возникает вопрос – «Процент от чего?»

Как правило, процент будет от значения свойства родителя с тем же названием, но не всегда.

    Единица rem: смесь px и em
Единица rem задаёт размер относительно размера шрифта элемента <html>.

    Относительно экрана: vw, vh, vmin, vmax
vw – 1% ширины окна
vh – 1% высоты окна
vmin – наименьшее из (vw, vh), в IE9 обозначается vm
vmax – наибольшее из (vw, vh)


------------------------------------------------------------------------------------------

 Когда брать абсолютные величины, а когда относительные?

Относительные единицы обычно используют для работы с текстом, либо когда надо вычислить процентное соотношение между элементами.

Абсолютные единицы применяются реже, чем относительные и, как правило, при работе с текстом

------------------------------------------------------------------------------------------

 Какие есть варианты указания цвета и зачем нам столько?

По названию
Браузеры поддерживают некоторые цвета по их названию.

С помощью RGB
Можно определить цвет, используя значения красной, зеленой и синей составляющей в десятичном исчислении. Каждая из трех компонент цвета принимает значение от 0 до 255. Также допустимо задавать цвет в процентном отношении

RGBA
Формат RGBA похож по синтаксису на RGB, но включает в себя альфа-канал, задающий прозрачность элемента. Значение 0 соответствует полной прозрачности, 1 — непрозрачности, а промежуточное значение вроде 0.5 — полупрозрачности.

HSL
Название формата HSL образовано от сочетания первых букв Hue (оттенок), Saturate (насыщенность) и Lightness (светлота).
Оттенок задается в градусах.
Насыщенностью называется интенсивность цвета, измеряется в процентах от 0% до 100%.
Светлота задает, насколько цвет яркий и указывается в процентах от 0% до 100%.

HSLA
Формат HSLA похож по синтаксису на HSL, но включает в себя альфа-канал, задающий прозрачность элемента.

------------------------------------------------------------------------------------------


 Какие есть способы модификации цвета?

Свойство color задаёт цвет шрифта с помощью различных систем цветопередачи
Свойство наследуется (inherit) от родительского элемента.
Ключевое слово currentColor хранит значение CSS-свойства color

------------------------------------------------------------------------------------------

 Особенности свойства color?

Сокращенная запись свойства #222
Интересной особенностью currentColor является тот факт, что это ключевое слово можно использовать и на уровне родительского элемента, и для дочерних элементов.


------------------------------------------------------------------------------------------


 Доступность цвета

Цветовой контраст между фоном и содержимым переднего плана (обычно текстом) должен быть минимальным, чтобы обеспечить удобство чтения.
Хорошо иметь крутой дизайн на своём сайте, но он бесполезен, если ваши пользователи не могут прочитать контент.

------------------------------------------------------------------------------------------

 Приходилось ли делать кастомизацию форм?

простой пример кастомизации формы
https://techrocks.ru/2020/03/25/how-to-style-forms-with-css/

------------------------------------------------------------------------------------------

 Зачем нам нужен autoprefixer?

Автопрефиксер — утилита нового поколения для добавления префиксов к экспериментальным свойствам из CSS 3
Для расстановки вендорных префиксов для лучшей кроссбраузерности.
Автопрефиксер использует данные о популярности браузеров и поддержке ими вендорных префиксов. Опираясь на эту информацию, он расставляет и удаляет префиксы.
Автопрефиксер поможет вам с префиксами для: animations, transition, transform, grid, flex, flexbox и других.

------------------------------------------------------------------------------------------

 Как выбирать свойство основываясь на поддержке браузерами?

Воспользоваться специальными сайтами, в которых описаны поддержки HTML5 во всех основных браузерах.


------------------------------------------------------------------------------------------

 Какие значения свойства display знаешь

Значение none
Значение block
Значение inline
Значение inline-block
Значения table
Вертикальное центрирование с table-cell
Значения list-item, run-in и flex

больше значений
https://developer.mozilla.org/ru/docs/Web/CSS/display

------------------------------------------------------------------------------------------

 Как повернуть элемент на 45 градусов

transform: rotate(90deg)

------------------------------------------------------------------------------------------

 В чем разница между flex и grid

Главное отличие Flexbox от CSS Grid определяется размерностью.
По сути, Flexbox создавался для одноразмерных макетов, а CSS Grid можно было применять к двухмерным макетам.
Поэтому CSS Grid может одновременно настраивать и строки, и колонки

------------------------------------------------------------------------------------------

 Различные виды позиционирования элементов

Статическое позиционирование
Статическое позиционирование — это умолчание, которое получает каждый элемент, что всего лишь значит "поставить элемент в его нормальное положение в потоке макета документа — ничего особенного для рассмотрения".
position: static;

Относительное позиционирование
position: relative;
для модификации положения необходимо использовать свойства top, bottom, left (en-US), и right

Абсолютное позиционирование
position: absolute;

------------------------------------------------------------------------------------------


В общем случае медиа-запрос состоит из ключевого слова, описывающего тип устройства (необязательный параметр) и выражения, проверяющего характеристики данного устройства.
В качестве медиа-типов были определены следующие: aural, braille, handheld, print, projection, screen, tty, tv

------------------------------------------------------------------------------------------

 Что такое inline-block

Это значение, которые можно назначить свойству display.
Позволяет задать высоту и ширину элементу, не добавляет разрыв строк.

------------------------------------------------------------------------------------------

 Что такое псевдоклассы в CSS?
Псевдоэлемент в CSS — это ключевое слово, добавляемое к селектору, которое позволяет стилизовать определённую часть выбранного элемента
Список стандартных псевдоэлементов
::after
::before
::cue
::first-letter
::first-line
::selection
::slotted
::backdrop
::placeholder
::marker
::spelling-error (en-US)
::grammar-error

В CSS псевдоклассы используются для описания стилей элементов, находящихся в особых состояниях.
Псевдоклассы можно использовать совместно с CSS-селекторами для настройки внешнего вида элементов на основе их состояний.

Вот пример:


Любой элемент <a>, на который пользователь наведёт указатель мыши, будет окрашен в цвет green.

     a:hover {
     color: green;
     }
Выбирает все посещённые элементы <a> и окрашивает их в цвет purple.
 a:visited {
     color: purple;
 }
 Если вас спросят о том, можете ли вы назвать какие-нибудь псевдоклассы, то вот страница с их большим списком.
 https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

------------------------------------------------------------------------------------------

 Какая разница между следующими видами позиционирования элементов: относительное, фиксированное, абсолютное, статическое?

Относительное позиционирование — это когда элемент смещается относительно его положения, задаваемого по умолчанию.
Фиксированное позиционирование — это когда настраивают положение элемента, ориентируясь на края окна браузера.
Абсолютное позиционирование — это размещение элемента относительно ближайшего позиционированного родительского элемента, причём, именно там, где указано разработчиком.
Статическое позиционирование — это режим позиционирования, применяемый по умолчанию, при использовании которого элементы выводятся в том порядке, в котором они описаны в документе.

------------------------------------------------------------------------------------------

 Как пользоваться медиазапросами в CSS?

В медиазапросах используется правило @media, с помощью которого можно применять CSS-стили к различным типам содержимого (необязательный параметр).
Медиазапросы могут использоваться и для настройки элементов страниц с учётом характеристик среды, в которой просматривают страницы.
В качестве медиа-типов были определены следующие: aural, braille, handheld, print, projection, screen, tty, tv

Изменить фоновый цвет любого элемента <div> на "red" в том случае, если ширина окна браузера составляет 600px или меньше
@media only screen and (max-width: 600px) {
    div {
        background-color: red;
    }
}
------------------------------------------------------------------------------------------

 Какая разница между селекторами идентификаторов и классов в CSS?

Идентификаторы (id) уникальны. У элемента может быть только один идентификатор.
На странице может присутствовать лишь один элемент с конкретным идентификатором.

Имена классов (class) не являются уникальными.
Один и тот же класс можно назначать множеству элементов.
Элементу может быть назначено несколько классов.

Если некий стиль нужно применить к нескольким элементам страницы — эту задачу нужно решать с использованием классов.

------------------------------------------------------------------------------------------

Что такое специфичность CSS-селекторов и как она работает?

Если у нескольких правил специфичность одинакова, то к элементу применяется последнее по порядку правило CSS
Согласно спецификации CSS, правило для непосредственно соответствующего элемента всегда будет иметь больший приоритет, чем правила, унаследованные от предка.
Когда при объявлении стиля используется модификатор !important, это объявление получает наивысший приоритет среди всех прочих объявлений.
Хотя технически модификатор !important не имеет со специфичностью ничего общего, он непосредственно на неё влияет.

------------------------------------------------------------------------------------------
В чем разница между «сбросом» и «нормализацией» CSS? Что бы вы выбрали и почему?

reset.css — как и видно по названию файла, сбрасывает большинство стилей браузера, которые в нем заданы по умолчанию (а такие действительно есть, просто откройте голый HTML).

normalize.css — этот файл не только задает стили по умолчанию там где это необходимо, но и исправляет некоторые недостатки старых браузеров (привет IE).

normalize выигрывает по всем параметрам
------------------------------------------------------------------------------------------
Объясните, что такое плавающие элементы (floats) и как они работают.

Плавающие элементы достаточно активно применяются при верстке и в основном служат для воплощения следующих задач:
Обтекание картинок текстом.
Создание врезок.
Расположение слоев по горизонтали (добавление колонок).

Все это выполняет одно стилевое свойство float


------------------------------------------------------------------------------------------

Объясните, что такое z-index и как формируется контекст наложения.

Свойство z-index определяет положение элемента и нижестоящих элементов по оси z.
В случае перекрытия элементов, это значение определяет порядок наложения.
В общем случае, элементы с большим z-index перекрывают элементы с меньшим.

------------------------------------------------------------------------------------------
Объясните, что такое блочный контекст форматирования и как он работает.

Блочный контекст форматирования — часть механизма отображения веб-страницы в CSS.
Это та область, в которой происходит расположение блочных элементов, и в котором плавающие элементы взаимодействуют с другими элементами.


------------------------------------------------------------------------------------------
Какие вы знаете методы запрета обтекания (clearing) и в каких случаях они применяются?

свойства
Свойство clear принимает следующие значения:
left: очищает объекты, обтекаемые слева.
right: очищает объекты, обтекаемые справа.
both: очищает любые обтекаемые объекты, слева или справа.

Альтернативный метод — это задать свойство overflow для обёртки (wrapper) на значение отличное от visible
overflow: auto;

Современный способ решения этой проблемы — это использование значения flow-root свойства display
display: flow-root

------------------------------------------------------------------------------------------

Как вы обеспечиваете отображение страниц в браузерах с ограниченными возможностями?
Какие приёмы/процессы вы при этом используете?

Масштабируемая верстка
Достаточная контрастность текста и фона
Возможность работать с сервисом с помощью клавиатуры

Либо без изменения верстки добавить "Панель комфортного чтения", в которой пользователь может включить функции, для удовлетворения потребностей.

------------------------------------------------------------------------------------------
Какими способами можно визуально скрыть элемент (оставив его доступным только для скринридера)?

С помощью display: none;. Элемент полностью исчезает с веб-страницы, не оставляя и следа.
Задав для элемента visibility: hidden;.
Данный способ убирает элемент из вида, при этом не затрагивая поток html-документа, оставляя пустое пространство в том месте, где данный элемент должен был находиться

С помощью свойства opacity. Значение opacity: 0; делает прозрачным весь элемент целиком, включая его содержимое, а не только фон элемента.
Данный способ действует аналогично с visibility: hidden, отличие состоит лишь в том, что свойство opacity введено в спецификацию CSS3


------------------------------------------------------------------------------------------

Вы знакомы со стилизацией SVG?

SVG (Scalable Vector Graphics) является подмножеством языка XML и предназначен для создания графики.

SVG можно использовать для статических изображений, а также для анимаций и создания пользовательских интерфейсов.

Как и прочие языки, основанные на XML, SVG поддерживает использование таблиц стилей CSS, что позволяет отделить различные варианты визуального отображения от структуры данных.

Кроме того, таблицы стилей, которые вы используете в других языках разметки документов, могут содержать ссылку на SVG графику, в тех местах, где необходимо изображение.
Например, в таблице стилей, для вашего HTML документа, можно указать ссылку (URL) на SVG графику в свойстве background.

------------------------------------------------------------------------------------------

На что нужно обратить внимание при написании эффективного CSS?

Каскад, специфичность и наследование
Каскад таблицы стилей, если говорить упрощённо, означает, что порядок следования правил в CSS имеет значение; когда применимы два правила, имеющие одинаковую специфичность, используется то, которое идёт в CSS последним.

Специфичность элементов, например class более спецефичен, чем h1


------------------------------------------------------------------------------------------
Какие преимущества/недостатки в использовании CSS препроцессоров?
Опишите, что вам нравится и не нравится в CSS препроцессорах, которыми вы пользовались.

Недостаток:
нужен дополнительный компилятор для перекомпиляции вашего CSS-кода, что означает, что в браузере есть дополнительный процесс, и скорость отображения веб-страниц будет снижаться

Преимущества:
Вложенность
использование переменных для ширины высоты и тд
возможность использования @import для разделения функционала
Наличие @mixin, который повысит эффективность при использовании повторного кода.

------------------------------------------------------------------------------------------
Как вы реализуете макет, который использует нестандартные шрифты?

Подключить шрифты через тег <link>
Использовать их в файле со стилями


------------------------------------------------------------------------------------------
Объясните, как браузер определяет, на какие элементы накладывать CSS стили?

После того как браузер получает HTML страницу, он преобразует HTML в DOM дерево, забирает все ресурсы и описания, связанные с HTML документом.
Анализирует CSS код и раскладывает их по элементам.
Формируется дерево представления, в котором отображены связи и иерархия всех элементов DOM дерева.
Визуельно отображается контент на странице.


------------------------------------------------------------------------------------------

Объясните своими словами, что такое блочная модель.

Когда каждый элемент в CSS заключен в блок


------------------------------------------------------------------------------------------
Что делает * { box-sizing: border-box; }? В чем его преимущества?

border-box говорит браузеру учитывать любые границы и внутренние отступы в значениях, которые вы указываете в ширине и высоте элемента.
Если вы выставите элементу ширину 100 пикселей, то эти 100 пикселей будут включать в себя границы и внутренние отступы, а контент сожмётся, чтобы выделить для них место.
Обычно это упрощает работу с размерами элементов.


------------------------------------------------------------------------------------------

В чем разница между строчным и блочно-строчным элементом?

Если элемент определён как блочный, то он будет вести себя следующим образом:

Начнётся с новой строки.
Будет расширяться вдоль строки таким образом, чтобы заполнить всё пространство, доступное в её контейнере. В большинстве случаев это означает, что блок станет такой же ширины, как и его контейнер, заполняя 100% доступного пространства.
Будут применяться свойства width и height.
Внешние и внутренние отступы, рамка будут отодвигать от него другие элементы.

Если элемент имеет тип отображения inline (строчный), то:

Он не будет начинаться с новой строки.
Свойства width и height не будут применяться.
Вертикальные внешние и внутренние отступы, рамки будут применяться, но не будут отодвигать другие строчные элементы.
Горизонтальные внешние и внутренние отступы, рамки будут применяться и будут отодвигать другие строчные элементы.


------------------------------------------------------------------------------------------
Какими CSS-фреймворками вы пользовались? Что бы вы хотели в них изменить/улучшить?

Bootstrap
В Bootstrap очень специфический дизайн и внешний вид, которые трудно переопределить, если вы выбираете другой стиль.
Он широко использует декларацию !important
------------------------------------------------------------------------------------------

Можете ли вы объяснить разницу между отзывчивым (responsive) сайтом и сайтом, сделанным по принципу mobile-first?

Философия подхода mobile-first заключается в том, что сначала создается прототип дизайна для самого маленького экрана, а затем разработчики переходят к дисплеям бо́льших размеров.
При сравнении подходов “сначала десктоп” и “сначала мобильные” часто упоминается две методологии, которые помогают лучше понять их основную логику:

Изящная деградация – изначально интерфейс продумывается со всеми сложностями, наиболее полным набором функций и различных эффектов. Затем часть элементов отсекается для устройств с более слабыми характеристиками. Именно так работают адаптивные сайты, разработанные по принципу Desktop First.

Прогрессивное развитие – означает разработку продукта, рассчитанного, в первую очередь, на устройства с большим количеством ограничений.
Такая версия обладает самым необходимым набором функций и может постепенно обрастать новыми опциями в зависимости от технических возможностей других устройств.
Таким образом, создав базовый макет для мобильного телефона, мы получаем сайт, который будет гарантированно работать на планшетах, ноутбуках и ПК.


Responsive сайт - сайт с резиновым макетом на основе пропорций Гридов, который подстраивается под ширину экрана.
------------------------------------------------------------------------------------------
Вы имеете опыт работы с ретиновой графикой? Если да, то какие методы вы использовали?

HTML и CSS масштабирование ....

------------------------------------------------------------------------------------------
В каком случае вы предпочтёте использовать translate() вместо абсолютного позиционирования и наоборот? И почему?

В случае если необходимо, чтобы была поддержка IE8 и ниже необходимо использовать позиционирование, так как transform относится к CSS3, а position к CSS2.

------------------------------------------------------------------------------------------
Как изменить цвет в svg-файле?



------------------------------------------------------------------------------------------

*/