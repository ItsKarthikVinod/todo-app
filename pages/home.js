import React from 'react'
import TodoCard from '../components/TodoCard';

function Home() {
  return (
    <div>
      <div className="w-full   grid grid-cols-2 m-0">
        <div className="w-full h-full ">
          <h1 className="text-3xl text-center">Tasks to be Done</h1>
        </div>
        <div className="w-full h-full ">
          <h1 className="text-3xl text-center">Tasks that are Done</h1>
        </div>
      </div>
    </div>
  );
}

export default Home