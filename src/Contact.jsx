import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = "service_z36qch5";
    const templateID = "template_zifpnsi";
    const publicKey = "kdGRBD94SIXgLr2ca";

    try {
      await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
      setStatus("✅ Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("❌ Failed to send message. Try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-lg mx-auto p-6 text-white rounded-lg shadow-lg mt-10"
    >
      <motion.h1
        className="my-10 text-center text-white text-4xl lg:text-6xl font-semibold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Contact
      </motion.h1>

      {status && (
        <motion.p
          className="text-center text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {status}
        </motion.p>
      )}

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          className=" w-[400px] p-3 rounded-lg bg-gray-800 text-white focus:ring focus:ring-blue-400"
          required
          whileFocus={{ scale: 1.05 }}
        />

        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-800 text-white focus:ring focus:ring-blue-400"
          required
          whileFocus={{ scale: 1.05 }}
        />

        <motion.textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="p-3 rounded-lg bg-gray-800 text-white focus:ring focus:ring-blue-400"
          required
          whileFocus={{ scale: 1.05 }}
        />

        <motion.button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
