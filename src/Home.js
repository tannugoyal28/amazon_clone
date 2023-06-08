import React from 'react'
import './Home.css'
import Products from './Products'
import ImageSlider , {Slide} from 'react-auto-image-slider';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <ImageSlider effectDelay={300} autoPlayDelay={3000}>
          <Slide>
            <img className='home_image' src='https://images-na.ssl-images-amazon.com/images/G/33/digital/video/merch/2019/Magellan/PVD-3726/BRND_MTH19_00000_SADLPDesktop_1440x675_Final_es_MX_PVD3726_MXRetailRenew_44790.jpg'/>
          </Slide>
          <Slide>
            <img className='home_image' src='https://wallpaperaccess.com/full/6385958.jpg'/>
          </Slide>
          <Slide>
            <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'/>
          </Slide>
        </ImageSlider>
        <div className='home_row'>
            <Products title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011' price={29.99} image='https://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
            rating={4} />
            <Products title='boAt Wave Call Smart Watch, Smart Talk With Advanced Dedicated Bluetooth Calling Chip, 20 Built-in Watch Faces, 100+ Sports Modes,Menu Personalization, in-Built Games(Black)' price={35.32} image='https://m.media-amazon.com/images/I/614AipEWSIL._SL1500_.jpg' rating={4}/>
            <Products title='Infinity (JBL Fuze Pint, Wireless Ultra Portable Mini Speaker with Mic, Deep Bass, Dual Equalizer, Bluetooth 5.0 with Voice Assistant Support for Mobiles (Black)' price={30.32} image='https://m.media-amazon.com/images/I/71K6mroOBJL._SY355_.jpg' rating={4}/>
        </div>
        <div className='home_row'>
            <Products title='Roldo Square Folding Table, Lightweight Fold Tables for Adults Indoor Outdoor Use for Living Room,and Easy to Assemble-Brown' price={25.17} image='https://m.media-amazon.com/images/I/61Z-VhbiolL._SX679_.jpg' rating={4}/>
            <Products title='Zouk Womens Handcrafted Indian Peacock Motif Shoulder Tote Bag and Handbag for Office and College' price={20.62} image='https://m.media-amazon.com/images/I/71qb+q1lWXL._UX679_.jpg' rating={4}/>
        </div>
        <div className='home_row'>
            <Products title='iFFALCON 126 cm (50 inches) 4K Ultra HD Smart LED Google TV iFF50U62 (Black)' price={60.99} image='https://m.media-amazon.com/images/S/aplus-media-library-service-media/8517730b-c099-40a8-9a9c-3c143c06b8b8.__CR0,0,1464,600_PT0_SX1464_V1___.jpg' rating={4}/>
        </div>
        <div className='home_row'>
            <Products title='Tukzer Case Cover for Samsung Galaxy Tab A7 Lite 8.7" (2021) - Ultra Slim Lightweight Hard Back Trifold Smart Stand Flip Folio (Black) (TZ-C7)' price={43.99} image='https://m.media-amazon.com/images/I/51WF8A03P1S.jpg' rating={4}/>
            <Products title='Dell Premier Wireless Keyboard and Mouse Set KM7321W, Connect 3 Devices 2xBluetooth, 1xWireless, Quiet Full-Sized Keyboard, Adjustable dpi Mouse, Programmable Shortcut Keys, Grey' price={25.40} image='https://m.media-amazon.com/images/I/714P1XbGl4S._SX679_.jpg' rating={4}/>
        </div>
      </div>
    </div>
  )
}

export default Home
