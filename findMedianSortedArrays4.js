// Функция для нахождения медианы двух отсортированных массивов
function findMedianSortedArrays(nums1, nums2) {
  // Если первый массив больше второго, меняем их местами для упрощения логики
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let low = 0,
    high = m;

  while (low <= high) {
    // Находим середину первого массива
    const partitionX = Math.floor((low + high) / 2);
    // Вычисляем точку разделения для второго массива
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    // Находим максимальный и минимальный элементы с обеих сторон разделения для первого массива
    const maxX =
      partitionX === 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];
    const minX = partitionX === m ? Number.MAX_SAFE_INTEGER : nums1[partitionX];

    // Находим максимальный и минимальный элементы с обеих сторон разделения для второго массива
    const maxY =
      partitionY === 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1];
    const minY = partitionY === n ? Number.MAX_SAFE_INTEGER : nums2[partitionY];

    // Проверяем, нашли ли мы правильное разделение
    if (maxX <= minY && maxY <= minX) {
      // Если общее количество элементов четное
      if ((m + n) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        // Если общее количество элементов нечетное
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      // Нужно переместить разделение влево
      high = partitionX - 1;
    } else {
      // Нужно переместить разделение вправо
      low = partitionX + 1;
    }
  }
}
