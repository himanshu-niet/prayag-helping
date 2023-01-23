import axios from "axios";
const url = "https://prayaghelping-backend.vercel.app/api";

const addVolunteerApi=async(data)=>{
try {
      const response = await axios({
        method: "post",
        url: `${url}/volunteer`,
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });
      let res = await response.data
      let code =response.status;
      res=res.messages
      return {res,code}
} catch (error) {
   return(error.message)
}

}


const addContactApi = async (data) => {
  try {
    const response = await axios({
      method: "post",
      url: `${url}/contact`,
      data: data,
    });
    let res = await response.data;
    let code =response.status;
    res = res.messages;
    return { res, code };
  } catch (error) {
    return error.message;
  }
};


export { addVolunteerApi, addContactApi };