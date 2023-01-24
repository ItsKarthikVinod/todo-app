import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { NavBar } from "./NavBar";


export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    (
      <>
        {openModal && <Modal setOpenModal={setOpenModal} />}
        <div className="sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white">
          <img className="h-10 img-fluid" src={`./banner.png`} alt="Banner Logo"  />
          <i
            onClick={() => setOpenModal(true)}
            className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl"
          ></i>
        </div>
      </>
    )
  );
}
