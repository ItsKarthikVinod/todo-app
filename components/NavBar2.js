import React, { useState } from "react";
import Modal from "./Modal";
import classNames from "classnames";

function NavBar2() {
  const [activeLink, setActiveLink] = useState("home");

  const [openModal, setOpenModal] = useState(false);
  const [menu, setMenu] = useState(true);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const onClickLogin = (value) => {
    setActiveLink(value);
    setModalShow(true);
  };

  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <nav className="p-5 bg-dark shadow-2xl md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <img
            className="h-10 img-fluid cursor-pointer"
            src={`./banner.png`}
            alt="Banner Logo"
          />
          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            {menu ? (
              <ion-icon name="menu" onClick={() => setMenu(false)}></ion-icon>
            ) : (
              <ion-icon name="close" onClick={() => setMenu(true)}></ion-icon>
            )}
          </span>
        </div>
        <ul className={classNames("md:flex", 'md:items-center',  'md:z-auto', 'md:static', 'bg-inherit', 'left:0', 'md:w-auto', 'md:py-0', 'py-4', 'md:pl-0', 'pl-7' ,'md:opacity-100',  "transition-all", "ease-in duration-500",{
            'opacity-0': menu,
            'top-[400]':menu,
            'z-[-1]': menu,
            'top-[80]': !menu,
            ' absolute': menu
        }) } >
          <li className="mx-6 my-6 md:my-0">
            <a href="/home" className="text-xl hover:text-cyan-500 duration-500">
              HOME
            </a>
          </li>
          <li className="mx-6  my-6 md:my-0">
            <a href="/" className="text-xl hover:text-cyan-500 duration-500">
              TASKS
            </a>
          </li>
          <li className="mx-6  my-6 md:my-0">
            <a href="/calendar" className="text-xl hover:text-cyan-500 duration-500">
              CALENDAR
            </a>
          </li>

          <li className="mx-6  my-6 md:my-0">
            <a href="/timer" className="text-xl hover:text-cyan-500 duration-500">
              TIMER
            </a>
          </li>
          <li className="mx-6  my-6 md:my-0">
            <a href="/aboutus" className="text-xl hover:text-cyan-500 duration-500">
              ABOUT US
            </a>
          </li>
          <i
            onClick={() => setOpenModal(true)}
            className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl mx-4"
          ></i>
        </ul>
      </nav>
    </>
  );
}

export default NavBar2;
