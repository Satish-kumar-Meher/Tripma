import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen px-4 py-12 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 text-center">About Tripma</h1>
        <p className="text-lg md:text-xl mb-6 text-center">
          Making global travel smarter, easier, and more affordable.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Tripma is your modern travel companion, built to simplify the way you book and experience air travel.
            With cutting-edge technology and a customer-first mindset, we aim to deliver a seamless booking experience
            for flights around the world.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Real-time flight search and booking</li>
            <li>Affordable fares with instant price comparison</li>
            <li>Smart filters for faster planning</li>
            <li>Secure payments and instant confirmations</li>
            <li>24/7 live support from travel experts</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Tripma?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>User-friendly design for quick bookings</li>
            <li>Personalized travel recommendations</li>
            <li>No hidden fees or last-minute surprises</li>
            <li>Trusted by travelers worldwide</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At Tripma, our mission is to empower travelers with tools and confidence to explore the world on their terms.
            Whether it's a quick business trip or a dream vacation, we're here to make every journey easier.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-2">
            📧 Email: <a href="mailto:support@tripma.com" className="text-blue-600 hover:underline">support@tripma.com</a>
          </p>
          <p className="text-gray-700 mb-2">
            ☎️ Helpline: +1-800-TRIPMA
          </p>
          <p className="text-gray-700">
            Follow us: <span className="text-blue-600">Instagram</span> | <span className="text-blue-600">Twitter</span> | <span className="text-blue-600">Facebook</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
