import NavBar from "../components/NavBar";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xwprqzog");

  if (state.succeeded) {
    return (
      <div className="flex flex-col w-full h-full items-center justify-center text-center gap-4">
        <NavBar includeHome={true} />
        <div>
            <p className="text-2xl font-bold">Thank you for your message!</p>
            <p>I will get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-screen items-center pt-4 gap-8">
      <NavBar includeHome={true} />
      <div className="w-full max-w-md p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="bg-gray-800 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 mt-1" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="bg-gray-800 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Email Address"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 mt-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              className="bg-gray-800 rounded-lg p-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Message"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 mt-1"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out disabled:bg-gray-500"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;