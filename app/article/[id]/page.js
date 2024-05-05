import { formatDate, parseMarkdown } from '@/utils/utils';
import {
  getArticle,
  getProfileMetadata,
  getLightningAddress,
} from '@/services/nostr';

export default async function ArticleDetail({ params }) {
  const article = await getArticle(params.id);
  const titleTag = article.tags.find((tag) => tag[0] === 'title');
  const summaryTag = article.tags.find((tag) => tag[0] === 'summary');
  const imageTag = article.tags.find((tag) => tag[0] === 'image');
  const title = titleTag ? titleTag[1] : 'Default Title';
  const summary = summaryTag ? summaryTag[1] : 'Default Summary';
  const nip05 = await getProfileMetadata(article.pubkey);
  const lud16 = await getLightningAddress(article.pubkey);

  const parsedContent = await parseMarkdown(article.content);

  return (
    <main className='flex flex-col items-center text-white'>
      <div className='text-center'>
        <h1 className='text-4xl my-6'>{title}</h1>
        <p className='text-lg bold font-medium'>{summary}</p>
        <p>Author: {nip05}</p>
        <p>Date: {formatDate(article.created_at)}</p>
        <div className='my-6'>
          <a
            className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
            href={`lightning:${lud16}`}
          >
            Tip
          </a>
        </div>
      </div>
      <div
        className='content-section prose prose-lg text-white w-full max-w-2xl overflow-x-auto'
        dangerouslySetInnerHTML={{ __html: parsedContent }}
      />
    </main>
  );
}
