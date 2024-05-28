import fs from "fs";
import { type Metadata } from "next";
import path from "path";

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontmatter = fileContent.match(frontmatterRegex)?.[1] ?? "";
  const metadata = frontmatter
    .split("\n")
    .map((line) => line.split(":").map((part) => part.trim()))
    .reduce(
      (acc, [key, value]) => {
        if (!key) return acc;

        // @ts-expect-error weird sh*t
        acc[key] = value;
        return acc;
      },
      {} as Record<string, string>,
    );

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs
    .readdirSync(dir)
    .filter(
      (file) => path.extname(file) === ".mdx" || path.extname(file) === ".md",
    );
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts(...subPaths: string[]) {
  return getMDXData(path.join(process.cwd(), "src", "markdown", ...subPaths));
}

export const getFolderNames = () => {
  return fs
    .readdirSync(path.join(process.cwd(), "src", "markdown"))
    .filter((dir) =>
      fs
        .statSync(path.join(process.cwd(), "src", "markdown", dir))
        .isDirectory(),
    )
    .map((dir) => dir.toLocaleLowerCase());
};

export const getSidebarItems = () => {
  return [
    {
      path: "/home/mdx/eco",
      label: "Ecografía",
    },
    {
      path: "/home/mdx/funcionamiento",
      label: "Funcionamiento",
    },
    {
      path: "/home/mdx/patologias",
      label: "Patologías",
    },
    {
      path: "/home/mdx/tecnicas-de-img",
      label: "Técnicas de imagen",
    },
  ];
};
