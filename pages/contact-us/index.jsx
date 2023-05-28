import { Layout } from "@/components/common";
import { Container } from "@/components/ui";

const Contact = () => {
  return (
    <Container
      heading="Contact Us"
      description="Want to send feedback about our coffee apps? Need to submit a coffee roaster? Let us know."
    >
      <div>
        <div className="relative py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <htmlForm action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 font-medium dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="absolute right-4 py-3 px-5 text-sm font-medium text-center text-secondary-dk rounded-lg bg-dark sm:w-fit hover:bg-primary-dk focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send message
            </button>
          </htmlForm>
        </div>
      </div>
    </Container>
  );
};
export default Contact;

Contact.Layout = Layout;
