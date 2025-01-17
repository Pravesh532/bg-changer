import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <> 
    <h1> Hellow Codder 
    <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
    >
       <div className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2
        ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 rounded-3xl">
          <button className='outline-none px-5 py-1
          rounded-full text-white shadow-lg'
          onClick={() => setcolor("red")}
            style={{backgroundColor:"red"}}
          >
            Red
          </button>
          <button className='outline-none px-5 py-1
          rounded-full text-white shadow-lg'
            style={{backgroundColor:"black"}}
            onClick={() => setcolor("black")}
          >
            black
          </button>
          <button className='outline-none px-5 py-1
          rounded-full text-white shadow-lg'
            style={{backgroundColor:"green"}}
            onClick={() => setcolor("green")}
          >
            green
          </button>
          <button className='outline-none px-5 py-1
          rounded-full text-white shadow-lg'
            style={{backgroundColor:"pink"}}
            onClick={() => setcolor("pink")}
          >
            pink
          </button>
          <button className='outline-none px-5 py-1
          rounded-full text-white shadow-lg'
            style={{backgroundColor:"orange"}}
            onClick={() => setcolor("orange")}
          >
            orange
          </button>
          <button className='outline-none px-5 py-1
          rounded-full text-white shadow-lg'
            style={{backgroundColor:"yellow"}}
            onClick={() => setcolor("yellow")}
          >
            yellow
          </button>
          <button className='outline-none px-5 py-1
          rounded-full text-white shadow-lg'
            style={{backgroundColor:"blue"}}
            onClick={() => setcolor("blue")}
          >
           blue
          </button>
          <button className='outline-none px-5 py-1
          rounded-full text-black shadow-lg'
            style={{backgroundColor:"white"}}
            onClick={() => setcolor("white")}
          >
            white
          </button>
         

          </div>
        </div>

    </div>
    </h1>
    </>
  )
}

export default App
