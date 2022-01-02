import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import _ from "lodash";

// Types
import { PostCardProps } from "../components";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: any = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field: string) => {
    if (field === "slug") {
      items["slug"] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug: string) => getPostBySlug(slug, fields));
  return _.sortBy(posts, (post: PostCardProps) => post.date).reverse();
}
