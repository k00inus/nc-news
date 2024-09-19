import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (message) => {
  toast(message);
};
export const timeAgo = (timestamp) => {
  const time = new Date(timestamp);

  const now = new Date();

  const diff = Math.floor((now - time) / 1000);

  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  } else if (months > 0) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else if (days > 0) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (minutes === 1) {
    return "1 minute ago";
  } else {
    return `${minutes} minutes ago`;
  }
};
