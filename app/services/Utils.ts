import apisauce from 'apisauce';
import { AppConstant, strings } from '../constants';

export const apiConfig = (baseURL: string) =>
  apisauce.create({
    baseURL,
    timeout: 30000,
    headers: { 'Cache-Control': strings.noCache },
  });

export async function getError(status: number) {
  switch (status) {
    case AppConstant.SUCCESS_CODE:
      return false;
    case AppConstant.KEY_ERROR:
      return strings.keyError;
    case AppConstant.NOT_FOUND:
      return strings.notFoundError;
    default:
      return strings.somethingWrong;
  }
}
