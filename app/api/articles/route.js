import { getArticles } from "@/services/nostr";

export async function GET(request) {
  try {
    let articles = await getArticles();
    return Response.json({ articles });
  } catch (e) {
    return Response.json({ error: e });
  }
}
