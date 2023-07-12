import { toast } from "react-toastify";

const errorToast = (msg = "Something went wrong!", mode = "dark") => {
  toast.error(msg, {
    theme: mode,
    toastId: "error",
  });
};

export default errorToast;
