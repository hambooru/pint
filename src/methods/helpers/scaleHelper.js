import chroma from "chroma-js";

import * as settings from "../config/colorGroups.js";

import {updateMultiple} from "./storageHelper.js";

export function updateAll(color) {
  updateMultiple(settings.cg3_010409, chroma(color).darken(0.3).hex());
  updateMultiple(settings.cg106_ffffff, chroma(color).brighten(4).hex());
  // gray
  updateMultiple(settings.cg8_0d1117, chroma(color).hex());
  updateMultiple(settings.cg13_161b22, chroma(color).brighten(0.3).hex());
  updateMultiple(settings.cg17_21262d, chroma(color).brighten(0.6).hex());
  updateMultiple(settings.cg22_30363d, chroma(color).brighten(0.9).hex());
  updateMultiple(settings.cg32_484f58, chroma(color).brighten(1.2).hex());
  updateMultiple(settings.cg46_6e7681, chroma(color).brighten(1.5).hex());
  updateMultiple(settings.cg55_8b949e, chroma(color).brighten(1.8).hex());
  updateMultiple(settings.cg64_b1bac4, chroma(color).brighten(2.1).hex());
  updateMultiple(settings.cg71_c9d1d9, chroma(color).brighten(3.0).hex());
  updateMultiple(settings.cg84_f0f6fc, chroma(color).brighten(3.3).hex());
  // blue
  updateMultiple(settings.cg6_051d4d, chroma(color).hex());
  updateMultiple(settings.cg7_0c2d6b,
                 chroma(color).brighten(0.3).desaturate(1).hex());
  updateMultiple(settings.cg9_0d419d,
                 chroma(color).brighten(0.6).desaturate(1).hex());
  updateMultiple(settings.cg12_1158c7,
                 chroma(color).brighten(0.9).desaturate(1).hex());
  updateMultiple(settings.cg16_1f6feb,
                 chroma(color).brighten(1.2).desaturate(1).hex());
  updateMultiple(settings.cg24_388bfd,
                 chroma(color).brighten(1.5).desaturate(1).hex());
  updateMultiple(settings.cg38_58a6ff,
                 chroma(color).brighten(1.8).desaturate(1).hex());
  updateMultiple(settings.cg49_79c0ff,
                 chroma(color).brighten(2.1).desaturate(1).hex());
  updateMultiple(settings.cg61_a5d6ff,
                 chroma(color).brighten(3.0).desaturate(1).hex());
  updateMultiple(settings.cg72_cae8ff,
                 chroma(color).brighten(3.3).desaturate(1).hex());
  // green
  updateMultiple(settings.cg5_04260f, chroma(color).hex());
  updateMultiple(settings.cg4_033a16,
                 chroma(color).brighten(0.3).desaturate(3).hex());
  updateMultiple(settings.cg11_0f5323,
                 chroma(color).brighten(0.6).desaturate(3).hex());
  updateMultiple(settings.cg14_196c2e,
                 chroma(color).brighten(0.9).desaturate(3).hex());
  updateMultiple(settings.cg18_238636,
                 chroma(color).brighten(1.2).desaturate(3).hex());
  updateMultiple(settings.cg21_2ea043,
                 chroma(color).brighten(1.5).desaturate(3).hex());
  updateMultiple(settings.cg29_3fb950,
                 chroma(color).brighten(1.8).desaturate(3).hex());
  updateMultiple(settings.cg36_56d364,
                 chroma(color).brighten(2.1).desaturate(3).hex());
  updateMultiple(settings.cg51_7ee787,
                 chroma(color).brighten(3.0).desaturate(3).hex());
  updateMultiple(settings.cg63_aff5b4,
                 chroma(color).brighten(3.3).desaturate(3).hex());
  // yellow
  updateMultiple(settings.cg23_341a00, chroma(color).hex());
  updateMultiple(settings.cg34_4b2900,
                 chroma(color).brighten(0.3).desaturate(2).hex());
  updateMultiple(settings.cg44_693e00,
                 chroma(color).brighten(0.6).desaturate(2).hex());
  updateMultiple(settings.cg52_845306,
                 chroma(color).brighten(0.9).desaturate(2).hex());
  updateMultiple(settings.cg59_9e6a03,
                 chroma(color).brighten(1.2).desaturate(2).hex());
  updateMultiple(settings.cg67_bb8009,
                 chroma(color).brighten(1.5).desaturate(2).hex());
  updateMultiple(settings.cg74_d29922,
                 chroma(color).brighten(1.8).desaturate(2).hex());
  updateMultiple(settings.cg80_e3b341,
                 chroma(color).brighten(2.1).desaturate(2).hex());
  updateMultiple(settings.cg85_f2cc60,
                 chroma(color).brighten(3.0).desaturate(2).hex());
  updateMultiple(settings.cg90_f8e3a1,
                 chroma(color).brighten(3.3).desaturate(2).hex());
  // orange
  updateMultiple(settings.cg28_3d1300, chroma(color).hex());
  updateMultiple(settings.cg39_5a1e02,
                 chroma(color).brighten(0.3).desaturate(1.5).hex());
  updateMultiple(settings.cg47_762d0a,
                 chroma(color).brighten(0.6).desaturate(1.5).hex());
  updateMultiple(settings.cg57_9b4215,
                 chroma(color).brighten(0.9).desaturate(1.5).hex());
  updateMultiple(settings.cg69_bd561d,
                 chroma(color).brighten(1.2).desaturate(1.5).hex());
  updateMultiple(settings.cg78_db6d28,
                 chroma(color).brighten(1.5).desaturate(1.5).hex());
  updateMultiple(settings.cg83_f0883e,
                 chroma(color).brighten(1.8).desaturate(1.5).hex());
  updateMultiple(settings.cg97_ffa657,
                 chroma(color).brighten(2.1).desaturate(1.5).hex());
  updateMultiple(settings.cg101_ffc680,
                 chroma(color).brighten(3.0).desaturate(1.5).hex());
  updateMultiple(settings.cg105_ffdfb6,
                 chroma(color).brighten(3.3).desaturate(1.5).hex());
  // red
  updateMultiple(settings.cg33_490202, chroma(color).hex());
  updateMultiple(settings.cg43_67060c,
                 chroma(color).brighten(0.3).saturate(2).hex());
  updateMultiple(settings.cg56_8e1519,
                 chroma(color).brighten(0.6).saturate(2).hex());
  updateMultiple(settings.cg66_b62324,
                 chroma(color).brighten(0.9).saturate(2).hex());
  updateMultiple(settings.cg76_da3633,
                 chroma(color).brighten(1.2).saturate(2).hex());
  updateMultiple(settings.cg89_f85149,
                 chroma(color).brighten(1.5).saturate(2).hex());
  updateMultiple(settings.cg93_ff7b72,
                 chroma(color).brighten(1.8).saturate(2).hex());
  updateMultiple(settings.cg95_ffa198,
                 chroma(color).brighten(2.1).saturate(2).hex());
  updateMultiple(settings.cg99_ffc1ba,
                 chroma(color).brighten(3.0).saturate(2).hex());
  updateMultiple(settings.cg103_ffdcd7,
                 chroma(color).brighten(3.3).saturate(2).hex());
  // purple
  updateMultiple(settings.cg20_271052, chroma(color).hex());
  updateMultiple(settings.cg27_3c1e70,
                 chroma(color).brighten(0.3).saturate(2.5).hex());
  updateMultiple(settings.cg35_553098,
                 chroma(color).brighten(0.6).saturate(2.5).hex());
  updateMultiple(settings.cg45_6e40c9,
                 chroma(color).brighten(0.9).saturate(2.5).hex());
  updateMultiple(settings.cg54_8957e5,
                 chroma(color).brighten(1.2).saturate(2.5).hex());
  updateMultiple(settings.cg60_a371f7,
                 chroma(color).brighten(1.5).saturate(2.5).hex());
  updateMultiple(settings.cg68_bc8cff,
                 chroma(color).brighten(1.8).saturate(2.5).hex());
  updateMultiple(settings.cg75_d2a8ff,
                 chroma(color).brighten(2.1).saturate(2.5).hex());
  updateMultiple(settings.cg79_e2c5ff,
                 chroma(color).brighten(3.0).saturate(2.5).hex());
  updateMultiple(settings.cg82_eddeff,
                 chroma(color).brighten(3.3).saturate(2.5).hex());
  // pink
  updateMultiple(settings.cg30_42062a, chroma(color).hex());
  updateMultiple(settings.cg40_5e103e,
                 chroma(color).brighten(0.3).desaturate(2).hex());
  updateMultiple(settings.cg50_7d2457,
                 chroma(color).brighten(0.6).desaturate(2).hex());
  updateMultiple(settings.cg58_9e3670,
                 chroma(color).brighten(0.9).desaturate(2).hex());
  updateMultiple(settings.cg70_bf4b8a,
                 chroma(color).brighten(1.2).desaturate(2).hex());
  updateMultiple(settings.cg77_db61a2,
                 chroma(color).brighten(1.5).desaturate(2).hex());
  updateMultiple(settings.cg87_f778ba,
                 chroma(color).brighten(1.8).desaturate(2).hex());
  updateMultiple(settings.cg94_ff9bce,
                 chroma(color).brighten(2.1).desaturate(2).hex());
  updateMultiple(settings.cg98_ffbedd,
                 chroma(color).brighten(3.0).desaturate(2).hex());
  updateMultiple(settings.cg102_ffdaec,
                 chroma(color).brighten(3.3).desaturate(2).hex());
  // coral
  updateMultiple(settings.cg31_460701, chroma(color).hex());
  updateMultiple(settings.cg42_640D04,
                 chroma(color).brighten(0.3).desaturate(2).hex());
  updateMultiple(settings.cg53_872012,
                 chroma(color).brighten(0.6).desaturate(2).hex());
  updateMultiple(settings.cg62_AC3220,
                 chroma(color).brighten(0.9).desaturate(2).hex());
  updateMultiple(settings.cg73_CF462D,
                 chroma(color).brighten(1.2).desaturate(2).hex());
  updateMultiple(settings.cg81_EA6045,
                 chroma(color).brighten(1.5).desaturate(2).hex());
  updateMultiple(settings.cg88_F78166,
                 chroma(color).brighten(1.8).desaturate(2).hex());
  updateMultiple(settings.cg96_FFA28B,
                 chroma(color).brighten(2.1).desaturate(2).hex());
  updateMultiple(settings.cg100_FFC2B2,
                 chroma(color).brighten(3.0).desaturate(2).hex());
  updateMultiple(settings.cg105_ffdfb6,
                 chroma(color).brighten(3.3).desaturate(2).hex());
  // calendar
  updateMultiple(settings.cg26_39d353,
                 chroma(color).brighten(2.5).saturate(2).alpha(0.8).hex());
  updateMultiple(settings.cg19_26a641,
                 chroma(color).brighten(2.5).saturate(2).alpha(0.6).hex());
  updateMultiple(settings.cg2_006d32,
                 chroma(color).brighten(2.5).saturate(2).alpha(0.4).hex());
  updateMultiple(settings.cg10_0e4429,
                 chroma(color).brighten(2.5).saturate(2).alpha(0.2).hex());
}

