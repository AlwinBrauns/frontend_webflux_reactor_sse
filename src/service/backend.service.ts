import axios from "axios";

export const BASEURL = 'http://localhost:8080/api/v1/'

class _BackendService {
    upload(file: File | undefined | null) {
        if(!file) {
            return Promise.reject("File undefined or null")
        }
        return axios.postForm(BASEURL + 'upload', {
            file: file
        })
    }
}

export const BackendService = new _BackendService();