type Color = 'rose' | 'pink' | 'fuchsia' | 'purple' | 'violet' | 'indigo' | 'blue' | 'lightBlue' | 'cyan' | 'teal' | 'emerald' | 'green' | 'lime' | 'yellow' | 'amber' | 'orange' | 'red' | 'warmGray' | 'trueGray' | 'gray' | 'coolGray' | 'blueGray'
type Shade = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

declare const colors: Record<Color, Record<Shade, string>>

export default colors
