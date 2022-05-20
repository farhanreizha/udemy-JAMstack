import { css } from '@emotion/react'

export const wrapper = css`
  max-width: var(--page-width);
  margin: 0 auto;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5ch;

  @media (max-width: 800px) {
    padding: 0 1rem;
    grid-auto-flow: row;
  }
`

export const profilePic = css`
  border-radius: 50%/10%;
  object-fit: contain;
`

export const text = css`
  align-self: center;
  line-height: 1.5;
  font-size: 1.2rem;
`
