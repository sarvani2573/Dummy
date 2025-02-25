import { useState, useEffect } from "react";

const FilterList1 = () => {
  const [items, setItems] = useState([]); 
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  useEffect(() => {
    fetch("/data.json") 
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  
  useEffect(() => {
    const updatedList = [...items] 
      .filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((item) => 
        selectedCategory === "All" || item.category === selectedCategory
      )
      .sort((a, b) => a.category.localeCompare(b.category));

    setFilteredItems(updatedList); 
  }, [search, selectedCategory, items]); 

  return (
    <div>
      <h1>List Items</h1>

     
      <input  type="text" value={search}  placeholder="Search by name..."  onChange={(e) => setSearch(e.target.value)}/>

    
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Fruit">Fruits</option>
        <option value="Vegetable">Vegetables</option>
      </select>

    
      {filteredItems.map((item) => (
        <div key={item.id}>
          {item.name} {item.category}
        </div>
      ))}
    </div>
  );
};

export default FilterList1;
