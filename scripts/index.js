// import Pickr from 'https://cdn.jsdelivr.net/npm/@simonwep/pickr@0.6.0/dist/pickr.min.js'
import {id, $, $$} from './query/index.js'
import {renderImage} from './image.js'

const $primaryPicker = id('color-primary')
const $secondaryPicker = id('color-secondary')
const $$colors = $$('.jscolor')

const $width = id('width')
const $height = id('height')
const $predefined = id('predefined')
const $number = id('number')
const $office = id('office')

const $image = id('image')

const ready = event => {
  $$colors.forEach($color => {
    // https://github.com/Simonwep/pickr
    const pickr = Pickr.create({
      el: $color,

      components: {

          // Main components
          preview: true,

          // Input / output Options
          interaction: {
              hex: true,
              input: true,
              clear: true,
              save: true
          }
      }
    });
  })
}

// TODO: convert to canvas https://jsfiddle.net/Wijmo5/h2L3gw88/

renderImage()

document.addEventListener('DOMContentLoaded', ready)