import React from 'react';

function Testimonials () {
  return (
  <div className="testimonials">
      <div className="testimonials__header">
        What people say about me
      </div>
      <div className="testimonials__body">
        <div class="testimonials__container left">
          <div class="testimonials__content">
            <p className="testimonials__content-title">Rodgers Kishagha</p>
            <p className="testimonials__content-subtitle">(Software Engineer - Andela)</p>
            <p className="testimonials__content-copy">Korir is not only skilled technically but also has the soft skills necessary to integrate seamlessly into a new team. He is passionate about technology and building products that can change the world. Working with him has been a great experience, especially how he uses his expertise in Javascript and software development as a whole to ensure the team meets its targets.</p>
          </div>
        </div>
      </div>
      <div className="testimonials__body">
        <div class="testimonials__container right">
          <div class="testimonials__content">
            <p className="testimonials__content-title">Ian Duncan</p>
            <p className="testimonials__content-subtitle">(Software Engineer - Andela)</p>
            <p className="testimonials__content-copy">I have been privileged to work with Korir on 2 different occasions at Andela and OpenMRS. He is a very proactive and resourceful software engineer. He always has a positive attitude towards work and often steps up for a leadership role. He always thinks ahead when given some work to do and he always surprises the team with a better implementation of a given feature.</p>
          </div>
        </div>
      </div>
      <div className="testimonials__body">
        <div class="testimonials__container left">
          <div class="testimonials__content">
            <p className="testimonials__content-title">guy one</p>
            <p className="testimonials__content-subtitle">(Software Engineer - Andela)</p>
            <p className="testimonials__content-copy">COntent one</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Testimonials;
