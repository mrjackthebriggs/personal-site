export async function load() {
  try {
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
          img: module.metadata?.img ?? null,
          datetime: module.metadata?.datetime ?? null,
          author: module.metadata?.author ?? null,
          path: `/politics/${slug}`
        };
      })
    );

    return {
      articleData: articleData.sort((a, b) => a.title.localeCompare(b.title))
    };
  } catch (error) {
    console.error('Error loading articles:', error);
    return {
      articleData: []
    };
  }
}