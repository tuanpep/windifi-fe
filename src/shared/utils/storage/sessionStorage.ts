// SessionStorage utilities

export const setSessionStorage = (key: string, value: any): void => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting sessionStorage:', error);
  }
};

export const getSessionStorage = <T>(
  key: string,
  defaultValue?: T
): T | null => {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue || null;
  } catch (error) {
    console.error('Error getting sessionStorage:', error);
    return defaultValue || null;
  }
};

export const removeSessionStorage = (key: string): void => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing sessionStorage:', error);
  }
};
