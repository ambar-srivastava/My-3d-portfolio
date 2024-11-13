import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

   const formRef = useRef();

   const [loading, setLoading] = useState(false)
   const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
   });

   //service_ug1j7tn

   const handleChange = ({target:{name, value}}) => {
    setForm({...form, [name]: value})
   } 
   const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try{
        await emailjs.send("service_ug1j7tn", "template_fd2swr5", {
            from_name: form.name,
            to_name: "Ambar", 
            from_email: form.email, 
            to_email:"ambar27sri@gmail.com", 
            message: form.message
        }, "O8p46qK42Zv3a8n0C");

        setLoading(false);

        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
            name: "",
            email: "",
            message: "",
        })

    } catch(error){
        setLoading(false);
        console.error(error);
        alert("Something went wrong.");
    }
   } 
    
  return (
    <section id="contact" className='c-space my-20 max-w-7xl lg:mx-auto'>
        <div className='relative min-h-screen flex justify-center items-center flex-col'>
            <img src="/assets/terminal.png" alt="terminal" className=" absolute inset-0 min-h-screen"/>
            <div className="contact-container">
                <h3 className="head-text">Let&apos;s Connect</h3>
                <p className="text-lg text-white-600 mt-3">Whether you are ooking to build a new website, improve your existing one, or have a unique idea, I am here to help.</p>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                    <label className="space-y-3">
                        <span className=" field-label">Full Name</span>
                        <input type="text" name="name" value = {form.name} onChange={handleChange} required className="field-input" placeholder="John Doe"/>
                    </label>
                    <label className="space-y-3">
                        <span className=" field-label">Email</span>
                        <input type="email" name="email" value = {form.email} onChange={handleChange} required className="field-input" placeholder="johndoe@gmail.com"/>
                    </label>
                    <label className="space-y-3">
                        <span className=" field-label">Your message</span>
                        <textarea type="text" name="message" value = {form.message} onChange={handleChange} required rows={5} className="field-input resize-none" placeholder="Hi, I am interested in building a website..."/>
                    </label>

                    <button type="submit" className="field-btn" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                    </button>
                </form>
            </div>
        </div>
    </section>
  );
};

export default Contact