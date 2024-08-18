import { useMemo } from "react"

export const useDateParser = (inputDate: Date): string => {
  if (!inputDate) {
    return "Baru saja diposting"
  }
  return useMemo(() => {
    const now = new Date();
    const date = new Date(inputDate);

    const dYears = now.getFullYear() - date.getFullYear();
    const dMonths = now.getMonth() - date.getMonth();
    const dDays = now.getDate() - date.getDate();
    const dHours = now.getHours() - date.getHours();
    const dMinutes = now.getMinutes() - date.getMinutes();

    let str = "Baru saja di posting"

    switch (true) {
      case dYears > 0 || dMonths > 0:
        const totalMonths = dYears * 12 + dMonths + (dDays < 0 ? -1 : 0);
        str = `${totalMonths} bulan yang lalu`;
        break;
      case dDays > 0 || dHours < 0:
        str = `${dDays} hari yang lalu`;
        break;
      case dHours > 0 || dMinutes < 0:
        str = `${dHours} jam yang lalu`;
        break;
      default:
        `${dMinutes} menit yang lalu`
    }

    return str;
  }, [inputDate])
}