// pages/about.js
import React from "react";
const About = () => {
    return (
      <div>
        <section className="about h-screen  p-80 flex items-center justify-start bg-cover bg-center text-white px-10  "  style={{backgroundImage: "url(/about.jpg)"}}>
          <div className="bg-black bg-opacity-60  px-4 rounded-md max-w-lg">
            <h2 className="text-4xl font-bold text-center ">About Us</h2>
            <p className="pt-4 ">
              Welcome to SellMyRide, your trusted partner in buying and selling
              quality cars with ease and transparency. At SellMyRide, we are
              passionate about connecting car enthusiasts, sellers, and buyers
              through a seamless and user-friendly platform. Our goal is to make
              the process of finding your dream car or selling your current
              vehicle as simple and stress-free as possible. We pride ourselves on
              providing a curated selection of vehicles that meet the highest
              standards of quality and reliability. Whether you’re searching for a
              sleek sedan, a rugged SUV, or a reliable family car, our diverse
              inventory offers something for everyone. Our team of experts is
              dedicated to helping you make informed decisions, ensuring that
              every transaction is smooth, secure, and meets your expectations. At
              SellMyRide, customer satisfaction is our top priority. We are
              committed to delivering exceptional service, from detailed car
              listings to personalized assistance, making sure you drive away with
              a smile. Join our community of satisfied buyers and sellers today,
              and experience a hassle-free way to trade your vehicle with
              confidence. Explore our platform to discover how we’re transforming
              the car marketplace and making car buying and selling an enjoyable
              experience.
            </p>
          </div>
        </section>
      </div>
    );
  };
  
  export default About;
  