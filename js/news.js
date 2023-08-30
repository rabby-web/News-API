const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  const newsCategory = data.data.news_category;
  console.log(newsCategory);
  newsCategory.forEach((category) => {
    const ulContainer = document.getElementById("ul-list");
    const li = document.createElement("li");
    li.innerHTML = `
        <li><a>${category.category_name}</a></li>
        `;
    ulContainer.appendChild(li);
  });
};
handleCategory();
