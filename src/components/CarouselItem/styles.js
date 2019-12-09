import styled from 'styled-components';

const width = 250;
const height = width / (16 / 9);

export const Item = styled.div`
  width: ${width}px;
  height: ${height}px;
  margin-right: 10px;
  display: inline-block;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  overflow: hidden;
  transition: 0.45s all;
  transform-origin: center left;
`;

export const Cover = styled.img`
  width: ${width}px;
  height: ${height}px;
  object-fit: cover;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-bottom: 20px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  transition: 0.45s opacity;

  h3 {
    margin: 0 0 0 10px;
    font-size: 12px;
  }

  p {
    margin: 0 0 0 10px;
    font-size: 10px;
    opacity: 0.9;
    color: #fff;
  }
`;

export const Action = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 28px;
    margin-right: 8px;
    transition: opacity 0.5s ease;

    &:hover {
      opacity: 0.9;
    }
  }
`;
