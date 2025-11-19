import dayjs from "dayjs";
import CryptoJS from "crypto-js";

const secretKeyPass = process.env.NEXT_PUBLIC_SECRET_KEY;
const nameAppWork = process.env.NEXT_PUBLIC_APP_WORK_MOBILE;
const iosIdApp = process.env.NEXT_PUBLIC_IOS_ID_APP;

export const getNameAppWork = () => {
  const ua = navigator.userAgent.toLowerCase();
  window.location.href = `${nameAppWork}://login`;
  setTimeout(() => {
    if (/iphone|ipad|ipod/.test(ua)) {
        window.location.href = `https://apps.apple.com/app/${iosIdApp}`;
      }      
    }, 1500);
}

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

/**
 * Funcion para encryptar el password para antes de enviarlo a cual quier peticion de servicios, el @param secretKeyPass debe ser el mismo que el de back
 * @param text 
 * @returns 
 */
export const parsePasswordEncrypt = (text:string) => {
  if(!secretKeyPass) {
    throw new Error("Secret key is not defined");
  }
  
  const key = CryptoJS.enc.Utf8.parse(secretKeyPass);

  // Cifrar el texto
  const encrypted = CryptoJS.AES.encrypt(text, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString();
};