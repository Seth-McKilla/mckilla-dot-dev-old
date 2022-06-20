export type Post = {
  slug: string;
  meta: {
    image: string;
    series: string | null;
    title: string;
    description: string;
    date: string;
    readTime: number;
    tags: string;
  };
  content: string;
};
