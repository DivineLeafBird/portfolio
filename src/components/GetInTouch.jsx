import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgSpinner } from "react-icons/cg";

const GetInTouch = ({ bgColor, title, titleTextStyle, width }) => {
  const textareaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = textarea.scrollHeight + "px"; // Adjust height
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [status, setStatus] = useState({
    visible: false,
    success: false,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus({
          visible: true,
          success: true,
          message: "Message sent successfully!",
        });
        setIsSubmitting(false);
        toast.success("Message sent successfully!");
        console.log("Message sent successfully!");

        // Reset form data
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus({
          visible: true,
          success: false,
          message: "Failed to send message. Please try again later.",
        });
        setIsSubmitting(false);
        toast.error(
          "Failed to send message. Something went wrong. Please try again later."
        );
        console.error("Failed to send message.");
      });
  };

  return (
    <section
      className={`${bgColor} text-tertiary px-5 py-10 max-w-screen-2xl mx-auto `}
    >
      <h2 className={`${titleTextStyle}`}>{title}</h2>
      {status.visible && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white transition-all duration-300 ${
            status.success ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status.message}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col justify-center items-center gap-8 ${width} mx-auto p-8 rounded-lg`}
      >
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex flex-col text-neutral-500 gap-4 md:w-1/2">
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg  bg-tertiary text-primary focus:outline-none focus:border-blue focus:border-2"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg  bg-tertiary text-primary focus:outline-none focus:border-blue focus:border-2"
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg  bg-tertiary text-primary focus:outline-none focus:border-blue focus:border-2"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <textarea
              name="message"
              ref={textareaRef}
              onInput={handleInput}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg  bg-tertiary text-primary focus:outline-none focus:border-blue focus:border-2 min-h-full overflow-hidden resize-none"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-sky-500 outline-none shadow-md text-white w-full md:w-1/2 py-2 rounded-lg hover:bg-sky-300 transition duration-300 ease-in-out disabled:bg-sky-200/50 disabled:text-white/70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex justify-center items-center">
              <CgSpinner className="mr-2 h-6 w-6 animate-spin" />
              <span>Sending...</span>
            </div>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </form>
      <ToastContainer position="top-center" autoClose={4000} />
    </section>
  );
};

export default GetInTouch;
