import { toast, Zoom } from "react-toastify"

export const toastMsg = (status, text) => {
    const options = {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Zoom
    }

    if (status === 'error') {
        return toast.error(text, options)
    } else if (status === 'success') {
        return toast.success(text, options)
    }
}