// This is generated by bin/generateMiddlewareComposer.ts
// ... edits this file might be overidden
import { Middleware } from './Middleware.js'

export interface MiddlewareComposer {
  <O0, O1>(
    initState: O0,

    middleware0: Middleware<O0, O1>,
  ): Promise<O1>

  <O0, O1, O2>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,
  ): Promise<O2>

  <O0, O1, O2, O3>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,
  ): Promise<O3>

  <O0, O1, O2, O3, O4>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,
  ): Promise<O4>

  <O0, O1, O2, O3, O4, O5>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,
  ): Promise<O5>

  <O0, O1, O2, O3, O4, O5, O6>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,
  ): Promise<O6>

  <O0, O1, O2, O3, O4, O5, O6, O7>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,

    middleware6: Middleware<O6, O7>,
  ): Promise<O7>

  <O0, O1, O2, O3, O4, O5, O6, O7, O8>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,

    middleware6: Middleware<O6, O7>,

    middleware7: Middleware<O7, O8>,
  ): Promise<O8>

  <O0, O1, O2, O3, O4, O5, O6, O7, O8, O9>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,

    middleware6: Middleware<O6, O7>,

    middleware7: Middleware<O7, O8>,

    middleware8: Middleware<O8, O9>,
  ): Promise<O9>

  <O0, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,

    middleware6: Middleware<O6, O7>,

    middleware7: Middleware<O7, O8>,

    middleware8: Middleware<O8, O9>,

    middleware9: Middleware<O9, O10>,
  ): Promise<O10>

  <O0, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,

    middleware6: Middleware<O6, O7>,

    middleware7: Middleware<O7, O8>,

    middleware8: Middleware<O8, O9>,

    middleware9: Middleware<O9, O10>,

    middleware10: Middleware<O10, O11>,
  ): Promise<O11>

  <O0, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,

    middleware6: Middleware<O6, O7>,

    middleware7: Middleware<O7, O8>,

    middleware8: Middleware<O8, O9>,

    middleware9: Middleware<O9, O10>,

    middleware10: Middleware<O10, O11>,

    middleware11: Middleware<O11, O12>,
  ): Promise<O12>

  <O0, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,

    middleware6: Middleware<O6, O7>,

    middleware7: Middleware<O7, O8>,

    middleware8: Middleware<O8, O9>,

    middleware9: Middleware<O9, O10>,

    middleware10: Middleware<O10, O11>,

    middleware11: Middleware<O11, O12>,

    middleware12: Middleware<O12, O13>,
  ): Promise<O13>

  <O0, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,

    middleware6: Middleware<O6, O7>,

    middleware7: Middleware<O7, O8>,

    middleware8: Middleware<O8, O9>,

    middleware9: Middleware<O9, O10>,

    middleware10: Middleware<O10, O11>,

    middleware11: Middleware<O11, O12>,

    middleware12: Middleware<O12, O13>,

    middleware13: Middleware<O13, O14>,
  ): Promise<O14>

  <O0, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,

    middleware6: Middleware<O6, O7>,

    middleware7: Middleware<O7, O8>,

    middleware8: Middleware<O8, O9>,

    middleware9: Middleware<O9, O10>,

    middleware10: Middleware<O10, O11>,

    middleware11: Middleware<O11, O12>,

    middleware12: Middleware<O12, O13>,

    middleware13: Middleware<O13, O14>,

    middleware14: Middleware<O14, O15>,
  ): Promise<O15>

  <O0, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16>(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,

    middleware6: Middleware<O6, O7>,

    middleware7: Middleware<O7, O8>,

    middleware8: Middleware<O8, O9>,

    middleware9: Middleware<O9, O10>,

    middleware10: Middleware<O10, O11>,

    middleware11: Middleware<O11, O12>,

    middleware12: Middleware<O12, O13>,

    middleware13: Middleware<O13, O14>,

    middleware14: Middleware<O14, O15>,

    middleware15: Middleware<O15, O16>,
  ): Promise<O16>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    O11,
    O12,
    O13,
    O14,
    O15,
    O16,
    O17,
  >(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,

    middleware6: Middleware<O6, O7>,

    middleware7: Middleware<O7, O8>,

    middleware8: Middleware<O8, O9>,

    middleware9: Middleware<O9, O10>,

    middleware10: Middleware<O10, O11>,

    middleware11: Middleware<O11, O12>,

    middleware12: Middleware<O12, O13>,

    middleware13: Middleware<O13, O14>,

    middleware14: Middleware<O14, O15>,

    middleware15: Middleware<O15, O16>,

    middleware16: Middleware<O16, O17>,
  ): Promise<O17>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    O11,
    O12,
    O13,
    O14,
    O15,
    O16,
    O17,
    O18,
  >(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,

    middleware6: Middleware<O6, O7>,

    middleware7: Middleware<O7, O8>,

    middleware8: Middleware<O8, O9>,

    middleware9: Middleware<O9, O10>,

    middleware10: Middleware<O10, O11>,

    middleware11: Middleware<O11, O12>,

    middleware12: Middleware<O12, O13>,

    middleware13: Middleware<O13, O14>,

    middleware14: Middleware<O14, O15>,

    middleware15: Middleware<O15, O16>,

    middleware16: Middleware<O16, O17>,

    middleware17: Middleware<O17, O18>,
  ): Promise<O18>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    O11,
    O12,
    O13,
    O14,
    O15,
    O16,
    O17,
    O18,
    O19,
  >(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,

    middleware6: Middleware<O6, O7>,

    middleware7: Middleware<O7, O8>,

    middleware8: Middleware<O8, O9>,

    middleware9: Middleware<O9, O10>,

    middleware10: Middleware<O10, O11>,

    middleware11: Middleware<O11, O12>,

    middleware12: Middleware<O12, O13>,

    middleware13: Middleware<O13, O14>,

    middleware14: Middleware<O14, O15>,

    middleware15: Middleware<O15, O16>,

    middleware16: Middleware<O16, O17>,

    middleware17: Middleware<O17, O18>,

    middleware18: Middleware<O18, O19>,
  ): Promise<O19>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    O11,
    O12,
    O13,
    O14,
    O15,
    O16,
    O17,
    O18,
    O19,
    O20,
  >(
    initState: O0,

    middleware0: Middleware<O0, O1>,

    middleware1: Middleware<O1, O2>,

    middleware2: Middleware<O2, O3>,

    middleware3: Middleware<O3, O4>,

    middleware4: Middleware<O4, O5>,

    middleware5: Middleware<O5, O6>,

    middleware6: Middleware<O6, O7>,

    middleware7: Middleware<O7, O8>,

    middleware8: Middleware<O8, O9>,

    middleware9: Middleware<O9, O10>,

    middleware10: Middleware<O10, O11>,

    middleware11: Middleware<O11, O12>,

    middleware12: Middleware<O12, O13>,

    middleware13: Middleware<O13, O14>,

    middleware14: Middleware<O14, O15>,

    middleware15: Middleware<O15, O16>,

    middleware16: Middleware<O16, O17>,

    middleware17: Middleware<O17, O18>,

    middleware18: Middleware<O18, O19>,

    middleware19: Middleware<O19, O20>,
  ): Promise<O20>
}