import React,{useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { addContactApi } from "../../RESTAPI/userApi";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../../Loading";



const Contact = () => {

  const [isLoading, setLoading] = useState(false);


  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    msg: "",
  });

const handleForm = (e) => {
  setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
};

async function submitForm(e) {
  e.preventDefault();
  //
  setLoading(true)
  if (form.name === "" || form.email === "" || form.phone === "" || form.subject === "" || form.msg === "") {
    return toast.warning("Enter Full Details");
  }

 
  const res = await addContactApi(form);

  let msg = res.res;
  if (res.code === 200) {
    setForm({})
    toast.success("Form Successfully Submited");
  } else {
    if (res.code != 406) {
      msg = "Technical Error";
    }
    toast.error(msg);
  }
  setLoading(false)
}



  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="font-manrope overflow-hidden">
          <Navbar />
          <form onSubmit={submitForm} method="post">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mx-[10%] my-10 p-[5%] border border-1  shadow-lg">
              <h1 className="text-4xl text-center text-secondary font-semibold  pb-16 col-span-2">
                Get in Touch
              </h1>
              <div className="md:col-span-1 col-span-2 ">
                <input
                  className="font-semibold  text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
                  type="text"
                  required
                  placeholder="Enter Your Name"
                  onChange={handleForm}
                  value={form.name}
                  name="name"
                />
              </div>

              <div className="md:col-span-1 col-span-2">
                <input
                  className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
                  type="email"
                  required
                  placeholder="Enter Email"
                  onChange={handleForm}
                  value={form.email}
                  name="email"
                />
              </div>

              <div className="md:col-span-1 col-span-2">
                <input
                  className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
                  type="number"
                  required
                  placeholder="Enter Phone"
                  onChange={handleForm}
                  value={form.phone}
                  name="phone"
                />
              </div>
              <div className="md:col-span-1 col-span-2">
                <input
                  className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
                  type="text"
                  required
                  placeholder="Enter Subject"
                  onChange={handleForm}
                  value={form.subject}
                  name="subject"
                />
              </div>
              <div className="col-span-2">
                <textarea
                  rows="4"
                  required
                  className="font-semibold text-secondary border border-1 border-gray-400 focus:outline-0 w-full p-3"
                  placeholder="Write your thoughts here...."
                  onChange={handleForm}
                  value={form.msg}
                  name="msg"
                ></textarea>
              </div>
              <div>
                <button className=" bg-primary px-5 py-3  font-semibold text-white hover:bg-secondary duration-500">
                  Submit Now
                </button>
              </div>
            </div>
          </form>
          <Footer />
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Contact;
