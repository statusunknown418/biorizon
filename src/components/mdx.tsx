import React from "react";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";

type CustomMDXProps = MDXRemoteProps;

export function CustomMDX(props: CustomMDXProps) {
  return <MDXRemote {...props} components={{ ...(props.components ?? {}) }} />;
}
