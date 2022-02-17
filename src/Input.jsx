import React, { useState } from 'react';

const Input = ({addTask}) => {
    const [title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(title)
        setTitle("")
    }
    const handleChange = (e) => {
        setTitle(e.currentTarget.value)
    }
    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
  return <div className='App'>
      <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={title} type="text" />
      <button>Save</button>
      </form>
  </div>;
};

export default Input;
