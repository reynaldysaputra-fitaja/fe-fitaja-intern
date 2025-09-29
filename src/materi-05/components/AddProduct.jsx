import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { closeForm } from "../state/uiSlice"
import { resetForm, setFormValue } from "../state/appSlice";
import { useAddPostMutation } from "../state/api"

export default function AddProduct() {
  const dispatch = useDispatch()
  const { form } = useSelector((state) => state.app);
  const [showPopup, setShowPopup] = useState(false)
  const [addProduct] = useAddPostMutation()

  const handleChange = (e) => {
    dispatch(setFormValue({ field: e.target.name, value: e.target.value }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault()
      await addProduct(form).unwrap();
      dispatch(resetForm())
      setShowPopup(true)
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
        <input
          type="text"
          name="brand"
          value={form.brand}
          onChange={handleChange}
          placeholder="Brand"
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="border rounded px-3 py-2"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="number"
          step="0.1"
          name="rating"
          value={form.rating}
          onChange={handleChange}
          placeholder="Rating"
          className="border rounded px-3 py-2"
        />
        <textarea
          name="review"
          value={form.review}
          onChange={handleChange}
          placeholder="Review"
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          name="image_link"
          value={form.image_link}
          onChange={handleChange}
          placeholder="Image Link"
          className="border rounded px-3 py-2"
          />
        <button
          type="submit"
          className="bg-[#18A661] hover:bg-green-800 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
        <button
          type="button" 
          onClick={() => dispatch(closeForm())}
          className="bg-[#18A661] hover:bg-green-800 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </form>
      {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white max-w-md rounded-xl text-center">
              <h3 className="m-5">Product added successfully!</h3>
              <img className="w-50 m-5" src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png"/> <br/>
              <button className="w-30 h-8 bg-[#18A661] hover:bg-green-800 rounded-2xl mb-5 text-white font-bold" onClick={() => dispatch(closeForm())}>Home</button>
            </div>
          </div>
        )}
    </div>
  )
}