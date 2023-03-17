import { css } from "styled-components"

export const theme = {
    colors: {
      primary: '#4F4F4F',
      secondary: '#F4F4F4',
      grayed: '#808080', 
      light: '#ffffff',
    },
    fonts: {
      montserrat: "'Montserrat', sans-serif",
      roboto: "'Roboto' , sans-serif",
    }
}

export const breakpoints = {
  lg: 1224,
  md: 960,
  sm: 768,
  xs: 575,
}

export const screenWidth = {
  mobile: `${breakpoints.xs}px`, // xs - 575px
  tablet: `${breakpoints.sm}px`, // sm - 768px
  laptop: `${breakpoints.md}px`, // md - 960px
  desktop: `${breakpoints.lg}px`, // lg - 1224px
}

// NOTE: Nico confirmed we can update desktop breakpoint to 1200px, so it matches Bootstrap breakpoints

/* For mobile-first design */
export const breakpoint = Object.keys(screenWidth).reduce((acc, key) => {
  acc[key] = (literals, ...placeholders) =>
    css`
      @media screen and (max-width: ${screenWidth[key]}) {
        ${css(literals, ...placeholders)}
      }
    `
  return acc
}, {})