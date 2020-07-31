import React, { Component } from 'react';
import Typical from 'react-typical'
            
       

class Portfolio extends Component {

  componentDidMount() {
    this.setState({conentWrapperMinHeight: "600px"})
}
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    

    return (
      <section id="header">

      <div className="row">

         <div className="ten columns flex-container">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                
            </div>

            <h1>{/*  className="responsive-headline">I'm {name}. */}
          <Typical
               steps={['Coming soon ...', 2000]}
               loop={1}
               wrapper="p"
            />
            </h1>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
