import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';







function Body() {
  const handleClick=()=>{
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
   
      confirmButtonText:
    'back to home',
      timer: 1500
  
    });

  }
  return (
    <div>
           <div style={{}}>
                  <div>
                      <Navbar bg="light" data-bs-theme="light">
                <Container>
                  <Navbar.Brand href="#home"><img style={{width:'100px',height:'65px'}} src="https://download.logo.wine/logo/Huawei/Huawei-Logo.wine.png" alt=""  /></Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Tablet</Nav.Link>
                    <Nav.Link href="#features">Wearable</Nav.Link>
                    <Nav.Link href="#pricing">Audio</Nav.Link>
                    <Nav.Link href="#pricing">router</Nav.Link>
                    <div >
                  {/* <Nav.Link style={{marginLeft:'800px'}}  href="#pricing">Support <i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
                   */}
                  


                  </div>
                  </Nav>
                </Container>
              </Navbar>
                  </div>
                  
           </div>
           <Carousel>
      <Carousel.Item>
        <img src="https://iforum-sg.c.huawei.com/dddd/images/2020/9/11/dea3103f-2f59-4ce4-85b0-217786114173.jpg" alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>  <img style={{width:'100%',height:'680px'}} src="http://blog-marcel.eu/wp-content/uploads/2021/06/HUAWEI-WATCH-3.jpg" alt=""  />
        <Carousel.Caption>
         </Carousel.Caption>
      </Carousel.Item>
      
       
    </Carousel>
    <br />
    <br />
    <br />
    <br />
    
     <div style={{marginLeft:'100px'}}> <img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/other/in/mkt/homepage/homepage-update/model-banner/mobile.png" alt="" /></div>
  <div style={{marginLeft:'700px',marginTop:'-300px'}}>
    <h1>HUWAEI MATEPAD T8</h1>
    <p>Sleek, portable design, takes care of everyday tasks effortlessly.</p>
    <Button variant="dark">LEARN MORE</Button>
  
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <p style={{fontSize:'7ch',fontWeight:'500px'}}><b>More in Store</b></p>
  <p style={{fontSize:'5ch',fontWeight:'400px'}}>Wearable</p>
  <br />
  <br />
  <br />
  <img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/homepage/new-homepage/shelf-banner/wearables/wearables-bg.png" alt="" />
 <div style={{marginLeft:'1150px',marginTop:'-300px'}}>
   <p style={{fontSize:'3ch'}}> Powerful Health and Fitness <br /> Features on Your Wrist</p>
   <Button variant="dark">View All Wearables</Button>
 </div>
 <br /><br />
 <br />
 <div style={{marginTop:'200px',marginLeft:'230px'}}>
   <p style={{fontSize:'4ch',fontWeight:'500px'}} >HUAWEI Watch gt 2 pro</p>
   <p>2-week Battery Life <br />
  Sapphire Glass, Titanium Body
  <br />
  Golf & Skiing & Swimming (5 ATM), 100+ Workout Modes</p>
  <br />
  <Button variant="dark">LEARN MORE</Button>
 </div>

 <img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/other/in/mkt/homepage/homepage-update/shelf-banner/wearables/gt2-pro-pc.png" alt="" />
 <img style={{marginTop:'-780px'}} src="https://consumer.huawei.com/content/dam/huawei-cbg-site/other/in/mkt/homepage/homepage-update/shelf-banner/wearables/watch-gt2.png" alt="" />
  
 <div style={{marginLeft:'1130px',marginTop:'-850px'}}>
   <p style={{fontSize:'4ch',fontWeight:'500px'}} >HUAWEI Watch gt 2 </p>
   <p>Kirin A1 <br />
  Long Battery Life <br />
  Smart Sports Modes</p>
  <Button variant="dark">LEARN MORE</Button>
 </div>
 <img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/other/in/mkt/homepage/homepage-update/shelf-banner/wearables/gt2-pro-pc.png" alt="" />
 <img style={{marginTop:'220px'}} src="https://consumer.huawei.com/content/dam/huawei-cbg-site/other/in/mkt/homepage/homepage-update/shelf-banner/wearables/watch-gt.png" alt="" />
  
 <div style={{marginLeft:'1130px',marginTop:'-350px'}}>
   <p style={{fontSize:'4ch',fontWeight:'500px'}} >HUAWEI Watch gt</p>
   <p>3.53 cm (1.39") AMOLED touchscreen <br />
2-week battery life <br />
TruSeen™ 3.0 AI heartrate monitoring</p>
  <Button onClick={handleClick} variant="dark">LEARN MORE</Button>
 </div>
 
 <p style={{fontSize:'4ch',fontWeight:'500px',marginLeft:'30px',marginTop:'250px'}}><b>Service beyond your project</b></p>
 <div style={{marginLeft:'90px',marginTop:'50px'}}>
   <p style={{fontSize:'3ch',fontWeight:'400',marginLeft:'5px'}}><i style={{marginRight:'9px'}} class="fa-solid fa-map-location-dot"></i>Service center location</p>
   <p>Get contact number,address and <br /> direction of the nearest authorized <br /> service centre near you</p>
   
 </div>
 <div style={{marginLeft:'600px',marginTop:'-140px'}}>
   <p style={{fontSize:'3ch',fontWeight:'400',marginLeft:'5px'}}><i  style={{marginRight:'9px'}} class="fa-regular fa-map"></i>Select your products</p>
   <p>find manuals FAQs and updates</p>
   
 </div>
 <div style={{marginLeft:'1100px',marginTop:'-100px'}}>
   <p style={{fontSize:'3ch',fontWeight:'400',marginLeft:'5px'}}><i style={{marginRight:'9px'}} class="fa-solid fa-phone-volume"></i>Contact us</p>
   <p>Email feedback</p>
   
 </div>
 <div style={{backgroundColor:'#f5f5f5'}}>
  <div style={{marginLeft:'50px',marginTop:'150px',padding:'100px'}}>
    <h4>PRODUCT</h4>
    <ul>
      <li>tablet</li>
      <li>Wearable</li>
      <li>Audio</li>
      <li>router</li>
      <li>EMUI</li>
    </ul>
  </div>

  
<div style={{marginLeft:'400px',marginTop:'-380px',padding:'100px'}} >
    <h4>SUPPORT</h4>
    <ul>
      <li>Find Service Centre</li>
      <li>Warranty Policy</li>
      <li>Warranty Period Query</li>
      <li>Manuals & Downloads</li>
      <li>E-waste Process Policy</li>
      <li>EMUI</li>
      <li>HiSuite</li>
      <li>Beta</li>
      <li>Support App</li>
      <li>MobileDoctor</li>
      <li>Privacy Statement</li>
    </ul>
  
</div>  
 
 <div style={{marginLeft:'800px',marginTop:'-515px',padding:'100px'}}>
    <h4>ABOUT HUWAEI</h4>
      <ul>
        <li>About Us</li>
        <li>News & Events</li>
        <li>Sustainability</li>
        <li>HUAWEI Group</li>
        <li>HUAWEI Enterprise</li>
        <li>HUAWEI Carrier</li>
        <li>Join Us</li>
        <li>Contact Us</li>
      </ul>

 </div>
 
 

<hr />
<p>follow Us</p>
{/* <div style={{justifyContent:'space-evenly'}}>
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-facebook"></i>
  <i class="fa-brands fa-twitter"></i>
  <i class="fa-brands fa-youtube"></i>
</div> */}
<div className='icon d-flex me-3'>
<i class="fa-brands fa-instagram ms-5 me-3"></i>
<i class="fa-brands fa-x-twitter me-3"></i>


<i class="fa-brands fa-youtube me-3"></i> 
<i class="fa-brands fa-twitter me-3"></i> 

</div>

</div>  

</div> 

  




 
 
             


    
  )
}

export default Body