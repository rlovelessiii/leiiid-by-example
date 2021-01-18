import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.7,
  scaleRatio: 1.5,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  googleFonts: [
    {
      name: 'Ubuntu',
      styles: ['400', '400i', '700', '700i']
    }
  ],
  headerFontFamily: ['Ubuntu', 'sans-serif'],
  bodyFontFamily: ['Ubuntu', 'serif'],
})

export default typography
export const rhythm = typography.rhythm
