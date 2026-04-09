import React, { useState } from "react";
function ProductList() {
const [products] = useState([
{ id: 1, name: "Laptop" },
{ id: 2, name: "Mobile" },
{ id: 3, name: "Headphones" },
{ id: 4, name: "Keyboard" }
]);
const [view, setView] = useState("grid");
const [filter, setFilter] = useState("");
const [hovered, setHovered] = useState(null);
const filteredProducts = products.filter(product =>
product.name.toLowerCase().includes(filter.toLowerCase())
);
return (
<div>
<input
type="text"
placeholder="Search product"
onChange={(e)=>setFilter(e.target.value)}
/>
<button onClick={() => setView(view === "grid" ? "list" : "grid")}>
Toggle View
</button>
{
filteredProducts.length === 0 ?
<p>No products available</p>
:
<div style={{
display:"grid",
gridTemplateColumns: view==="grid" ? "repeat(3,1fr)" : "repeat(1,1fr)",
gap:"10px"
}}>
{
filteredProducts.map(product => (
<div
key={product.id}
onMouseEnter={()=>setHovered(product.id)}
onMouseLeave={()=>setHovered(null)}
style={{
padding:"10px",
border:"1px solid black",
backgroundColor: hovered===product.id ? "lightgray" : "white"
}}
>
{product.name}
</div>
))
}
</div>
}
</div>
);
}
export default ProductList;