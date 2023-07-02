/*
 * @Author: wanggaoxian
 * @Date: 2023-07-01 18:29:04
 * @LastEditors: wanggaoxian
 * @LastEditTime: 2023-07-02 02:32:01
 * @FilePath: /getmonth/src/quarter/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import dayjs from "dayjs";
// 获取季度
const getYearQuarter = (start: string, end: string) => {
  const startDate = new Date(dayjs(start).format("YYYY-MM-DD"));
  const endDate = new Date(dayjs(end).format("YYYY-MM-DD"));
  const result: { collectmonth: string }[] = [];

  for (let year = startDate.getFullYear(); year <= endDate.getFullYear(); year++) {
    let startQuarter = 1;
    let endQuarter = 4;

    if (year === startDate.getFullYear()) {
      startQuarter = Math.floor((startDate.getMonth() + 3) / 3);
    }

    if (year === endDate.getFullYear()) {
      endQuarter = Math.floor((endDate.getMonth() + 3) / 3);
    }

    for (let quarter = startQuarter; quarter <= endQuarter; quarter++) {
      result.push({ collectmonth: `${dayjs(`${year}${quarter * 3}`).format("YYYYMM")}` });
    }
  }

  const endYearMonth = `${endDate}${endDate.getMonth() + 1}`;
  result.push({ collectmonth: `${dayjs(endYearMonth).format("YYYYMM")}` });
  result.splice(result.length - 2, 1);
  return result;
};

export default getYearQuarter;
