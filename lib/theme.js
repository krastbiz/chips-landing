import { css } from 'styled-components'

export const theme = {
    colors: {
        primary: '#4F4F4F',
        secondary: '#F4F4F4',
        grayed: '#808080',
        main: '#333333',
        hover: '#4a7f1c',
        red: '#c41e3a',
        active: '#6cb929',
        base: '#ffffff',
        background: '#000000',
        altBackground: '#1f1f1f',
        greenBackground: '#143818',
        lightGreenBackground: '#376123',
        border: '#ddd',
    },
    fonts: {
        velasans: "'Vela Sans' , send-serif",
        velasansmed: "'Vela Sans Med' , send-serif",
        velasanslight: "'Vela Sans Light' , send-serif",
        segoeUI: "'SegoeUI' , send-serif",
    },
}

export const breakpoints = {
    extlg: 1440,
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
    desktopLarge: `${breakpoints.extlg}px`, // extlg - 1440px
}

/* For desktop-first design */
export const breakpoint = Object.keys(screenWidth).reduce((acc, key) => {
    acc[key] = (literals, ...placeholders) => css`
        @media screen and (max-width: ${screenWidth[key]}) {
            ${css(literals, ...placeholders)}
        }
    `
    return acc
}, {})
