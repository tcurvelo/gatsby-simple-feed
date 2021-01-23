import React from 'react';
import { graphql } from 'gatsby';

export default function IndexPage({data}) {
  const items = data.items.nodes;
  return (
    <ul>
        {items.map((item) => (
          <li key={item.id}>
              <a href={item.url}>
                <h2>{item.title}</h2>
                <img src={item.image} alt={item.title} />
              </a>
          </li>
        ))}
    </ul>
  )
}

export const query = graphql`
  query {
    items: allItem(filter: {url: {ne: null}}) {
      nodes {
        price
        title
        url
        image
        id
      }
    }
  }
`