export function updateAllBright(color) {
  updateMultiple(settings.cg3_010409, chroma(color).brighten(0.3).hex());
  updateMultiple(settings.cg106_ffffff, chroma(color).darken(4).hex());
  // gray
  updateMultiple(settings.cg8_0d1117, chroma(color).hex());
  updateMultiple(settings.cg13_161b22, chroma(color).darken(0.3).hex());
  updateMultiple(settings.cg17_21262d, chroma(color).darken(0.6).hex());
  updateMultiple(settings.cg22_30363d, chroma(color).darken(0.9).hex());
  updateMultiple(settings.cg32_484f58, chroma(color).darken(1.2).hex());
  updateMultiple(settings.cg46_6e7681, chroma(color).darken(1.5).hex());
  updateMultiple(settings.cg55_8b949e, chroma(color).darken(1.8).hex());
  updateMultiple(settings.cg64_b1bac4, chroma(color).darken(2.1).hex());
  updateMultiple(settings.cg71_c9d1d9, chroma(color).darken(3.0).hex());
  updateMultiple(settings.cg84_f0f6fc, chroma(color).darken(3.3).hex());
  // blue
  updateMultiple(settings.cg6_051d4d, chroma(color).hex());
  updateMultiple(settings.cg7_0c2d6b,
                 chroma(color).darken(0.3).desaturate(1).hex());
  updateMultiple(settings.cg9_0d419d,
                 chroma(color).darken(0.6).desaturate(1).hex());
  updateMultiple(settings.cg12_1158c7,
                 chroma(color).darken(0.9).desaturate(1).hex());
  updateMultiple(settings.cg16_1f6feb,
                 chroma(color).darken(1.2).desaturate(1).hex());
  updateMultiple(settings.cg24_388bfd,
                 chroma(color).darken(1.5).desaturate(1).hex());
  updateMultiple(settings.cg38_58a6ff,
                 chroma(color).darken(1.8).desaturate(1).hex());
  updateMultiple(settings.cg49_79c0ff,
                 chroma(color).darken(2.1).desaturate(1).hex());
  updateMultiple(settings.cg61_a5d6ff,
                 chroma(color).darken(3.0).desaturate(1).hex());
  updateMultiple(settings.cg72_cae8ff,
                 chroma(color).darken(3.3).desaturate(1).hex());
  // green
  updateMultiple(settings.cg5_04260f, chroma(color).hex());
  updateMultiple(settings.cg4_033a16,
                 chroma(color).darken(0.3).desaturate(3).hex());
  updateMultiple(settings.cg11_0f5323,
                 chroma(color).darken(0.6).desaturate(3).hex());
  updateMultiple(settings.cg14_196c2e,
                 chroma(color).darken(0.9).desaturate(3).hex());
  updateMultiple(settings.cg18_238636,
                 chroma(color).darken(1.2).desaturate(3).hex());
  updateMultiple(settings.cg21_2ea043,
                 chroma(color).darken(1.5).desaturate(3).hex());
  updateMultiple(settings.cg29_3fb950,
                 chroma(color).darken(1.8).desaturate(3).hex());
  updateMultiple(settings.cg36_56d364,
                 chroma(color).darken(2.1).desaturate(3).hex());
  updateMultiple(settings.cg51_7ee787,
                 chroma(color).darken(3.0).desaturate(3).hex());
  updateMultiple(settings.cg63_aff5b4,
                 chroma(color).darken(3.3).desaturate(3).hex());
  // yellow
  updateMultiple(settings.cg23_341a00, chroma(color).hex());
  updateMultiple(settings.cg34_4b2900,
                 chroma(color).darken(0.3).desaturate(2).hex());
  updateMultiple(settings.cg44_693e00,
                 chroma(color).darken(0.6).desaturate(2).hex());
  updateMultiple(settings.cg52_845306,
                 chroma(color).darken(0.9).desaturate(2).hex());
  updateMultiple(settings.cg59_9e6a03,
                 chroma(color).darken(1.2).desaturate(2).hex());
  updateMultiple(settings.cg67_bb8009,
                 chroma(color).darken(1.5).desaturate(2).hex());
  updateMultiple(settings.cg74_d29922,
                 chroma(color).darken(1.8).desaturate(2).hex());
  updateMultiple(settings.cg80_e3b341,
                 chroma(color).darken(2.1).desaturate(2).hex());
  updateMultiple(settings.cg85_f2cc60,
                 chroma(color).darken(3.0).desaturate(2).hex());
  updateMultiple(settings.cg90_f8e3a1,
                 chroma(color).darken(3.3).desaturate(2).hex());
  // orange
  updateMultiple(settings.cg28_3d1300, chroma(color).hex());
  updateMultiple(settings.cg39_5a1e02,
                 chroma(color).darken(0.3).desaturate(1.5).hex());
  updateMultiple(settings.cg47_762d0a,
                 chroma(color).darken(0.6).desaturate(1.5).hex());
  updateMultiple(settings.cg57_9b4215,
                 chroma(color).darken(0.9).desaturate(1.5).hex());
  updateMultiple(settings.cg69_bd561d,
                 chroma(color).darken(1.2).desaturate(1.5).hex());
  updateMultiple(settings.cg78_db6d28,
                 chroma(color).darken(1.5).desaturate(1.5).hex());
  updateMultiple(settings.cg83_f0883e,
                 chroma(color).darken(1.8).desaturate(1.5).hex());
  updateMultiple(settings.cg97_ffa657,
                 chroma(color).darken(2.1).desaturate(1.5).hex());
  updateMultiple(settings.cg101_ffc680,
                 chroma(color).darken(3.0).desaturate(1.5).hex());
  updateMultiple(settings.cg105_ffdfb6,
                 chroma(color).darken(3.3).desaturate(1.5).hex());
  // red
  updateMultiple(settings.cg33_490202, chroma(color).hex());
  updateMultiple(settings.cg43_67060c,
                 chroma(color).darken(0.3).saturate(2).hex());
  updateMultiple(settings.cg56_8e1519,
                 chroma(color).darken(0.6).saturate(2).hex());
  updateMultiple(settings.cg66_b62324,
                 chroma(color).darken(0.9).saturate(2).hex());
  updateMultiple(settings.cg76_da3633,
                 chroma(color).darken(1.2).saturate(2).hex());
  updateMultiple(settings.cg89_f85149,
                 chroma(color).darken(1.5).saturate(2).hex());
  updateMultiple(settings.cg93_ff7b72,
                 chroma(color).darken(1.8).saturate(2).hex());
  updateMultiple(settings.cg95_ffa198,
                 chroma(color).darken(2.1).saturate(2).hex());
  updateMultiple(settings.cg99_ffc1ba,
                 chroma(color).darken(3.0).saturate(2).hex());
  updateMultiple(settings.cg103_ffdcd7,
                 chroma(color).darken(3.3).saturate(2).hex());
  // purple
  updateMultiple(settings.cg20_271052, chroma(color).hex());
  updateMultiple(settings.cg27_3c1e70,
                 chroma(color).darken(0.3).saturate(2.5).hex());
  updateMultiple(settings.cg35_553098,
                 chroma(color).darken(0.6).saturate(2.5).hex());
  updateMultiple(settings.cg45_6e40c9,
                 chroma(color).darken(0.9).saturate(2.5).hex());
  updateMultiple(settings.cg54_8957e5,
                 chroma(color).darken(1.2).saturate(2.5).hex());
  updateMultiple(settings.cg60_a371f7,
                 chroma(color).darken(1.5).saturate(2.5).hex());
  updateMultiple(settings.cg68_bc8cff,
                 chroma(color).darken(1.8).saturate(2.5).hex());
  updateMultiple(settings.cg75_d2a8ff,
                 chroma(color).darken(2.1).saturate(2.5).hex());
  updateMultiple(settings.cg79_e2c5ff,
                 chroma(color).darken(3.0).saturate(2.5).hex());
  updateMultiple(settings.cg82_eddeff,
                 chroma(color).darken(3.3).saturate(2.5).hex());
  // pink
  updateMultiple(settings.cg30_42062a, chroma(color).hex());
  updateMultiple(settings.cg40_5e103e,
                 chroma(color).darken(0.3).desaturate(2).hex());
  updateMultiple(settings.cg50_7d2457,
                 chroma(color).darken(0.6).desaturate(2).hex());
  updateMultiple(settings.cg58_9e3670,
                 chroma(color).darken(0.9).desaturate(2).hex());
  updateMultiple(settings.cg70_bf4b8a,
                 chroma(color).darken(1.2).desaturate(2).hex());
  updateMultiple(settings.cg77_db61a2,
                 chroma(color).darken(1.5).desaturate(2).hex());
  updateMultiple(settings.cg87_f778ba,
                 chroma(color).darken(1.8).desaturate(2).hex());
  updateMultiple(settings.cg94_ff9bce,
                 chroma(color).darken(2.1).desaturate(2).hex());
  updateMultiple(settings.cg98_ffbedd,
                 chroma(color).darken(3.0).desaturate(2).hex());
  updateMultiple(settings.cg102_ffdaec,
                 chroma(color).darken(3.3).desaturate(2).hex());
  // coral
  updateMultiple(settings.cg31_460701, chroma(color).hex());
  updateMultiple(settings.cg42_640D04,
                 chroma(color).darken(0.3).desaturate(2).hex());
  updateMultiple(settings.cg53_872012,
                 chroma(color).darken(0.6).desaturate(2).hex());
  updateMultiple(settings.cg62_AC3220,
                 chroma(color).darken(0.9).desaturate(2).hex());
  updateMultiple(settings.cg73_CF462D,
                 chroma(color).darken(1.2).desaturate(2).hex());
  updateMultiple(settings.cg81_EA6045,
                 chroma(color).darken(1.5).desaturate(2).hex());
  updateMultiple(settings.cg88_F78166,
                 chroma(color).darken(1.8).desaturate(2).hex());
  updateMultiple(settings.cg96_FFA28B,
                 chroma(color).darken(2.1).desaturate(2).hex());
  updateMultiple(settings.cg100_FFC2B2,
                 chroma(color).darken(3.0).desaturate(2).hex());
  updateMultiple(settings.cg105_ffdfb6,
                 chroma(color).darken(3.3).desaturate(2).hex());
  // calendar
  updateMultiple(settings.cg26_39d353,
                 chroma(color).darken(2.5).saturate(2).alpha(0.8).hex());
  updateMultiple(settings.cg19_26a641,
                 chroma(color).darken(2.5).saturate(2).alpha(0.6).hex());
  updateMultiple(settings.cg2_006d32,
                 chroma(color).darken(2.5).saturate(2).alpha(0.4).hex());
  updateMultiple(settings.cg10_0e4429,
                 chroma(color).darken(2.5).saturate(2).alpha(0.2).hex());
}

