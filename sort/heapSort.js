// Создание кучи: Преобразуем массив в максимальную кучу, так чтобы каждый родительский узел был больше своих дочерних узлов.
// Сортировка: Поочерёдно удаляем элементы из кучи, перемещая их в конец массива, и восстанавливаем свойства максимальной кучи.
function heapSort(arr) {
  let n = arr.length;

  // Построение кучи (перегруппировка массива)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Один за другим извлекаем элементы из кучи
  for (let i = n - 1; i > 0; i--) {
    // Перемещаем текущий корень в конец
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // вызываем процедуру heapify на уменьшенной куче
    heapify(arr, i, 0);
  }
  return arr;
}

// Процедура для преобразования поддерева в двоичную кучу
function heapify(arr, n, i) {
  let largest = i; // Инициализируем наибольший элемент как корень
  let left = 2 * i + 1; // левый = 2*i + 1
  let right = 2 * i + 2; // правый = 2*i + 2

  // Если левый дочерний элемент больше корня
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // Если правый дочерний элемент больше, чем самый большой элемент на данный момент
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // Если самый большой элемент не корень
  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Обмен элементами

    // Рекурсивно преобразуем затронутое поддерево
    heapify(arr, n, largest);
  }
}
// heapify — эта функция преобразует подмассив в двоичную кучу, начиная с заданного индекса. Она используется для восстановления свойств кучи после каждого удаления элемента.
// heapSort — основная функция, которая преобразует весь массив в кучу с помощью heapify и затем извлекает элементы из кучи для сортировки.