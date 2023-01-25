import React from 'react'

function AboutUs() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">About Us</h1>
      <h1 className='text-xl my-10'>Hey There!</h1>
      <p>We are students studying in the 9th Grade</p>
      <p>We made this website because of our passion for IT.</p>
      <p>
        This is a Todo List website which mainly helps the students to maintain
        their day-to-day tasks.
      </p>
      <p>We have made this website for Digital Fest by Habitat School.</p>
      <p>Thanks to Habitat for giving us this wonderful opportunity </p>
      <div class="social">
        <li>
          <a href="https://www.youtube.com/@uptodate_todo " target="_blank">
            <i class="fa-brands fa-youtube youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/uptodate.todo/ " target="_blank">
            <i class="fa-brands fa-instagram instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100089417363276 "
            target="_blank"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
        </li>
      </div>
    </div>
  );
}

export default AboutUs