// --------------------- TEXT OVERRIDES --------------------------

export function text(color) {
  updateMultiple(settings.cg106_ffffff, chroma(color).hex());
}

// ----------------------- DARK OVERRIDES -------------------------

export function black(color) {
  updateMultiple(settings.cg3_010409, chroma(color).darken(4).hex());
}

export function white(color) {
  updateMultiple(settings.cg106_ffffff, chroma(color).brighten(4).hex());
}

export function gray(color) {
  updateMultiple(settings.cg8_0d1117, chroma(color).hex());
  updateMultiple(settings.cg13_161b22, chroma(color).brighten(0.3).hex());
  updateMultiple(settings.cg17_21262d, chroma(color).brighten(0.6).hex());
  updateMultiple(settings.cg22_30363d, chroma(color).brighten(0.9).hex());
  updateMultiple(settings.cg32_484f58, chroma(color).brighten(1.2).hex());
  updateMultiple(settings.cg46_6e7681, chroma(color).brighten(1.5).hex());
  updateMultiple(settings.cg55_8b949e, chroma(color).brighten(1.8).hex());
  updateMultiple(settings.cg64_b1bac4, chroma(color).brighten(2.1).hex());
  updateMultiple(settings.cg71_c9d1d9, chroma(color).brighten(3.0).hex());
  updateMultiple(settings.cg84_f0f6fc, chroma(color).brighten(3.3).hex());
}

