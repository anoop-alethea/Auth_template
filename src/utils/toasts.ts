import { toast } from "react-toastify";

export function showSuccess(message: string) {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
  });
}

export function showError(message: string) {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
  });
}

export function showInfo(message: string) {
  toast.info(message, {
    position: "top-right",
    autoClose: 3000,
  });
}
