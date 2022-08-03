import chroma from 'chroma-js'
import ColorScheme from 'color-scheme'

import * as settings from '../config/colorGroups.js'

import { updateMultiple } from './storageHelper.js'

// ----------- ASSIGNABLES -----------
export const orange = [
  settings.cg28_3d1300,
  settings.cg39_5a1e02,
  settings.cg47_762d0a,
  settings.cg57_9b4215,
  settings.cg69_bd561d,
  settings.cg78_db6d28,
  settings.cg83_f0883e,
  settings.cg97_ffa657,
  settings.cg101_ffc680,
  settings.cg105_ffdfb6
]

export const yellow = [
  settings.cg23_341a00,
  settings.cg34_4b2900,
  settings.cg44_693e00,
  settings.cg52_845306,
  settings.cg59_9e6a03,
  settings.cg67_bb8009,
  settings.cg74_d29922,
  settings.cg80_e3b341,
  settings.cg85_f2cc60,
  settings.cg90_f8e3a1
]

export const gray = [
  settings.cg8_0d1117,
  settings.cg13_161b22,
  settings.cg17_21262d,
  settings.cg22_30363d,
  settings.cg32_484f58,
  settings.cg46_6e7681,
  settings.cg55_8b949e,
  settings.cg64_b1bac4,
  settings.cg71_c9d1d9,
  settings.cg84_f0f6fc
]

export const blue = [
  settings.cg6_051d4d,
  settings.cg7_0c2d6b,
  settings.cg9_0d419d,
  settings.cg12_1158c7,
  settings.cg16_1f6feb,
  settings.cg24_388bfd,
  settings.cg38_58a6ff,
  settings.cg49_79c0ff,
  settings.cg61_a5d6ff,
  settings.cg72_cae8ff
]

export const green = [
  settings.cg5_04260f,
  settings.cg4_033a16,
  settings.cg11_0f5323,
  settings.cg14_196c2e,
  settings.cg18_238636,
  settings.cg21_2ea043,
  settings.cg29_3fb950,
  settings.cg36_56d364,
  settings.cg51_7ee787,
  settings.cg63_aff5b4
]

export const red = [
  settings.cg33_490202,
  settings.cg43_67060c,
  settings.cg56_8e1519,
  settings.cg66_b62324,
  settings.cg76_da3633,
  settings.cg89_f85149,
  settings.cg93_ff7b72,
  settings.cg95_ffa198,
  settings.cg99_ffc1ba,
  settings.cg103_ffdcd7
]

export const purple = [
  settings.cg20_271052,
  settings.cg27_3c1e70,
  settings.cg35_553098,
  settings.cg45_6e40c9,
  settings.cg54_8957e5,
  settings.cg60_a371f7,
  settings.cg68_bc8cff,
  settings.cg75_d2a8ff,
  settings.cg79_e2c5ff,
  settings.cg82_eddeff
]

export const pink = [
  settings.cg30_42062a,
  settings.cg40_5e103e,
  settings.cg50_7d2457,
  settings.cg58_9e3670,
  settings.cg70_bf4b8a,
  settings.cg77_db61a2,
  settings.cg87_f778ba,
  settings.cg94_ff9bce,
  settings.cg98_ffbedd,
  settings.cg102_ffdaec
]

export const coral = [
  settings.cg31_460701,
  settings.cg42_640D04,
  settings.cg53_872012,
  settings.cg62_AC3220,
  settings.cg73_CF462D,
  settings.cg81_EA6045,
  settings.cg88_F78166,
  settings.cg96_FFA28B,
  settings.cg100_FFC2B2,
  settings.cg105_ffdfb6
]

export const calendar = [
  settings.cg10_0e4429,
  settings.cg2_006d32,
  settings.cg19_26a641,
  settings.cg26_39d353
]

// ----------- METHODS -----------

export default function updateScale (color) {
  updateAnnoyances(color)
  // gray
  updateSpecific(color, 0, 0, gray)
  // blue
  updateSpecific(color, 1, 0, blue)
  // green
  updateSpecific(color, 3, 0, green)
  // yellow
  updateSpecific(color, 2, 0, yellow)
  // orange
  updateSpecific(color, 1.5, 0, orange)
  // red
  updateSpecific(color, 0, 2, red)
  // purple
  updateSpecific(color, 0, 2.5, purple)
  // pink
  updateSpecific(color, 2, 0, pink)
  // coral
  updateSpecific(color, 2, 0, coral)

  // calendar
  updateCalendar(color, 2, calendar)
}

export function updateText (color) {
  updateMultiple(settings.cg106_ffffff, chroma(color).hex())
}

export function updateCalendar (color, saturate, scale) {
  if (/^\d/.test(color.slice(-4))) {
    // scale = scale.reverse();
  }

  for (let i = 0; i < scale.length; i++) {
    updateMultiple(
      scale[i],
      chroma(color)
        .brighten(3)
        .saturate(saturate)
        .alpha((i + 1) * 0.2)
        .hex()
    )
  }
}

export function updateAnnoyances (color) {
  if (/^\d/.test(color.slice(-4))) {
    updateMultiple(settings.cg3_010409, chroma(color).brighten(0.3).hex())
    updateMultiple(settings.cg106_ffffff, chroma(color).darken(4).hex())
    updateMultiple(settings.cgshadows, chroma(color).darken(3.6).hex())
  } else {
    updateMultiple(settings.cg3_010409, chroma(color).darken(0.3).hex())
    updateMultiple(settings.cg106_ffffff, chroma(color).brighten(4).hex())
    updateMultiple(settings.cgshadows, chroma(color).brighten(3.6).hex())
  }
}

export function updateSpecific (color, desaturate, saturate, scale) {
  if (/^\d/.test(color.slice(-4))) {
    // scale = scale.reverse();
  }

  for (let i = 0; i < scale.length; i++) {
    /^\d/.test(color.slice(-4))
      ? updateMultiple(
        scale[i],
        chroma(color)
          .brighten(i * 0.4)
          .saturate(saturate)
          .desaturate(desaturate)
          .hex()
      )
      : updateMultiple(
        scale[i],
        chroma(color)
          .darken(i * 0.4)
          .saturate(saturate)
          .desaturate(desaturate)
          .hex()
      )
  }
}

export function updateAccent (color) {
  updateCalendar(color)
  updateSpecific(color, 0, 0, blue)
  updateSpecific(color, 0, 0, green)
  updateSpecific(color, 0, 0, yellow)
}

export function generateScheme (color, scheme, variation, distance) {
  const s = new ColorScheme()
  if (scheme === 'analogic') {
    s.from_hex(chroma(color).hex().slice(-6))
      .scheme(scheme)
      .variation(variation)
      .add_complement(true)
      .distance(distance)
  } else {
    s.from_hex(chroma(color).hex().slice(-6))
      .scheme(scheme)
      .variation(variation)
      .distance(distance)
  }

  return s.colors()
}

export function generateSaturation (color, setting) {
  const colors = []
  for (let i = 0; i < 10; i++) {
    /^\d/.test(color.slice(-4))
      ? colors.push(
        chroma(color)
          .darken(i * 0.4)
          .hex()
      )
      : colors.push(
        chroma(color)
          .brighten(i * 0.4)
          .hex()
      )
  }
}
