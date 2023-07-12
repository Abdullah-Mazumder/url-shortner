import errorToast from "./errorToast";
import successToast from "./successToast";

export default function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      successToast("Text copied to clipboard");
    })
    .catch((error) => {
      errorToast("Error copying text to clipboard:");
    });
}
