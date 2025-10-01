import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { closeForm } from "../state/appSlice"
import { resetForm, setFormValue } from "../state/appSlice";
import { useAddPostMutation, useEditProductMutation, useGetProductByIdQuery } from "../service/api"

export default function AddProduct({ id }) {
  const dispatch = useDispatch()
  const { form, mode } = useSelector((state) => state.app);
  const [showPopup, setShowPopup] = useState(false)
  const [addProduct, { isLoading: add }] = useAddPostMutation()
  const [editProduct, { isLoading: edit }] = useEditProductMutation()

  const { data } = useGetProductByIdQuery(id, {
    skip: mode !== "edit",
  });

  useEffect(() => {
    if (data && mode === "edit") {
      dispatch(setFormValue(data));
    }
  }, [data, mode, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rating") {
        const clean = value.replace(/\D/g, "");
        dispatch(
          setFormValue({
            field: "rating",
            value: clean ? (Number(clean) / 10).toFixed(1) : "",
          })
        );
      } else {
        dispatch(setFormValue({ field: name, value }));
      }
    };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (mode === "add") {
        await addProduct(form).unwrap();
      } else if (mode === "edit") {
        await editProduct({id: form.id, ...form});
      }
      dispatch(resetForm());
    setShowPopup(true)
    };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
        <input
          type="text"
          name="brand"
          value={form.brand || ""}
          onChange={handleChange}
          placeholder="Brand"
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="name"
          value={form.name || ""}
          onChange={handleChange}
          placeholder="Name"
          className="border rounded px-3 py-2"
          required
        />
        <textarea
          name="description"
          value={form.description || ""}
          onChange={handleChange}
          placeholder="Description"
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="number"
          step="0.1"
          name="rating"
          value={form.rating || ""}
          onChange={handleChange}
          placeholder="Rating"
          className="border rounded px-3 py-2"
        />
        <textarea
          name="review"
          value={form.review || ""}
          onChange={handleChange}
          placeholder="Review"
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          name="image_link"
          value={form.image_link || ""}
          onChange={handleChange}
          placeholder="Image Link"
          className="border rounded px-3 py-2"
          />
        <button
          type="submit"
          className="bg-[#18A661] hover:bg-green-800 text-white px-4 py-2 rounded"
          >
            {mode === "add" ? "Add Product" : "Save Changes"}
        </button>
        <button
          type="button" 
          onClick={() => dispatch(closeForm())}
          className="bg-[#18A661] hover:bg-green-800 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </form>
      {add && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center rounded-xl">
          <img className="w-15 md:w-30 mx-auto" src="https://i.gifer.com/ZKZg.gif"/>
        </div>
      )}
      {edit && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center rounded-xl">
          <img className="w-15 md:w-30 mx-auto" src="https://i.gifer.com/ZKZg.gif"/>
        </div>
      )}
      {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white max-w-md rounded-xl text-center">
              <h3 className="m-5">{mode === "add" ? "Product added successfully!" : "Changes saved successfully!"}</h3>
              <img className="w-40 m-5 m-auto" src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png"/> <br/>
              <button className="w-30 h-8 bg-[#18A661] hover:bg-green-800 rounded-2xl mb-5 text-white font-bold" 
                onClick={() => dispatch(closeForm())}>
                Home</button>
            </div>
          </div>
        )}
    </div>
  )
}