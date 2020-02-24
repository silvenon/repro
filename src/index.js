import two from './packages/two'
import three, { two as twoFromThree } from './packages/three'
import four from './packages/four'

console.log(two)
console.log(`three imports ${JSON.stringify(twoFromThree)}`)
console.log(three)
console.log(four)
