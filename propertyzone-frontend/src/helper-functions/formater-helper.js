export function ensureArray(input) {
  return Array.isArray(input) ? input : [];
}

export const ensureObject = (input) => {
  return typeof input === "object" ? input : {};
};

export const trimObjectValues = (data) => {
  if (!data || typeof data !== "object") return data;
  return Object.fromEntries(Object.entries(data).map(([key, value]) => [ key, typeof value === "string" ? value.trim() : value ]));
};

export const sanitizePhone = (phone) => {
  if (phone?.startsWith("+92")) return "0" + phone?.slice(3);
  if (phone?.startsWith("92")) return "0" + phone?.slice(2);
  return phone;
};

export const formatPrice = (value) => {
  const numberValue =
    typeof value === "string" ? value?.replace(/,/g, "") : value;
  return Number(numberValue)?.toLocaleString("en-US");
};

export const generateOrderNumber = () => {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `S${randomNumber}`;
};
