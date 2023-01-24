import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { addVolunteerApi } from '../../RESTAPI/userApi';
 import { ToastContainer, toast } from "react-toastify";
import Loading from '../../Loading';
 import "react-toastify/dist/ReactToastify.css";

const Volunteer = () => {

  const[isLoading,setLoading]=useState(false);

  const [form,setForm]=useState({
    name:"",
    email:"",
    phone:"",
    dob:"",
    gender:"Male",
    state:"",
    district:"",
    address:""
  })


const [idCard,setIdCard]=useState(null);
const [photo, setPhoto] = useState(null);


const handleForm = (e) =>{
  setForm((form) => ({ ...form, [e.target.name]: e.target.value }));

}

async function submitForm(e){
  e.preventDefault();
  
  setLoading(true)

  if(form.name===""  || form.email===""  || form.phone===""  || form.dob===""  || form.gender===""  || form.state===""  || form.district===""  || form.address===""){
return toast.warning("Enter Full Details");
  }

  const formData = new FormData();
  for (var key in form) {
    if (form.hasOwnProperty(key)) {
      formData.append(key, form[key]);
    }
  }
  formData.append("idCard", idCard);
  formData.append("photo", photo);

 const res= await addVolunteerApi(formData)
 console.log(res)
 let msg = res.res;

 if(res.code===200){
  toast.success(msg);
 }else{

  if(res.code!=406){
    msg="Technical Error"
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
          <form
            onSubmit={submitForm}
            method="POST"
            enctype="multipart/form-data"
          >
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mx-[10%] my-10 p-[5%] border border-1  shadow-lg">
              <h1 className="text-4xl text-center text-secondary font-semibold  pb-16 col-span-2">
                BECOME VOLUNTEER
              </h1>
              <div className="md:col-span-1 col-span-2 ">
                <h1 className="text-lg font-semibold">Name</h1>
                <input
                  className="font-semibold  text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
                  type="text"
                  required
                  onChange={handleForm}
                  value={form.name}
                  name="name"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="md:col-span-1 col-span-2">
                <h1 className="text-lg font-semibold">Email</h1>
                <input
                  className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
                  type="email"
                  required
                  onChange={handleForm}
                  value={form.email}
                  name="email"
                  placeholder="Enter Email"
                />
              </div>

              <div className="md:col-span-1 col-span-2">
                <h1 className="text-lg font-semibold">Phone Number</h1>
                <input
                  className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
                  type="number"
                  required
                  onChange={handleForm}
                  value={form.phone}
                  name="phone"
                  placeholder="Enter Phone"
                />
              </div>
              <div className="md:col-span-1 col-span-2">
                <h1 className="text-lg font-semibold">Date of Birth</h1>
                <input
                  className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
                  type="date"
                  required
                  onChange={handleForm}
                  value={form.dob}
                  name="dob"
                  placeholder="Date of Birth"
                />
              </div>
              <div className="md:col-span-1 col-span-2">
                <h1 className="text-lg font-semibold">Gender</h1>
                <div className="font-semibold bg-white text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3">
                  <input
                    name="gender"
                    value="Male"
                    onChange={handleForm}
                    type="radio"
                  />
                  <span className="mr-8 ml-2">Male</span>
                  <input
                    name="gender"
                    value="Female"
                    onChange={handleForm}
                    type="radio"
                  />
                  <span className="mr-8 ml-2">Female</span>
                  <input
                    name="gender"
                    value="Other"
                    onChange={handleForm}
                    type="radio"
                  />
                  <span className="mr-8 ml-2">Other</span>
                </div>
              </div>
              <div className="md:col-span-1 col-span-2">
                <h1 className="text-lg font-semibold">State</h1>
                <input
                  className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
                  type="text"
                  required
                  onChange={handleForm}
                  value={form.state}
                  name="state"
                  placeholder="State"
                />
              </div>
              <div className="md:col-span-1 col-span-2">
                <h1 className="text-lg font-semibold">District</h1>
                <input
                  className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
                  type="text"
                  required
                  onChange={handleForm}
                  value={form.district}
                  name="district"
                  placeholder="District"
                />
              </div>
              <div className="md:col-span-1 col-span-2">
                <h1 className="text-lg font-semibold">Id Card</h1>
                <input
                  className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
                  type="file"
                  onChange={(e) => setIdCard(e.target.files[0])}
                  required
                />
              </div>
              <div className="md:col-span-1 col-span-2">
                <h1 className="text-lg font-semibold">Photo</h1>
                <input
                  className="font-semibold text-secondary border border-1 border-gray-400  focus:outline-0 w-full p-3"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  type="file"
                  required
                />
              </div>
              <div className="col-span-2">
                <textarea
                  rows="4"
                  required
                  className="font-semibold text-secondary border border-1 border-gray-400 focus:outline-0 w-full p-3"
                  onChange={handleForm}
                  value={form.address}
                  name="address"
                  placeholder="Write your Address here...."
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
}

export default Volunteer