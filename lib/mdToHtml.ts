import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: any) {
  return remark().use(html).process(markdown).toString();
}
