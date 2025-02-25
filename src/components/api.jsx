import React,{useState,useEffect} from "react";

const Api=()=>{
  const [users,setusers]=useState([])
  const [search,setSearch]=useState(" ")
  const [filter,setFilter]=useState([])
  const [loading,setLoading]=useEffect(true)

    useEffect (()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>{
            setusers(data),
            setFilter(data)
            setLoading(false)
        })
        .catch(error=>console.error(error))
        setLoading(false)
    },[])

    useEffect(()=>{
         const updatedList = users.filter(user=>
            user.name.toLowerCase().includes(search(toLowerCase()))
         )
         setFilter(updatedList)
    },[search,users])

    return(
        <div>
            <h1>Users List</h1>
            <input type="text" value={search} placeholder="search users by name" onChange={(e)=>setSearch(e.target.value)}/>

            {loading ? (<p>Loading users...</p>) :(
                <div>
                    
                        <ul>
                            {filter.map((user)=>(
                                 <li key={user.id}>
                                    <p>{user.name} -- {user.email}</p>

                                 </li>
                            ))}
                        </ul>
                    
                    
                    </div>
            )
            }

        </div>
    )

}
export default Api




