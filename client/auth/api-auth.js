//Apis for authentication
const signin = (user) => {
    return fetch('/auth/signin/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }
  
  const signout = () => {
    return fetch('/auth/signout/', {
      method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
  }
  
  export {
    signin,
    signout
  }
  
















//implementing with async and await
/*
async function signin(user){
    let response = await fetch('/auth/signin/', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return await response.json();
    }
}
signin(user)
    .catch(err=>{
        console.log(err)
    })


async function signout(){
    let response = await fetch('/auth/signout/', {
        method: 'GET',
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return await response.json();
    }
}

signout()
    .catch(err=>{
        console.log(err)
    })

export{ signin, signout}
**/