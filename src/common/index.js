const domain = "http://localhost:5000"


const summaryAPI = {
    signup: {
         url:`${domain}/api/signup`,
         method:"POST"
    },
    signin: {
         url:`${domain}/api/signin`,
         method:"POST"
    },
     current_user: {
           url:`${domain}/api/user-details`,
           method:"GET"
     },
     logout_user : {
          url:`${domain}/api/logout`,
          method:"GET"
     },
     all_users : {
          url:`${domain}/api/all-users`,
          method:"GET"
     }
}

export default summaryAPI