import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import Confetti from "react-confetti";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const lastSentRef = useRef(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.message.trim() || form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the form errors.");
      return false;
    }
    return true;
  };

  const isFormValid =
    form.name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email) &&
    form.message.trim().length >= 10;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.website) return;
    const now = Date.now();
    if (now - lastSentRef.current < 15000) {
      toast.error("Please wait before sending again.");
      return;
    }
    if (!validate()) return;
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name.trim(), from_email: form.email.trim(), message: form.message.trim() },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { to_email: form.email, from_name: form.name },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      lastSentRef.current = now;
      setSent(true);
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="bg-white text-black py-24 px-6">
      {sent && typeof window !== "undefined" && (
        <Confetti recycle={false} numberOfPieces={300} />
      )}

      <div className="max-w-3xl mx-auto">

        {/* ── New Title Block ── */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-6">
          <span
            style={{
              color: "#1a5c38",
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            05 / Contact
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </motion.div>

        <motion.h2
          {...fadeUp(0.08)}
          className="mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#0c0c0c",
          }}
        >
          Let's work<br />
          <em style={{ color: "#000000", fontStyle: "italic", fontWeight: 300 }}>
            together.
          </em>
        </motion.h2>

        {/* ── Original Design Below, Untouched ── */}

        <p className="text-center text-gray-500 mb-12">
          Send a message and I will get back to you.
        </p>

        {sent ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center border border-gray-300 p-10 rounded-2xl flex flex-col items-center"
          >
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-semibold mb-2">Message Sent</h3>
            <p className="text-gray-500">Thank you for reaching out. I will respond soon.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              className="hidden"
            />

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={!isFormValid || loading}
              className="cursor-pointer w-full border border-black py-3 rounded-lg hover:bg-black hover:text-white transition duration-300 flex justify-center items-center disabled:opacity-40"
            >
              {loading ? (
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.2" />
                  <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" />
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}