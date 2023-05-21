

const login=async()=>{
    const loginData = {
        UserName: 'mahi',
        password: '1234567'
      };
      
      fetch('http://localhost:3000/tsir/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Login failed');
          }
        })
        .then(userdata => {
          // Handle the response data
          localStorage.setItem("userdata",JSON.stringify(userdata))
          console.log(localStorage.getItem(userdata));
        })
        .catch(error => {
          // Handle any errors
          console.error(error);
        });
      

}

