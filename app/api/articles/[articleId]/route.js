import { getArticle } from "@/services/nostr";

export async function GET(request, { params }) {
  let articleId = params.articleId;
  try {
    let article = await getArticle(articleId);
    return Response.json(article);
  } catch (e) {
    return Response.json({ error: e });
  }
}
