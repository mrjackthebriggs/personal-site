import { error } from '@sveltejs/kit';

export async function load({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const articles = import.meta.glob('../Articles/*.md');
  const filePath = `../Articles/${slug}.md`;
  const resolver = articles[filePath];

  if (!resolver) {
    throw error(404, 'Article not found');
  }

  const module = await resolver() as { metadata?: Record<string, string> };

  return {
    slug,
    title: module.metadata?.title ?? slug,
    description: module.metadata?.description ?? ''
  };
}
