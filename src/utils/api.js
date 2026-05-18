const DEFAULT_API_BASE_URL = "https://client-portfolio-backend.vercel.app";

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || DEFAULT_API_BASE_URL;
const API_REQUEST_BASE_URL = process.env.REACT_APP_API_BASE_URL || DEFAULT_API_BASE_URL;

export const apiUrl = (path) => {
  if (!path) return API_REQUEST_BASE_URL;
  if (path.startsWith("http")) return path;

  return `${API_REQUEST_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const assetUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;

  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};