export function blue(color) {
  updateMultiple(settings.cg6_051d4d, chroma(color).hex());
  updateMultiple(settings.cg7_0c2d6b, chroma(color).brighten(0.3).hex());
  updateMultiple(settings.cg9_0d419d, chroma(color).brighten(0.6).hex());
  updateMultiple(settings.cg12_1158c7, chroma(color).brighten(0.9).hex());
  updateMultiple(settings.cg16_1f6feb, chroma(color).brighten(1.2).hex());
  updateMultiple(settings.cg24_388bfd, chroma(color).brighten(1.5).hex());
  updateMultiple(settings.cg38_58a6ff, chroma(color).brighten(1.8).hex());
  updateMultiple(settings.cg49_79c0ff, chroma(color).brighten(2.1).hex());
  updateMultiple(settings.cg61_a5d6ff, chroma(color).brighten(3.0).hex());
  updateMultiple(settings.cg72_cae8ff, chroma(color).brighten(3.3).hex());
}

export function green(color) {
  updateMultiple(settings.cg5_04260f, chroma(color).hex());
  updateMultiple(settings.cg4_033a16, chroma(color).brighten(0.3).hex());
  updateMultiple(settings.cg11_0f5323, chroma(color).brighten(0.6).hex());
  updateMultiple(settings.cg14_196c2e, chroma(color).brighten(0.9).hex());
  updateMultiple(settings.cg18_238636, chroma(color).brighten(1.2).hex());
  updateMultiple(settings.cg21_2ea043, chroma(color).brighten(1.5).hex());
  updateMultiple(settings.cg29_3fb950, chroma(color).brighten(1.8).hex());
  updateMultiple(settings.cg36_56d364, chroma(color).brighten(2.1).hex());
  updateMultiple(settings.cg51_7ee787, chroma(color).brighten(3.0).hex());
  updateMultiple(settings.cg63_aff5b4, chroma(color).brighten(3.3).hex());
}

