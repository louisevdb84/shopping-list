export class AuthService {
    signinUser(username: string, password: string) {
        alert("SIGN IN " + username + " " + password);
    }

    register(username: string, password: string) {
        alert("REGISTER " + username + " " + password);
    }    

    logout() {
        alert("LOGOUT");
    }

}