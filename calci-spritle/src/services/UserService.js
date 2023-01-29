import axios from "axios";

export class UserService {
    static serverUrl = 'http://localhost:9000';

    static getAllUsers () {
        let dataURL = `${this.serverUrl}/users`;
        return axios.get(dataURL);
    }
    static createUser (user) {
        let dataURL = `${this.serverUrl}/users`;
        return axios.post(dataURL,user);
    }
}