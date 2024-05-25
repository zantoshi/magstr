import Link from "next/link";
import ArticleCard from "@/components/cards/ArticleCard";
import { getArticles, getProfileMetadata } from "@/services/nostr";
import { formatDate } from "@/utils/utils";

const ArticleCardSection = async ({ title, accented = false }) => {
  const fetchArticles = async () => {
    try {
      let articlesData = await getArticles();
    } catch (error) {
      console.error("Error fetching articles:", error);
      setLoading(false);
    }
  };

  const articles = await getArticles();

  return (
    <section
      className={`py-12 md:py-16 lg:py-20 ${
        accented ? "bg-gradient-to-r from-indigo-100 to-purple-100" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-900">{title}</h2>
          <Link className="text-indigo-900 hover:underline" href="#">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {articles.map(async (article) => {
            const titleTag = article.tags.find((tag) => tag[0] === "title");
            const imageTag = article.tags.find((tag) => tag[0] === "image");
            const title = titleTag ? titleTag[1] : "Default Title";
            const cardImage = imageTag ? imageTag[1] : "Default Image URL";
            const nip05 = await getProfileMetadata(article.pubkey);

            return (
              <ArticleCard
                key={article.id}
                title={title}
                author={nip05}
                date={formatDate(article.created_at)}
                cardImage={cardImage}
                link={`/article/${article.id}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArticleCardSection;
