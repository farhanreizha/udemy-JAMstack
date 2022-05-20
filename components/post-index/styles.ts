import { css } from '@emotion/react'

export const indexContainer = css`
  list-style: none;
  margin: 10ch auto 5ch;
  max-width: var(--page-width);

  > li + li {
    margin-top: 3ch;
  }
`

export const postEntry = css`
  display: flex;
  flex-direction: row;
  margin-left: 5ch;
  transition: margin-left 250ms linear;

  :hover svg,
  :focus svg {
    transform: translateY(-25px) translateX(10px) rotate(45deg);
  }

  @media (min-width: 800px) {
    margin-left: 0;
  }
`

export const postBullet = css`
  font-size: 5ch;
  color: var(--color-accent);
  margin-right: 1rem;
  transition: transform 600ms ease-out;
`

export const postWrapper = css``

export const postDate = css`
  display: block;
  width: 100%;
  font-family: monospace;
`

export const postTitle = css`
  display: block;
  padding-top: 0.5rem;
  font-size: 3ch;
  font-weight: 100;
  text-decoration: underline var(--color-accent);
  cursor: pointer;

  :hover,
  :focus {
    text-decoration: none;
  }
`
