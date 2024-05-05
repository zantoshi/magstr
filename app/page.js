import ArticleCard from '@/components/cards/ArticleCard';
import { getArticles, getProfileMetadata } from '@/services/nostr';
import { formatDate } from '@/utils/utils';

export default async function Home() {
  let articles = await getArticles();

  return (
    <main className='max-w-screen-lg mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {articles.map(async (article) => {
          const titleTag = article.tags.find((tag) => tag[0] === 'title');
          const imageTag = article.tags.find((tag) => tag[0] === 'image');
          const title = titleTag ? titleTag[1] : 'Default Title';
          const cardImage = imageTag ? imageTag[1] : 'Default Image URL';
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
    </main>
  );
}
