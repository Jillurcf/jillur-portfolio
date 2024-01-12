import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j2oq3uk', 'template_tlb7ati', form.current, 'BvQpcWpomjD6XLlDM')
    .then((result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-pink-400">
        <div className="hero-content">
          
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-pink-400">
            <form className="card-body" ref={form} onSubmit={sendEmail}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Feedback</span>
                </label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Say something"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control mt-6">
              <input type="submit" value="Send" />
                {/* <button className="btn btn-primary">Submit</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
