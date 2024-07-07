import fs from "fs";
import path from "path";
import matter from "gray-matter";

// postsディレクトリを指定
const postsDirectory = path.join(process.cwd(), "posts");

// postsディレクトリ内のファイル名を取得
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

// slugを指定して、ファイルの中身を取得
// matterでfrontmatterとcontentに分ける
export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { data, content };
}

// 全ての記事を取得
export async function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => {
    const { data } = getPostBySlug(slug);
    return {
      slug: slug.replace(/\.mdx$/, ""),
      frontMatter: data,
    };
  });

  return posts;
}