export function yellow(color) {
  updateMultiple(settings.cg23_341a00, chroma(color).hex());
  updateMultiple(settings.cg34_4b2900, chroma(color).brighten(0.3).hex());
  updateMultiple(settings.cg44_693e00, chroma(color).brighten(0.6).hex());
  updateMultiple(settings.cg52_845306, chroma(color).brighten(0.9).hex());
  updateMultiple(settings.cg59_9e6a03, chroma(color).brighten(1.2).hex());
  updateMultiple(settings.cg67_bb8009, chroma(color).brighten(1.5).hex());
  updateMultiple(settings.cg74_d29922, chroma(color).brighten(1.8).hex());
  updateMultiple(settings.cg80_e3b341, chroma(color).brighten(2.1).hex());
  updateMultiple(settings.cg85_f2cc60, chroma(color).brighten(3.0).hex());
  updateMultiple(settings.cg90_f8e3a1, chroma(color).brighten(3.3).hex());
}

export function orange(color) {
  updateMultiple(settings.cg28_3d1300, chroma(color).hex());
  updateMultiple(settings.cg39_5a1e02, chroma(color).brighten(0.3).hex());
  updateMultiple(settings.cg47_762d0a, chroma(color).brighten(0.6).hex());
  updateMultiple(settings.cg57_9b4215, chroma(color).brighten(0.9).hex());
  updateMultiple(settings.cg69_bd561d, chroma(color).brighten(1.2).hex());
  updateMultiple(settings.cg78_db6d28, chroma(color).brighten(1.5).hex());
  updateMultiple(settings.cg83_f0883e, chroma(color).brighten(1.8).hex());
  updateMultiple(settings.cg97_ffa657, chroma(color).brighten(2.1).hex());
  updateMultiple(settings.cg101_ffc680, chroma(color).brighten(3.0).hex());
  updateMultiple(settings.cg105_ffdfb6, chroma(color).brighten(3.3).hex());
}

