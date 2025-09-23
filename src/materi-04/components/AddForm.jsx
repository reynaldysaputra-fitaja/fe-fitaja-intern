import '../App.css'
import Select from "react-select";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "./todoSlice"
import { closeForm } from "./uiSlice"
import { v4 as uuidv4 } from "uuid"
import { FaBriefcase, FaUser, FaMoneyBill, FaShoppingCart, FaBook } from "react-icons/fa";
import successImg from '../assets/success.jpg'

export default function AddForm() {
  const dispatch = useDispatch()
  const [text, setText] = useState("")
  const [category, setCategory] = useState(null);
  const [showPopup, setShowPopup] = useState(false)

  const options = [
    { value: "work", label: "Work", icon: <FaBriefcase /> },
    { value: "personal", label: "Personal", icon: <FaUser /> },
    { value: "finance", label: "Finance", icon: <FaMoneyBill /> },
    { value: "shopping", label: "Shopping", icon: <FaShoppingCart /> },
    { value: "study", label: "Study", icon: <FaBook /> },
  ];

  const customOption = (props) => {
    const { innerRef, innerProps, data } = props;
    return (
      <div ref={innerRef} {...innerProps} className='option'>
        <span>{data.label}</span>
        <span>{data.icon}</span>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch(addTodo({ 
        id: uuidv4(), 
        text, 
        category: category.value, 
        time: new Date().toISOString() }))
      setShowPopup(true)
    }
  }

  return (
    <div className="boxForm">
      <form id='addform' className='form' onSubmit={handleSubmit}>
        <h3>Add Todo</h3>
        <div className='title'>
          <label>Title </label>
          <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Input todo"
          />
        </div>
        
        <div>
          <Select
            options={options}
            components={{ Option: customOption }}
            onChange={setCategory}
            value={category}
            placeholder="Category"
          />
        </div>
        
        <br />
        <div className='button'>
          <button type="submit">Add</button>
          <button type="button" onClick={() => dispatch(closeForm())}>Cancel</button>
        </div>
      </form>

      {showPopup && (
        <div className='pop-up'>
          <div className='box-popup'>
            <h3>Task added successfully!</h3>
            <img src={successImg}/> <br/>
            <button onClick={() => dispatch(closeForm())}>Home</button>
          </div>
        </div>
      )}
    </div>
  )
}