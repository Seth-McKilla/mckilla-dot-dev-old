export type Post = {
  slug: string;
  meta: {
    title: string;
    series: string | null;
    tags: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: number;
  };
  content: string;
};
