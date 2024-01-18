import axios from "axios"

export const fetchDoctors = async () => {
  try{
    const response = await axios.get("https://496b1d72-525e-490f-a601-282aba4496de-00-1suddbs9zxwbc.spock.replit.dev/")
    console.log(response.data.doctors)
  }catch(error){
   console.error(error)
  }
   
  };
  
  export default fetchDoctors;