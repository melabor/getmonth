/*
 * @Author: wanggaoxian
 * @Date: 2023-07-01 18:25:46
 * @LastEditors: wanggaoxian 
 * @LastEditTime: 2023-07-01 23:06:28
 * @FilePath: /getmonth/rollup.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import typescript from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.min.mjs",
    format: "umd",
    name: "MyNpmPlugin",
    globals: {
      dayjs: "dayjs",
    },
  },
  external: ["dayjs"],
  plugins: [typescript(), uglify()],
};
