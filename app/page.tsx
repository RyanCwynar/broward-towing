import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24hr Broward Towing | Free Mockup by Ryan Cwynar",
  description: "A free website redesign mockup for 24hr Broward Towing. Fast towing service in Fort Lauderdale, Hollywood, and all of Broward County.",
  robots: "noindex, nofollow",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 bg-amber-500 text-white text-center py-2 px-4 text-sm font-medium z-50">
        ✨ This is a free redesign mockup created by Byldr — <a href="https://ryancwynar.github.io" className="underline">Learn More</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-9 left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🚛</span>
              </div>
              <span className="text-lg font-bold text-white hidden sm:block">Broward Towing</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-300 hover:text-orange-400 transition">Services</a>
              <a href="#coverage" className="text-gray-300 hover:text-orange-400 transition">Coverage</a>
              <a href="#about" className="text-gray-300 hover:text-orange-400 transition">About</a>
              <a href="#contact" className="text-gray-300 hover:text-orange-400 transition">Contact</a>
            </div>
            <a href="tel:954-347-3155" className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition text-sm whitespace-nowrap">
              📞 954-347-3155
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-orange-400 text-lg mb-4 font-semibold">24 Hour Emergency Towing Service</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stranded?<br />
              <span className="text-orange-400">We&apos;ll Be Right There.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Fast, affordable towing service throughout Fort Lauderdale, Hollywood, and all of Broward County. Day or night, we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:954-347-3155" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-lg">
                Call Now: 954-347-3155
              </a>
              <a href="#services" className="bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition border border-white/30">
                View Services
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-orange-400 text-2xl">✓</span>
                <span>24/7 Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400 text-2xl">✓</span>
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400 text-2xl">✓</span>
                <span>All Vehicle Types</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-1">24/7</div>
              <div className="text-orange-100">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">30</div>
              <div className="text-orange-100">Min Avg Response</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-orange-100">Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">All</div>
              <div className="text-orange-100">Makes & Models</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Towing Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert towing and roadside assistance for all situations. We handle everything from lockouts to heavy-duty recovery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🚗", title: "Local Towing", desc: "Fast, safe towing throughout the greater Fort Lauderdale area and Broward County." },
              { icon: "🛣️", title: "Interstate Towing", desc: "Immediate response on I-75, I-95, I-595, and Florida Turnpike." },
              { icon: "🏍️", title: "Motorcycle Towing", desc: "Specialized motorcycle dollies for safe and secure transport of your bike." },
              { icon: "🔑", title: "Lockout Service", desc: "Locked your keys in the car? We&apos;ll get you back in quickly and safely." },
              { icon: "🔋", title: "Jump Starts", desc: "Dead battery? We&apos;ll get you started and back on the road." },
              { icon: "🛞", title: "Flat Tire Changes", desc: "Quick tire changes to get you moving again safely." },
              { icon: "⛽", title: "Fuel Delivery", desc: "Ran out of gas? We&apos;ll bring fuel directly to your location." },
              { icon: "🚛", title: "Heavy Duty Towing", desc: "Equipment for larger vehicles including trucks and commercial vehicles." },
              { icon: "🐊", title: "Alligator Alley & Everglades", desc: "Towing service to Big Cypress Reservation and Everglades attractions." },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section id="coverage" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Coverage Area</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Immediate dispatch from multiple points throughout Broward County
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-6">Cities We Serve</h3>
              <div className="grid grid-cols-2 gap-3 text-gray-300">
                {[
                  "Fort Lauderdale",
                  "Hollywood",
                  "Pompano Beach",
                  "Deerfield Beach",
                  "Hallandale",
                  "Dania",
                  "Lauderhill",
                  "Pembroke Pines",
                  "Davie",
                  "Sunrise",
                  "Plantation",
                  "Coral Springs"
                ].map((city, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-6">Interstate & Highway Coverage</h3>
              <div className="space-y-4">
                {[
                  { road: "Interstate 95 (I-95)", desc: "Full coverage north and south" },
                  { road: "Interstate 75 (I-75)", desc: "Including Alligator Alley" },
                  { road: "Interstate 595 (I-595)", desc: "East-west corridor" },
                  { road: "Florida Turnpike", desc: "Broward section" },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        🛣️
                      </div>
                      <div>
                        <div className="font-bold">{item.road}</div>
                        <div className="text-sm text-gray-400">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Local Towing Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                24hr Broward Towing has been serving the greater Fort Lauderdale area with reliable, fast, and affordable towing services. Our certified operators are trained to handle all vehicle types with care and professionalism.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                When you&apos;re stranded on the side of the road, you need help fast. That&apos;s why we maintain multiple dispatch points throughout Broward County, ensuring our trucks can reach you quickly no matter where you are.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                  <div className="text-gray-600">Always Available</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
                  <div className="text-gray-600">Fully Insured</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 text-xl">✓</span>
                  <span>24/7 emergency dispatch center</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 text-xl">✓</span>
                  <span>Fast response times - often under 30 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 text-xl">✓</span>
                  <span>Certified and experienced operators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 text-xl">✓</span>
                  <span>Modern, well-maintained fleet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 text-xl">✓</span>
                  <span>Competitive and transparent pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 text-xl">✓</span>
                  <span>All makes and models - cars to trucks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-3xl">★</span>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Got a flat on I-95 at midnight. They were there in 25 minutes and had me back on the road quickly. Professional and friendly!", author: "Carlos M., Hollywood" },
              { text: "Best towing company in Broward! Used them twice now and both times they were fast, affordable, and treated my car with care.", author: "Sarah T., Fort Lauderdale" },
              { text: "Locked my keys in my car at the airport. They came out within 30 minutes and got me in without any damage. Highly recommend!", author: "Mike R., Dania Beach" },
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{review.text}&rdquo;</p>
                <p className="font-bold text-gray-900">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Tow? Call Now!
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Our dispatch center is standing by 24/7. Don&apos;t wait on the side of the road - get help now!
          </p>
          <a href="tel:954-347-3155" className="inline-block bg-white text-orange-600 px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition shadow-lg">
            📞 954-347-3155
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-lg text-gray-600 mb-8">
                Stranded? Have questions about our services? Our dispatch team is ready to help you 24 hours a day, 7 days a week.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">📞</div>
                  <div>
                    <div className="font-bold text-gray-900">24hr Dispatch Line</div>
                    <a href="tel:954-347-3155" className="text-orange-500 text-lg font-semibold">954-347-3155</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">📍</div>
                  <div>
                    <div className="font-bold text-gray-900">Service Area</div>
                    <div className="text-gray-600">Fort Lauderdale, Hollywood & all of Broward County</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">🕐</div>
                  <div>
                    <div className="font-bold text-gray-900">Hours</div>
                    <div className="text-gray-600">24 Hours / 7 Days a Week</div>
                    <div className="text-gray-600">Including Holidays</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Request a Tow</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                <input type="text" placeholder="Your Location / Address" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                <select className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>Select Service Type</option>
                  <option>Towing</option>
                  <option>Jump Start</option>
                  <option>Flat Tire</option>
                  <option>Lockout</option>
                  <option>Fuel Delivery</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Additional details..." rows={3} className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
                <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition">
                  Request Service
                </button>
              </form>
              <p className="text-sm text-gray-400 mt-4 text-center">
                For fastest service, please call our dispatch line directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🚛</span>
                </div>
                <span className="text-xl font-bold">Broward Towing</span>
              </div>
              <p className="text-gray-400">
                24 hour towing and roadside assistance throughout Broward County. Fast, reliable, affordable.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#coverage" className="hover:text-white transition">Coverage Area</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="text-lg font-semibold text-orange-400">954-347-3155</li>
                <li>Available 24/7</li>
                <li>Broward County, FL</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 24hr Broward Towing. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Tracking Pixel */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const params = new URLSearchParams(window.location.search);
            const ref = params.get('ref');
            if (ref) {
              const img = new Image();
              img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
            }
          })();
        `
      }} />
    </div>
  );
}
