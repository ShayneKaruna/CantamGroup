import React from 'react';


const Projects = () => {

    function importAll(r) {
        return r.keys().map(r);
      }
      const images = importAll(require.context('../images/projects', false, /\.(png|jpe?g|svg)$/));
      console.log(images)

    return (

        <div>
            {images.map(image => 
                <img src={image}/>
            )}
        
        </div>

    );
};



export default Projects;


