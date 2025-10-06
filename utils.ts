import Constants from "expo-constants";

export const generateAPIUrl = (relativePath: string) => {
  const origin = Constants.experienceUrl.replace("exp://", "http://");

  const path = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;

  if (process.env.NODE_ENV === "development") {
    return origin.concat(path);
  }

  // In production, try to use the environment variable first,
  // fallback to the current domain if not available
  console.log({ env: process.env.EXPO_PUBLIC_API_BASE_URL });

  if (!process.env.EXPO_PUBLIC_API_BASE_URL) {
    console.log("EXPO_PUBLIC_API_BASE_URL is not defined");
  } else {
    console.log("EXPO_PUBLIC_API_BASE_URL is defined");
    return process.env.EXPO_PUBLIC_API_BASE_URL.concat(path);
  }
};
