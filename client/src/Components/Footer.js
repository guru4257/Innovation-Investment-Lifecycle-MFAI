import React from "react";
import { Link } from "react-router-dom";

const Footer = ()=>{

    return(
  //       <>
  //        {/* <div className="container pt-4" style={{marginBottom:"0%"}}>
  //   <section className="mb-4">
  //     <a
  //       className="btn btn-link btn-floating btn-lg text-dark m-1"
  //       href="#!"
  //       role="button"
  //       data-mdb-ripple-color="dark"
  //       ><i className="fab fa-facebook-f"></i
  //     ></a>
  //     <a
  //       className="btn btn-link btn-floating btn-lg text-dark m-1"
  //       href="#!"
  //       role="button"
  //       data-mdb-ripple-color="dark"
  //       ><i className="fab fa-twitter"></i
  //     ></a>
  //     <a
  //       className="btn btn-link btn-floating btn-lg text-dark m-1"
  //       href="#!"
  //       role="button"
  //       data-mdb-ripple-color="dark"
  //       ><i className="fab fa-google"></i
  //     ></a>
  //     <a
  //       className="btn btn-link btn-floating btn-lg text-dark m-1"
  //       href="#!"
  //       role="button"
  //       data-mdb-ripple-color="dark"
  //       ><i className="fab fa-instagram"></i
  //     ></a>
  //     <a
  //       className="btn btn-link btn-floating btn-lg text-dark m-1"
  //       role="button"
  //       data-mdb-ripple-color="dark"
  //       ><i className="fab fa-linkedin"></i
  //     ></a>
  //     <a
  //       className="btn btn-link btn-floating btn-lg text-dark m-1"
  //       href="#!"
  //       role="button"
  //       data-mdb-ripple-color="dark"
  //       ><i className="fab fa-github"></i
  //     ></a>
  //   </section>
  // </div> */}
  // <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
  //   © 2023 Copyright:
  //   <Link className="text-dark" to='/'>GUSA</Link>
  // </div>
  //       </>
  <footer className="bg-light text-center text-white">
 
  <div className="container p-4 pb-0">
  
    <section className="mb-4">
     
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#3b5998"}}
        href="#!"
        role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#55acee"}}
        href="#!"
        role="button"
        ><i className="fab fa-twitter"></i
      ></a>

      
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor:"#dd4b39"}}
        href="#!"
        role="button"
        ><i className="fab fa-google"></i
      ></a>

    
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#ac2bac"}}
        href="#!"
        role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#0082ca"}}
        href="#!"
        role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>
      
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#333333"}}
        href="#!"
        role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>
   
  </div>
  

  
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)",color:"black"}}>
    © 2023 Copyright:
    <strong><a className="text-black" href="https://mdbootstrap.com/"> SNS SQUARES | MINDFULAI </a></strong>
  </div>
 
</footer>

    );
}

export default Footer;