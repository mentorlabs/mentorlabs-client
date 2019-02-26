import React from 'react';

export const IdeasCard = () => (
  <div className="column is-one-third">
    <div className="card large">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <p className="title is-4 no-padding">Project Title</p>
            <p>
              <span className="title is-6">
                <a href="#">Description</a>
              </span>
            </p>
            {/* <p className="subtitle is-6">Another Value</p> */}
          </div>
          {/* <div className="media-content" /> */}
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum sapiente
          doloremque dolorum explicabo ea. Nam explicabo laborum debitis
          reprehenderit, nemo enim inventore cum voluptatum nihil impedit,
          repudiandae, beatae nesciunt illo.
          <div className="background-icon">
            <span className="icon-twitter" />
          </div>
        </div>
        <div className="">
          <button className="button is-link is-outlined"> See More</button>
        </div>
      </div>
    </div>
  </div>
);
