import { useState } from "react";
import axios from "axios";

function AddPerfume() {
  const [perfume, setPerfume] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfume({ ...perfume, [name]: value });
  };

  const handleImageChange = (e) => {
    setPerfume({ ...perfume, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", perfume.name);
    formData.append("description", perfume.description);
    formData.append("price", perfume.price);
    formData.append("image", perfume.image);

    try {
      await axios.post("http://localhost:5000/api/perfumes", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Perfume added successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to add perfume.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Add New Perfume</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter perfume name" onChange={handleChange} required style={{ width: "100%", marginBottom: "10px" }} />
        <textarea name="description" placeholder="Enter perfume description" onChange={handleChange} required style={{ width: "100%", marginBottom: "10px" }} />
        <input type="number" name="price" placeholder="Enter price" onChange={handleChange} required style={{ width: "100%", marginBottom: "10px" }} />
        <input type="file" onChange={handleImageChange} required style={{ width: "100%", marginBottom: "10px" }} />
        <button type="submit" style={{ width: "100%", backgroundColor: "#007bff", color: "white", padding: "10px", border: "none", borderRadius: "4px" }}>
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddPerfume;
