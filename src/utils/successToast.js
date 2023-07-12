import { toast } from "react-toastify";

const successToast = (msg, mode = "dark") => {
  toast.success(msg, {
    theme: mode,
    toastId: "success",
  });
};

export default successToast;
