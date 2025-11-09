import dayjs from "dayjs";

/**
 * Convierte un valor numerico a formato de moneda, @param digits hace referencia al numero de digitos a utilizar por default es 2
 * @param n @type number | undefined
 * @param digits @type number
 * @returns 
 */
export const convertCurrency = (n:number | undefined, digits: number = 2) => {
  if(n) {
    const currencyLocal = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: digits
    });
  
    return currencyLocal.format(n);
  }
};


  /**
   * Convierte un string de fecha a formato fecha dependiendo el "formatString" por default es "DD/MM/YYYY"
   * @param date 
   * @param formatString
   * @returns 
   */
export const convertDateToGeneralFormat = (date:string | undefined, formatString: string = "DD/MM/YYYY") => {
  if(date) return dayjs(date).format(formatString)
    else return ''
}


/**
 * 
 * @param current fecha
 * @returns boolean
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const disablePastDates = (current:any) => {
  return current && current <= dayjs().endOf("day");
};

/**
 * Convierte un string de hora y minuto a formato AM o PM 
 * @param hour en formato HH:MM A
 * @returns 
 */
export const convertHourToAMorPM = (hour: string | undefined) => {
  if(hour) return dayjs(hour, "HH:mm").format("hh:mm A");
}