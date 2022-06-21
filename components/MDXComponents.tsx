import NextLink from "next/link";
import { Heading, Link } from "@chakra-ui/react";
import Image from "next/image";

interface Props {
  [key: string]: any;
}

const CustomLink = (props: Props) => {
  const href = props.href;
  const isInternalLink = href?.startsWith("/") || href?.startsWith("#");

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <Link color="link" {...props} fontWeight="bold" className="mdx">
          {props.children}
        </Link>
      </NextLink>
    );
  }

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      color="link"
      className="mdx"
      fontWeight="bold"
      {...props}
    >
      {props.children}
    </Link>
  );
};

const MDXComponents = {
  a: CustomLink,
  h1: (props: Props) => <Heading size="2xl" my="0.5rem" {...props} />,
  h2: (props: Props) => <Heading size="xl" my="0.5rem" {...props} />,
  h3: (props: Props) => <Heading size="lg" my="0.5rem" {...props} />,
  h4: (props: Props) => <Heading size="sm" my="0.5rem" {...props} />,
  Image: (props: Props) => (
    <Image
      {...props}
      src={`/images/posts/${props.image}`}
      placeholder="blur"
      alt={props.id}
    />
  ),
};

export default MDXComponents;
