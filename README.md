# INFO
При заході в додаток ми бачимо SearchBar та 2 кнопи - Load та Create\
При натиску на кнопку Load, якщо ми не ввели в Input нічого, то нам виведе помилку - Board ID must be a 24-character hex string\
Якщо користувач введе в input правильний формат даних, але такого id в базі даних нема, то йому виведе помилку - Board with such id doesn't exist\
Якщо все правильно, то кнопка Create зміниться на Delete, при натисканні на яку весь Board та всі tasks в ньому видаляються\
При натиску на кнопку Create ми бачимо alert з новим BoardId, він вставляється в input і користувач далі може робити нові таски

У користувача є змога редагувати, видаляти та переносити завдання з одної таблиці в другу, це реалізовано через drag and drop\n
При редагуванні таски(натиск на кнопку з олівчиком) ми можемо редагувати назву таски та опис, а щоб зберегти результат достатньо натиснути ***Enter***

