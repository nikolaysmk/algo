var RandomizedSet = function () {
  this.map = new Map(); // Для хранения значений и их индексов
  this.array = []; // Для хранения элементов
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false;
  }
  this.map.set(val, this.array.length);
  this.array.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false;
  }

  // Получаем индекс удаляемого элемента
  let index = this.map.get(val);
  let lastIndex = this.array.length - 1;

  // Если удаляемый элемент не последний, меняем его местами с последним
  if (index < lastIndex) {
    let lastVal = this.array[lastIndex];
    this.array[index] = lastVal;
    this.map.set(lastVal, index);
  }

  // Удаляем последний элемент
  this.array.pop();
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let randomIndex = Math.floor(Math.random() * this.array.length);
  return this.array[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
