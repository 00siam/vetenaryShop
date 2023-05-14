import React from "react"
import Nav from "../NabBar/Nav"
import Footer from "../Footer/Footer"

const AboutUs = ({foo = false, header = false}) => {
  return (
    <>
         <Nav />


         {/* heading */}
         {
        header ? " ":  <div className="container">
        <h2 style={{ color: "orange", marginTop: 80 }}> About Us</h2>
      </div>
     }


        <div   >
            <div style={{display:"inline",width:"50%", height:"90%", float:"left", padding:"2%", marginLeft:"2%", marginTop:"1%"}}>
                <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/01/Top-10-Ranking-About-Us-Pages.png" alt="image not found" style={{width:"65%", height:"20%", backgroundColor: "grey", padding:"2%"}}/>
            </div>
            <div style={{float:"right", marginRight:"2%"}}>
                <p style={{width: 606, textAlign: "justify", padding: 40, border:"2 px solid black"}}>
                We started veterinarians Vets to bridge the rising gap between affordable pet healthcare and pet parents in India. We noticed a lot of pet parents struggling to find the time to visit a clinic, leading to a delay in getting the necessary treatment. Moreover, many cases are minor, eliminating the need to visit a clinic. That’s when we asked ourselves and decided to create an online platform that connects expert online veterinarians to pet parents in India. <br /><br />

                By consulting with expert veterinarians on Jaldee Vets, you provide a stress-free experience for your pets and yourself! Be it for solving minor queries or health conditions, and you can rest easy knowing you are receiving the best quality care from our qualified doctors. <br /><br />

                </p>
            </div>
        </div>



         <div style={{marginTop:450}}>
         {
          foo ? " " : <div> <Footer/> </div>
         }
        </div>
    </>
  )
}

export default AboutUs;
