const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  const newsCategory = data.data.news_category;
  const newsItems = newsCategory.slice(2, 8);
  //   console.log(newsCategory, newsItems);
  newsItems.forEach((category) => {
    const ulContainer = document.getElementById("ul-list");
    const li = document.createElement("li");
    li.innerHTML = `
        <li onclick="handleLoadNews('${category.category_id}')"><a>${category.category_name}</a></li>
        `;
    ulContainer.appendChild(li);
  });
};
const handleLoadNews = async (categoryId) => {
  console.log(categoryId);
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`
  );
  const data = await response.json();
  const newsIdCategory = data.data;
  //   console.log(newsIdCategory.author.name);
  newsIdCategory?.forEach((news) => {
    console.log(news.author.name);
    const cardContainer = document.getElementById("card-container");
    // cardContainer.innerHTML = "";
    const div = document.createElement("div");
    // div.classList = `grid grid-cols-3 gap-4 m-5 md:m-10`;
    div.innerHTML = `
    <div class="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="${news?.image_url}"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              ${news?.title.slice(0, 40)}
              <div class="badge badge-secondary p-5">${
                news?.rating?.badge
              }</div>
            </h2>
            <p>
              ${news?.details.slice(0, 60)}
            </p>
            <h3> totoal viws: ${
              news.total_view ? news.total_view : "no vviews"
            }</h3>
            <div class="card-footer flex justify-between mt-8">
              <div class="flex">
                <div>
                  <div class="avatar online">
                    <div class="w-14 rounded-full">
                      <img
                        src="${news?.author?.img}"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h6>${news?.author?.name}</h6>
                  <small>${news?.author?.published_date}</small>
                </div>
              </div>
              <div class="card-detaild-btn">
                <button
                  class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
    `;

    cardContainer.appendChild(div);
  });
  console.log(data);
};
handleLoadNews();
handleCategory();
