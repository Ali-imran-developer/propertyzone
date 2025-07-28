import Cookies from "js-cookie";
import { decryptData, encryptData } from "../helper-functions/encrypted";
import { setSession } from "../store/slices/authSlice";
import { APP_KEY, COOKIE_SECRET } from "../config/constants";
import store from "../store";

class AuthController {
  static getSession = () => {
    const session = Cookies.get(APP_KEY);
    let decrypted = null;
    if (session) {
      decrypted = decryptData(session, COOKIE_SECRET);
    }
    return decrypted;
  };
  static setSession(payload) {
    const session = this.getSession();
    const newSession = { ...session, ...payload };
    store.dispatch(setSession(newSession));
    const encryptedData = encryptData(newSession, COOKIE_SECRET);
    Cookies.set(APP_KEY, encryptedData, {
      expires: 7,
    });
  }
  static restoreSession() {
    const session = AuthController.getSession();
    if (session) {
      store.dispatch(setSession(session));
      this.setSession(session);
    }
  }
}

export default AuthController;