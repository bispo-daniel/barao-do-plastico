import { ToastContainer } from "react-toastify";

export default function Toaster() {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
