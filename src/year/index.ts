/*
 * @Author: wanggaoxian
 * @Date: 2023-07-01 18:29:09
 * @LastEditors: wanggaoxian 
 * @LastEditTime: 2023-07-01 23:01:47
 * @FilePath: /getmonth/src/year/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import dayjs from "dayjs";
// 获取年
const getYear = (start: string, end: string) => {
  const startDate = new Date(dayjs(start).format("YYYY-MM-DD"));
  const endDate = new Date(dayjs(end).format("YYYY-MM-DD"));
  const result = [];

  for (let year = startDate.getFullYear(); year <= endDate.getFullYear(); year++) {
    if (year === startDate.getFullYear()) {
      if (startDate.getFullYear() === endDate.getFullYear()) {
        result.push({ collectmonth: dayjs(`${year}-${endDate.getMonth() + 1}`).format("YYYYMM") });
      } else {
        result.push({ collectmonth: dayjs(`${year}-${12}`).format("YYYYMM") });
      }
    } else if (year === endDate.getFullYear()) {
      result.push({ collectmonth: dayjs(`${year}-${endDate.getMonth() + 1}`).format("YYYYMM") });
    } else {
      result.push({ collectmonth: dayjs(`${year}-${12}`).format("YYYYMM") });
    }
  }
  return result;
};

export default getYear;
