const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log('Кількість категорій:', categoriesItems.length);

categoriesItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul li');

  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryItems.length}`);
});
