import React from 'react';
import StackGrid from "react-stack-grid";
import styled from 'styled-components';

const SingleItemStyle = styled.div`
  position: relative;
  font-family: "Open Sans", Helvetica, Tahoma, sans;
  font-size: 14px;

  .title, .price {
    background-color: white;
    color: black;
    font-weight: bold;
    opacity: 0.7;
    padding: 0.3rem;
    position: absolute;
    text-align: center;
    width: 100%;
    &:hover {
      opacity: 1;
      background-color: red;
      color: white;
    }
  }

  .title {
    border-radius: 6px 6px 0 0;
    top: 0;
  }

  .price {
    border-radius: 0 0 6px 6px;
    bottom: 0;
    font-size: 140%;
  }

  img {
    width: 100%;
    display: block;
    border-radius: 6px;
    z-index: 1000000;
  }
`;

const SingleItem = ({item}) => (
  <SingleItemStyle key={item.id}>
      <a href={item.url} target="_blank">
        <img src={item.image} alt={item.title} />
        <div className="title">{item.title}</div>
        <div className="price">{item.price}</div>
      </a>
  </SingleItemStyle>
)

export default function ItemList({items}) {
  return (
    <StackGrid columnWidth={250} gutterWidth={25} gutterHeight={5}>
      {items.map((item) => <SingleItem item={item} />)}
    </StackGrid>
  )
}