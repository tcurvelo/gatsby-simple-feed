import React from 'react';
import { graphql } from 'gatsby';
import ItemList from '../components/ItemList';

export default function IndexPage({data}) {
  return <ItemList items={data.items.nodes}/>
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