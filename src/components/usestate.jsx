import { useState } from "react";

const FilterList = ()=>{
  const List = [
     {id:1,  name: "Apple", category: "Fruit"},
     {id:2, name:"Carrot", category: "Vegetable" },
     { id: 3, name: "Banana", category: "Fruit" },
     { id: 4, name: "Broccoli", category: "Vegetable" },
    { id: 5, name: "Orange", category: "Fruit" },
    { id: 6, name: "Spinach", category: "Vegetable" },
  ]
  const [search, setSearch] = useState("");

  const filteredItems=List.filter((items)=>
    items.name.toLowerCase().includes(search.toLowerCase())
   )

    return(
         <div>
            <h1>List Item</h1>
            <input type="text" value={search} placeholder="search by name.." onChange={(e)=>setSearch(e.target.value)}/>
            {filteredItems.map((item)=>(
                <div key={item.id}> 
                     {item.name} 
                </div>
            ))}
         </div>
    )
}
export default FilterList