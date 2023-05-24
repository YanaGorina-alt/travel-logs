import sendRequest from './send-request'
const BASE_URL = '/api/posts'; 

export function getAll() {
    return sendRequest(BASE_URL);
  }
  
export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function addPost(data) {
    return sendRequest(BASE_URL, 'POST', data);
}

export function updatePost(id, data){
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', data);
}

export function deletePost(id){
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}