export function red(color) {
  updateMultiple(settings.cg33_490202, chroma(color).hex());
  updateMultiple(settings.cg43_67060c, chroma(color).brighten(0.3).hex());
  updateMultiple(settings.cg56_8e1519, chroma(color).brighten(0.6).hex());
  updateMultiple(settings.cg66_b62324, chroma(color).brighten(0.9).hex());
  updateMultiple(settings.cg76_da3633, chroma(color).brighten(1.2).hex());
  updateMultiple(settings.cg89_f85149, chroma(color).brighten(1.5).hex());
  updateMultiple(settings.cg93_ff7b72, chroma(color).brighten(1.8).hex());
  updateMultiple(settings.cg95_ffa198, chroma(color).brighten(2.1).hex());
  updateMultiple(settings.cg99_ffc1ba, chroma(color).brighten(3.0).hex());
  updateMultiple(settings.cg103_ffdcd7, chroma(color).brighten(3.3).hex());
}

export function purple(color) {
  updateMultiple(settings.cg20_271052, chroma(color).hex());
  updateMultiple(settings.cg27_3c1e70, chroma(color).brighten(0.3).hex());
  updateMultiple(settings.cg35_553098, chroma(color).brighten(0.6).hex());
  updateMultiple(settings.cg45_6e40c9, chroma(color).brighten(0.9).hex());
  updateMultiple(settings.cg54_8957e5, chroma(color).brighten(1.2).hex());
  updateMultiple(settings.cg60_a371f7, chroma(color).brighten(1.5).hex());
  updateMultiple(settings.cg68_bc8cff, chroma(color).brighten(1.8).hex());
  updateMultiple(settings.cg75_d2a8ff, chroma(color).brighten(2.1).hex());
  updateMultiple(settings.cg79_e2c5ff, chroma(color).brighten(3.0).hex());
  updateMultiple(settings.cg82_eddeff, chroma(color).brighten(3.3).hex());
}

export function pink(color) {
  updateMultiple(settings.cg30_42062a, chroma(color).hex());
  updateMultiple(settings.cg40_5e103e, chroma(color).brighten(0.3).hex());
  updateMultiple(settings.cg50_7d2457, chroma(color).brighten(0.6).hex());
  updateMultiple(settings.cg58_9e3670, chroma(color).brighten(0.9).hex());
  updateMultiple(settings.cg70_bf4b8a, chroma(color).brighten(1.2).hex());
  updateMultiple(settings.cg77_db61a2, chroma(color).brighten(1.5).hex());
  updateMultiple(settings.cg87_f778ba, chroma(color).brighten(1.8).hex());
  updateMultiple(settings.cg94_ff9bce, chroma(color).brighten(2.1).hex());
  updateMultiple(settings.cg98_ffbedd, chroma(color).brighten(3.0).hex());
  updateMultiple(settings.cg102_ffdaec, chroma(color).brighten(3.3).hex());
}

export function coral(color) {
  updateMultiple(settings.cg31_460701, chroma(color).hex());
  updateMultiple(settings.cg42_640D04, chroma(color).brighten(0.3).hex());
  updateMultiple(settings.cg53_872012, chroma(color).brighten(0.6).hex());
  updateMultiple(settings.cg62_AC3220, chroma(color).brighten(0.9).hex());
  updateMultiple(settings.cg73_CF462D, chroma(color).brighten(1.2).hex());
  updateMultiple(settings.cg81_EA6045, chroma(color).brighten(1.5).hex());
  updateMultiple(settings.cg88_F78166, chroma(color).brighten(1.8).hex());
  updateMultiple(settings.cg96_FFA28B, chroma(color).brighten(2.1).hex());
  updateMultiple(settings.cg100_FFC2B2, chroma(color).brighten(3.0).hex());
  updateMultiple(settings.cg105_ffdfb6, chroma(color).brighten(3.3).hex());
}

