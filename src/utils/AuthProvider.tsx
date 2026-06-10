


export function getToken(){
    const token = localStorage.getItem('token');
    return token
}

export function getApiUrl(){
    const API_URL = process.env.REACT_APP_API_URL;
    return API_URL
}