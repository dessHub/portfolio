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
            <p className="testimonials__content-title">Denis Sagardia</p>
            <p className="testimonials__content-subtitle">(Product Manager - Lola)</p>
            <p className="testimonials__content-copy">I have been working with Desmond at mylola.com and I am delighted to write a recommendation for him. Desmond comes every day to work with a can do attitude. There is no challenge that he is not willing to take on and he is relentless in his pursue of the right solution. For example, Desmond created a mini CMS (content management system) that is widely used by the business to create promotional and other pages that has been a great asset, every day surprising us with the flexibility and scalability of the solution.

Desmond learns at a very fast pace, is not shy about communicating his ideas and has a great sense of humor. But above all this, what I am most impressed about is his work ethic. He works hard every day to make sure he meets his commitments with the highest quality possible.

Every day is a pleasure to work with someone as smart, as dedicated, as hard working and as kind as Desmond. We are lucky he is part of the team.</p>
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
            <p className="testimonials__content-title">Rodgers Kishagha</p>
            <p className="testimonials__content-subtitle">(Software Engineer - Andela)</p>
            <p className="testimonials__content-copy">Korir is not only skilled technically but also has the soft skills necessary to integrate seamlessly into a new team. He is passionate about technology and building products that can change the world. Working with him has been a great experience, especially how he uses his expertise in Javascript and software development as a whole to ensure the team meets its targets.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Testimonials;
