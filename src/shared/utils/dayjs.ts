import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

// Extend dayjs with plugins
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.extend(calendar);

// Set default timezone (you can change this to your preferred timezone)
dayjs.tz.setDefault('UTC');

export default dayjs;

// Common date formatting functions
export const formatDate = (
  date: string | Date,
  format = 'YYYY-MM-DD'
): string => {
  return dayjs(date).format(format);
};

export const formatDateTime = (
  date: string | Date,
  format = 'YYYY-MM-DD HH:mm:ss'
): string => {
  return dayjs(date).format(format);
};

export const formatRelativeTime = (date: string | Date): string => {
  return dayjs(date).fromNow();
};

export const formatCalendar = (date: string | Date): string => {
  return dayjs(date).calendar();
};

export const isToday = (date: string | Date): boolean => {
  return dayjs(date).isSame(dayjs(), 'day');
};

export const isYesterday = (date: string | Date): boolean => {
  return dayjs(date).isSame(dayjs().subtract(1, 'day'), 'day');
};

export const isThisWeek = (date: string | Date): boolean => {
  return dayjs(date).isSame(dayjs(), 'week');
};

export const isThisMonth = (date: string | Date): boolean => {
  return dayjs(date).isSame(dayjs(), 'month');
};

export const isThisYear = (date: string | Date): boolean => {
  return dayjs(date).isSame(dayjs(), 'year');
};
