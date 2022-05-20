import { css } from '@emotion/react'

export const postStyles = css`
  width: 100%;
  max-width: var(--reading-width);
  margin: 0 auto;
  line-height: 1.5;

  @media (max-width: 800px) {
    padding: 0 2.5ch;
  }
`

export const postContainer = css`
  margin-top: 0;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-accent);
    margin-top: 2.5ch;
  }

  hr {
    margin: 5ch 0;
  }

  ul,
  ol {
    list-style: square;
    color: var(--color-accent);

    > li + li {
      margin-top: 1ch;
    }
  }

  a {
    color: var(--color-text);
    text-decoration: underline dotted 2px var(--color-accent);
    transition: all 250ms ease-in-out;

    :hover,
    :focus {
      color: var(--color-accent);
      text-decoration: none;
    }
  }
`
