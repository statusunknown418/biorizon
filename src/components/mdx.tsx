import React from "react";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";

type CustomMDXProps = MDXRemoteProps;

export function Table({
  data,
}: {
  data: {
    headers: string[];
    rows: string[][];
  };
}) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

const components = {
  Table,
};

export async function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components ?? {}) }}
    />
  );
}
