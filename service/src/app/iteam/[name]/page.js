import React from "react";
import serviceData from "../../data/serviceData"; 
import '../../style/style.css'
import { title } from "process";




function url(title) {
  let result = title.replace(/_/g, " ");
  return result;
}

async function Page({ params }) {
  const { name } = params;
  const pathUrl=await url(name)

  // Find the service with the matching title
  let  service = serviceData.find((service) => service.title === pathUrl);

  return (
    <>
      {service ? (
        <div className="apply-div">
          <ul>
            <h1>{service.title}</h1>  
            <p>{service.description}</p>  
            <div>{service.form}</div>  
          </ul>        
        </div>
      ) : (
        <p>Service not found</p>
      )}
    </>
  );
}

export const metadata={
  title:`xxx`,
  description:'hello'
}

export default Page;
