import { getCookie} from '../utils/cookies'
export const API_BASE_URL = 'http://localhost:3001/api';
export const ACCESS_TOKEN_NAME = 'login_access_token'
export const USER_INFO = 'user_info'
export const PATHNAME = 'pathName'
if(getCookie('accessToken'))
    localStorage.setItem(ACCESS_TOKEN_NAME,getCookie('accessToken'));