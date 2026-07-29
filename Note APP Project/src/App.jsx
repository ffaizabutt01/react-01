import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    if (!title.trim() || !detail.trim()) return // empty note allow nahi karega

    const copyTask = [...task]
    copyTask.push({ id: Date.now(), title, detail }) // unique id for safe delete/key

    setTask(copyTask)
    setTitle('')
    setDetail('')
  }

  const deleteHandler = (id) => {
    setTask(task.filter((item) => item.id !== id))
  }

  return (
    <div className='min-h-screen bg-black text-white p-4'>

      <h1 className='text-4xl font-bold text-center'>Notes APP</h1>

      <form
        onSubmit={submitHandler}
        className='bg-gray-900 text-white flex flex-col items-center px-10 py-10 w-full md:w-1/2 mt-6 mx-auto rounded-2xl'
      >
        <div className='flex gap-4 flex-col items-start w-full font-medium'>

          <input
            onChange={(e) => setTitle(e.target.value)}
            className='bg-gray-800 px-5 py-4 w-full border-2 rounded'
            type='text'
            placeholder='Enter Notes Heading'
            value={title}
          />

          <textarea
            onChange={(e) => setDetail(e.target.value)}
            className='w-full bg-gray-700 px-4 py-2 h-40 border-2 rounded'
            placeholder='Enter Details'
            value={detail}
          />

          <button className='w-full active:scale-95 bg-cyan-950 px-5 py-2 rounded-2xl'>
            Add Note
          </button>
        </div>
      </form>

      <div className='bg-sky-950 p-10 w-auto mx-4 md:mx-15 overflow-auto mt-15 rounded-3xl'>
        <h2 className='text-4xl font-bold'>Your Notes</h2>

        <div className='mt-9 rounded-2xl  flex flex-wrap gap-10 '>
          {task.length === 0 && (
            <p className='text-gray-400'>No notes yet. Add one above!</p>
          )}

          {task.map((elem) => (
            <div
              key={elem.id}
              className='h-52 w-52 rounded-2xl bg-[url("https://i.pinimg.com/vwebp/1200x/87/ba/bd/87babdb05dd91c75d979eba995af03df.webp")] bg-cover  p-4 relative flex flex-col'
            >
              <h3 className='font-bold mt-2 text-black'>{elem.title}</h3>
              <p className='mt-2 flex-1 text-gray-600'>{elem.detail}</p>

              <button
                onClick={() => deleteHandler(elem.id)}
                className='absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-xs px-2 py-1 rounded'
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App