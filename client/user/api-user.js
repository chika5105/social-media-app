//contains user  apis for CRUD activiities

async function create(user) {
    let response = await fetch('/api/users/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);   
    } else {
        return response.json();
    }
}

create(user)
    .catch(err=>{
        console.log(err)
    })




async function list() {
    let response = await fetch('api/users/',{
        method: "GET"
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return await response.json();
    }
}
list()
    .catch(err=>{
        console.log(err)
    })



async function read(params,credentials) {
    let response = await fetch('/api/users/'+ params.userId,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        }

    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return await response.json();
    }
}
read(params, credentials)
    .catch(err=>{
        console.log(err)
    })



async function update(params, credentials,user) {
    let response = await fetch('/api/users/'+ params.userId,{
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(user)
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return await response.json();
    }
}
update(params, credentials, user)
    .catch(err=> {
        console.log(err)
    })



async function remove(params,credentials){
    let response = await fetch('/api/users/'+ params.userId, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        }
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return await response.json();
    }

}
remove(params,credentials)
    .catch(err=>{
        console.log(err)
    })

    export { create, list, read,update, remove }