import React, { useEffect, useState } from "react";

const categories = [
  "technology",
  "business",
  "sports",
  "health",
  "entertainment",
  "science",
  "politics",
  "world",
];

const News = () => {
  const [newsData, setNewsData] = useState({});
  const [availableCategories, setAvailableCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const apiKey = "BPONVz6NioIhZXPwHI0p5YyGk0urHJNalajrG0Z8"; // ✅ your token
        const baseUrl = "https://api.thenewsapi.com/v1/news/top";

        const promises = categories.map((category) =>
          fetch(`${baseUrl}?api_token=${apiKey}&categories=${category}&locale=in`)
            .then((res) => res.json())
            .catch(() => ({ data: [] }))
        );

        const results = await Promise.all(promises);
        const formattedData = {};
        const validCategories = [];

        results.forEach((data, i) => {
          const categoryNews = data.data || [];
          if (categoryNews.length > 0) {
            formattedData[categories[i]] = categoryNews;
            validCategories.push(categories[i]);
          }
        });

        setNewsData(formattedData);
        setAvailableCategories(validCategories);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch news");
        setLoading(false);
      }
    };

    fetchAllCategories();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <p className="text-center text-red-500 mt-10 font-medium">{error}</p>
    );

  if (availableCategories.length === 0)
    return (
      <p className="text-center text-gray-600 dark:text-gray-400 mt-10 font-medium">
        No news available right now. Please try again later.
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10 text-center">
          Latest News by Category 📰
        </h1>

        {availableCategories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-5 capitalize">
              {category} News
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsData[category].map((article, index) => (
                <div
                  key={index}
                  className="bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
                >
                  {article.image_url && (
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-5 flex flex-col justify-between h-[250px]">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                        {article.description || "No description available."}
                      </p>
                    </div>

                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
