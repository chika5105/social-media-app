//Apis for authentication

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