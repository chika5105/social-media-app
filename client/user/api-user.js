//contains user  apis for CRUD activiities
import regeneratorRuntime from "regenerator-runtime";
const create = (user) => {
    return fetch('/api/users/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }
  
  const list = () => {
    return fetch('/api/users/', {
      method: 'GET',
    }).then(response => {
      return response.json()
    }).catch((err) => console.log(err))
  }
  
  const read = (params, credentials) => {
    return fetch('/api/users/' + params.userId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
  }
  
  const update = (params, credentials, user) => {
    return fetch('/api/users/' + params.userId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: JSON.stringify(user)
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
  }
  
  const remove = (params, credentials) => {
    return fetch('/api/users/' + params.userId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
  }
  
  export {
    create,
    list,
    read,
    update,
    remove
  }
  


































//With async and await
/** import regeneratorRuntime from "regenerator-runtime";
 

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

//Methods that require authorization

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
    */