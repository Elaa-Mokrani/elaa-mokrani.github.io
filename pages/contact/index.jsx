import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { useForm } from '@formspree/react';

const Contact = () => {
  // ✅ Utilise Formspree avec ton ID "manlqdww"
  const [state, handleSubmit] = useForm("manlqdww");

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          
          {/* small phrase */}
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-white/80 mb-10 max-w-[1000px] text-center"
          >
            Feel free to reach out for collaborations, questions, or just to say hi! I'm always excited to connect and share ideas.
          </motion.p>

          {/* ✅ FORM AVEC FORMSPREE - MÊME STYLE ! */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit} // ✅ Formspree gère l'envoi
            autoComplete="off"
            autoCapitalize="off"
          >
            {/* input group - MÊME STYLE ! */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={state.submitting}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={state.submitting}
                required
              />
            </div>
            
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={state.submitting}
              required
            />
            
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={state.submitting}
              required
            />
            
            {/* ✅ BOUTON - MÊME STYLE ! */}
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={state.submitting}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {state.submitting ? "Sending..." : "Let's talk"}
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>

            {/* ✅ MESSAGE DE SUCCÈS */}
            {state.succeeded && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent text-center mt-4"
              >
           ✅ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
      
      {/* simple phrase */}
      <motion.p
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-white/80 mb-10 max-w-[100px] text-center relative z-10 mt-10 text-center text-white/60 py-6 text-sm border-t border-white/10"
      >
        © 2025 Elaa MOKRANI. All rights reserved.
      </motion.p>
    </div>
  );
};

export default Contact;