export function calendar(color) {
  updateMultiple(settings.cg26_39d353, chroma(color).brighten(2.5).hex());
  updateMultiple(settings.cg19_26a641, chroma(color).brighten(1.5).hex());
  updateMultiple(settings.cg2_006d32, chroma(color).brighten(0.5).hex());
  updateMultiple(settings.cg10_0e4429, chroma(color).hex());
}

// ----------------------- BRIGHT OVERRIDES -------------------------

export function blackBright(color) {
  updateMultiple(settings.cg3_010409, chroma(color).brighten(4).hex());
}

export function whiteBright(color) {
  updateMultiple(settings.cg106_ffffff, chroma(color).darken(4).hex());
}

export function grayBright(color) {
  updateMultiple(settings.cg8_0d1117, chroma(color).darken(3.3).hex());
  updateMultiple(settings.cg13_161b22, chroma(color).darken(3.0).hex());
  updateMultiple(settings.cg17_21262d, chroma(color).darken(2.1).hex());
  updateMultiple(settings.cg22_30363d, chroma(color).darken(1.8).hex());
  updateMultiple(settings.cg32_484f58, chroma(color).darken(1.5).hex());
  updateMultiple(settings.cg46_6e7681, chroma(color).darken(1.2).hex());
  updateMultiple(settings.cg55_8b949e, chroma(color).darken(0.9).hex());
  updateMultiple(settings.cg64_b1bac4, chroma(color).darken(0.6).hex());
  updateMultiple(settings.cg71_c9d1d9, chroma(color).darken(0.3).hex());
  updateMultiple(settings.cg84_f0f6fc, chroma(color).hex());
}

export function blueBright(color) {
  updateMultiple(settings.cg6_051d4d, chroma(color).darken(3.3).hex());
  updateMultiple(settings.cg7_0c2d6b, chroma(color).darken(3.0).hex());
  updateMultiple(settings.cg9_0d419d, chroma(color).darken(2.1).hex());
  updateMultiple(settings.cg12_1158c7, chroma(color).darken(1.8).hex());
  updateMultiple(settings.cg16_1f6feb, chroma(color).darken(1.5).hex());
  updateMultiple(settings.cg24_388bfd, chroma(color).darken(1.2).hex());
  updateMultiple(settings.cg38_58a6ff, chroma(color).darken(0.9).hex());
  updateMultiple(settings.cg49_79c0ff, chroma(color).darken(0.6).hex());
  updateMultiple(settings.cg61_a5d6ff, chroma(color).darken(0.3).hex());
  updateMultiple(settings.cg72_cae8ff, chroma(color).hex());
}

export function greenBright(color) {
  updateMultiple(settings.cg5_04260f, chroma(color).darken(3.3).hex());
  updateMultiple(settings.cg4_033a16, chroma(color).darken(3.0).hex());
  updateMultiple(settings.cg11_0f5323, chroma(color).darken(2.1).hex());
  updateMultiple(settings.cg14_196c2e, chroma(color).darken(1.8).hex());
  updateMultiple(settings.cg18_238636, chroma(color).darken(1.5).hex());
  updateMultiple(settings.cg21_2ea043, chroma(color).darken(1.2).hex());
  updateMultiple(settings.cg29_3fb950, chroma(color).darken(0.9).hex());
  updateMultiple(settings.cg36_56d364, chroma(color).darken(0.6).hex());
  updateMultiple(settings.cg51_7ee787, chroma(color).darken(0.3).hex());
  updateMultiple(settings.cg63_aff5b4, chroma(color).hex());
}

export function yellowBright(color) {
  updateMultiple(settings.cg23_341a00, chroma(color).darken(3.3).hex());
  updateMultiple(settings.cg34_4b2900, chroma(color).darken(3.0).hex());
  updateMultiple(settings.cg44_693e00, chroma(color).darken(2.1).hex());
  updateMultiple(settings.cg52_845306, chroma(color).darken(1.8).hex());
  updateMultiple(settings.cg59_9e6a03, chroma(color).darken(1.5).hex());
  updateMultiple(settings.cg67_bb8009, chroma(color).darken(1.2).hex());
  updateMultiple(settings.cg74_d29922, chroma(color).darken(0.9).hex());
  updateMultiple(settings.cg80_e3b341, chroma(color).darken(0.6).hex());
  updateMultiple(settings.cg85_f2cc60, chroma(color).darken(0.3).hex());
  updateMultiple(settings.cg90_f8e3a1, chroma(color).hex());
}

