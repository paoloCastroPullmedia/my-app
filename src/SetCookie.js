/**
 * Created by paolocastro on 02/05/2017.
 */
export function setCookie(data) {
    document.cookie = 'token='+data.token;
    document.cookie = 'refresh_token='+data.refresh_token;
    document.cookie = 'user='+data.user;
}

export default setCookie;