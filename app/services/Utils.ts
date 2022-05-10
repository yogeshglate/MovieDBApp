import apisauce from 'apisauce';
import { AppConstant, strings } from '../constants';
import { ApiDataProps } from '../sagas/movieSaga';

export const apiConfig = (baseURL: string) =>
  apisauce.create({
    baseURL,
    timeout: 30000,
    headers: { 'Cache-Control': strings.noCache },
  });

export async function getError(response: ApiDataProps) {
  if (response?.status === AppConstant.SUCCESS_CODE) {
    return false;
  }
  if (response?.status === AppConstant.KEY_ERROR) {
    return strings.keyError;
  }
  if (response?.status === AppConstant.NOT_FOUND) {
    return strings.notFoundError;
  }
  return strings.somethingWrong;
}
