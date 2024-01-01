// Предположим, вы - замечательный родитель и хотите дать своим детям несколько печений.
// Но вы должны дать каждому ребенку не более одного печенья.
//
// У каждого ребенка i есть коэффициент жадности g[i], который является минимальным размером печенья, которым ребенок будет доволен;
// и у каждого печенья j есть размер s[j].Если s[j] >= g[i], мы можем назначить печенье j ребенку i, и ребенок i будет доволен.
// Ваша цель - максимизировать количество контентных детей и вывести максимальное количество.
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
//  Используем жадный алгоритм  
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let childIndex = 0;
  let cookieIndex = 0;
  let contentChildren = 0;

  while (childIndex < g.length && cookieIndex < s.length) {
    if (g[childIndex] <= s[cookieIndex]) {
      contentChildren++;
      childIndex++;
    }
    cookieIndex++;
  }

  return contentChildren;
};