export function orangeBright(color) {
  updateMultiple(settings.cg28_3d1300, chroma(color).darken(3.3).hex());
  updateMultiple(settings.cg39_5a1e02, chroma(color).darken(3.0).hex());
  updateMultiple(settings.cg47_762d0a, chroma(color).darken(2.1).hex());
  updateMultiple(settings.cg57_9b4215, chroma(color).darken(1.8).hex());
  updateMultiple(settings.cg69_bd561d, chroma(color).darken(1.5).hex());
  updateMultiple(settings.cg78_db6d28, chroma(color).darken(1.2).hex());
  updateMultiple(settings.cg83_f0883e, chroma(color).darken(0.9).hex());
  updateMultiple(settings.cg97_ffa657, chroma(color).darken(0.6).hex());
  updateMultiple(settings.cg101_ffc680, chroma(color).darken(0.3).hex());
  updateMultiple(settings.cg105_ffdfb6, chroma(color).hex());
}

export function redBright(color) {
  updateMultiple(settings.cg33_490202, chroma(color).darken(3.3).hex());
  updateMultiple(settings.cg43_67060c, chroma(color).darken(3.0).hex());
  updateMultiple(settings.cg56_8e1519, chroma(color).darken(2.1).hex());
  updateMultiple(settings.cg66_b62324, chroma(color).darken(1.8).hex());
  updateMultiple(settings.cg76_da3633, chroma(color).darken(1.5).hex());
  updateMultiple(settings.cg89_f85149, chroma(color).darken(1.2).hex());
  updateMultiple(settings.cg93_ff7b72, chroma(color).darken(0.9).hex());
  updateMultiple(settings.cg95_ffa198, chroma(color).darken(0.6).hex());
  updateMultiple(settings.cg99_ffc1ba, chroma(color).darken(0.3).hex());
  updateMultiple(settings.cg103_ffdcd7, chroma(color).hex());
}

export function purpleBright(color) {
  updateMultiple(settings.cg20_271052, chroma(color).darken(3.3).hex());
  updateMultiple(settings.cg27_3c1e70, chroma(color).darken(3.0).hex());
  updateMultiple(settings.cg35_553098, chroma(color).darken(2.1).hex());
  updateMultiple(settings.cg45_6e40c9, chroma(color).darken(1.8).hex());
  updateMultiple(settings.cg54_8957e5, chroma(color).darken(1.5).hex());
  updateMultiple(settings.cg60_a371f7, chroma(color).darken(1.2).hex());
  updateMultiple(settings.cg68_bc8cff, chroma(color).darken(0.9).hex());
  updateMultiple(settings.cg75_d2a8ff, chroma(color).darken(0.6).hex());
  updateMultiple(settings.cg79_e2c5ff, chroma(color).darken(0.3).hex());
  updateMultiple(settings.cg82_eddeff, chroma(color).hex());
}

export function pinkBright(color) {
  updateMultiple(settings.cg30_42062a, chroma(color).darken(3.3).hex());
  updateMultiple(settings.cg40_5e103e, chroma(color).darken(3.0).hex());
  updateMultiple(settings.cg50_7d2457, chroma(color).darken(2.1).hex());
  updateMultiple(settings.cg58_9e3670, chroma(color).darken(1.8).hex());
  updateMultiple(settings.cg70_bf4b8a, chroma(color).darken(1.5).hex());
  updateMultiple(settings.cg77_db61a2, chroma(color).darken(1.2).hex());
  updateMultiple(settings.cg87_f778ba, chroma(color).darken(0.9).hex());
  updateMultiple(settings.cg94_ff9bce, chroma(color).darken(0.6).hex());
  updateMultiple(settings.cg98_ffbedd, chroma(color).darken(0.3).hex());
  updateMultiple(settings.cg102_ffdaec, chroma(color).hex());
}

export function coralBright(color) {
  updateMultiple(settings.cg31_460701, chroma(color).darken(3.3).hex());
  updateMultiple(settings.cg42_640D04, chroma(color).darken(3.0).hex());
  updateMultiple(settings.cg53_872012, chroma(color).darken(2.1).hex());
  updateMultiple(settings.cg62_AC3220, chroma(color).darken(1.8).hex());
  updateMultiple(settings.cg73_CF462D, chroma(color).darken(1.5).hex());
  updateMultiple(settings.cg81_EA6045, chroma(color).darken(1.2).hex());
  updateMultiple(settings.cg88_F78166, chroma(color).darken(0.9).hex());
  updateMultiple(settings.cg96_FFA28B, chroma(color).darken(0.6).hex());
  updateMultiple(settings.cg100_FFC2B2, chroma(color).darken(0.3).hex());
  updateMultiple(settings.cg105_ffdfb6, chroma(color).hex());
}

export function calendarBright(color) {
  updateMultiple(settings.cg26_39d353, chroma(color).hex());
  updateMultiple(settings.cg19_26a641, chroma(color).darken(0.5).hex());
  updateMultiple(settings.cg2_006d32, chroma(color).darken(1.2).hex());
  updateMultiple(settings.cg10_0e4429, chroma(color).darken(2.5).hex());
}

export function updateAccent(color) {
  calendarBright(color);
  if (/^\d/.test(color.slice(-4))) {
    blueBright(color);
    greenBright(color);
    yellowBright(color);
  } else {
    blue(color);
    green(color);
    yellow(color);
  }
}

export default function updateScale(color) {
  /^\d/.test(color.slice(-4)) ? updateAll(color) : updateAllBright(color);
}
