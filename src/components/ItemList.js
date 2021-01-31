import React from 'react';
import StackGrid from "react-stack-grid";
import styled from 'styled-components';

const SingleItemStyle = styled.div`
  position: relative;
  font-family: "Open Sans", Helvetica, Tahoma, sans;
  font-size: 14px;

  .title, .price {
    font-weight: bold;
    padding: 0.3rem;
    position: absolute;
    text-align: center;
    width: 100%;

    visibility: hidden;
    opacity: 0.8;
    background-color: #7a1c1c;
    color: white;

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    .title, .price {
      visibility: visible;
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
      <a href={item.url} target="_blank" rel="noreferrer">
        <img src={item.image} alt={item.title} />
        <div className="title">{item.title}</div>
        <div className="price">{item.price}</div>
      </a>
  </SingleItemStyle>
)

export default function ItemList({items}) {
  return (
    <StackGrid
      columnWidth={250} gutterWidth={25} gutterHeight={5}
      monitorImagesLoaded={true}
    >
      {items.map((item) => <SingleItem item={item} />)}
    </StackGrid>
  )
}