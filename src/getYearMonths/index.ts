/*
 * @Author: wanggaoxian
 * @Date: 2023-07-01 18:28:58
 * @LastEditors: wanggaoxian 
 * @LastEditTime: 2023-07-01 23:01:36
 * @FilePath: /getmonth/src/month/index.ts
 * @Description:获取年月
 */
import dayjs from "dayjs";
const getYearMonths = (start: string, end: string) => {
  const startDate = new Date(dayjs(start).format('YYYY-MM-DD'));
  const endDate = new Date(dayjs(end).format('YYYY-MM-DD'));
  const result = [];
  for (let d = startDate; d <= endDate; d.setMonth(d.getMonth() + 1)) {
    const yearMonth = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}`;
    result.push({ collectmonth: dayjs(yearMonth).format("YYYYMM") });
  }
  const endYearMonth = `${dayjs(`${endDate}${endDate.getMonth() + 1}`).format("YYYYMM")}`;
  if (result[result.length - 1].collectmonth !== endYearMonth) {
    result.push({ collectmonth: endYearMonth });
  }
  return result;
};

export default getYearMonths;
