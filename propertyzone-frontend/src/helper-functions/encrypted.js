import CryptoJS from "crypto-js";

export function encryptData(data, secretKey) {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  return encryptedData;
}

export function decryptData(data, secretKey) {
  const decryptedData = CryptoJS?.AES?.decrypt(data, secretKey)?.toString(CryptoJS?.enc?.Utf8);
  return JSON?.parse(decryptedData);
}
