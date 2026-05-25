export async function load() {
  const articles = import.meta.glob('./Articles/*.md');

  const articleData = await Promise.all(
    Object.entries(articles).map(async ([path, resolver]) => {
      const module = await resolver() as { metadata?: Record<string, string> };
      const fileName = path.split('/').pop() ?? '';
      const slug = fileName.replace(/\.md$/, '');

      return {
        slug,
        title: module.metadata?.title ?? slug,
        description: module.metadata?.description ?? '',
        path: `/politics/${slug}`
      };
    })
  );

  return {
    articleData: articleData.sort((a, b) => a.title.localeCompare(b.title))
  };
}