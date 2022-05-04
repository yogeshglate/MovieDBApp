import apisauce from 'apisauce';
import {constants} from '../constants';

export const apiConfig = (baseURL: string) =>
  apisauce.create({
    baseURL,
    timeout: 30000,
    headers: {'Cache-Control': constants.noCache},
  });

export async function getError(response: any) {
  if (response?.problem === constants.networkError) {
    return constants.internetCheck;
  }
  if (
    [constants.connectionError, constants.serverError].includes(
      response?.problem,
    )
  ) {
    return constants.serverUnavailable;
  }
  return constants.somethingWrong;
}
