import { useState } from "react";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setShowNotification(true);
      setEmail("");
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  const socialLinks = [
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: "https://www.instagram.com/ecell.smec/", 
      label: "Instagram" 
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://www.linkedin.com/in/e-cell-smec-336443378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
      label: "LinkedIn" 
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Upcoming Events", href: "#upcoming-events" },
    { name: "Contact", href: "#contact" },
  ];

  const programs = [
    { name: "E-Summit", href: "#" },
    { name: "TEDx SMEC", href: "#" },
    { name: "UpStart", href: "#" },
    { name: "Startup Masterclass", href: "#" },
    { name: "Campus Hangouts", href: "#" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/2f898383-b678-4275-926f-9526b95712fd.png" 
                  alt="E-Cell SMEC Logo" 
                  className="w-8 h-8"
                />
                <h3 className="text-2xl font-bold text-primary">E-Cell SMEC</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Entrepreneurship Cell, St. Martin's Engineering College - Fostering innovation and nurturing 
                the next generation of entrepreneurs through cutting-edge resources, 
                mentorship, and community building.
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <a
                href="https://www.google.com/maps/place/St.Martin's+Engineering+College/@17.541465,78.4719201,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb8ff57a807d8d:0x9922a435110db323!8m2!3d17.541465!4d78.474495!16s%2Fm%2F07k5bnh?authuser=0&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    St. Martin's Engineering College<br />
                    Sy. No.98 & 100, Dhulapally Road,<br />
                    Dhulapally, Near Kompally,<br />
                    Medchal–Malkajgiri district<br />
                    Secunderabad-500 100.<br />
                    Telangana, India
                  </p>
                </div>
              </a>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+916304052967"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91 6304052967
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:ecell.smec@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  ecell.smec@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-foreground font-semibold mb-2">Stay Updated</h4>
              <p className="text-muted-foreground text-sm">
                Get the latest updates on events, opportunities, and startup news.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 rounded-lg border border-primary/20 bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm min-w-[200px]"
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-lg border border-primary/20 bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm min-w-[200px]"
                required
              />
              <button 
                onClick={handleSubscribe}
                disabled={isSubscribed}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium disabled:opacity-50"
              >
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <div className="mb-2 md:mb-0">
              <p>
                © {new Date().getFullYear()} Entrepreneurship Cell, St. Martin's Engineering College. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-primary transition-colors">
                    Privacy Policy
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Privacy Policy</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-sm">
                    <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
                    
                    <section>
                      <h3 className="font-semibold mb-2">1. Information We Collect</h3>
                      <p>We collect information you provide directly, such as when you register for events, subscribe to newsletters, or contact us. This may include your name, email address, phone number, and roll number.</p>
                    </section>
                    
                    <section>
                      <h3 className="font-semibold mb-2">2. How We Use Your Information</h3>
                      <p>We use collected information to provide services, send event updates, respond to inquiries, and improve our offerings. We may also use your information for legitimate business purposes.</p>
                    </section>
                    
                    <section>
                      <h3 className="font-semibold mb-2">3. Information Sharing</h3>
                      <p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in our operations, subject to confidentiality agreements.</p>
                    </section>
                    
                    <section>
                      <h3 className="font-semibold mb-2">4. Data Security</h3>
                      <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                    </section>
                    
                    <section>
                      <h3 className="font-semibold mb-2">5. Contact Us</h3>
                      <p>If you have questions about this Privacy Policy, please contact us at ecell.smec@gmail.com</p>
                    </section>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-primary transition-colors">
                    Terms of Service
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Terms of Service</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-sm">
                    <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
                    
                    <section>
                      <h3 className="font-semibold mb-2">1. Acceptance of Terms</h3>
                      <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                    </section>
                    
                    <section>
                      <h3 className="font-semibold mb-2">2. Use License</h3>
                      <p>Permission is granted to temporarily access the materials on our website for personal, non-commercial transitory viewing only.</p>
                    </section>
                    
                    <section>
                      <h3 className="font-semibold mb-2">3. Event Registration</h3>
                      <p>Event registrations are subject to availability. We reserve the right to cancel or modify events with appropriate notice.</p>
                    </section>
                    
                    <section>
                      <h3 className="font-semibold mb-2">4. User Responsibilities</h3>
                      <p>Users are responsible for providing accurate information and maintaining the confidentiality of their account details.</p>
                    </section>
                    
                    <section>
                      <h3 className="font-semibold mb-2">5. Limitation of Liability</h3>
                      <p>E-Cell SMEC shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services.</p>
                    </section>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-primary transition-colors">
                    Cookie Policy
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Cookie Policy</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-sm">
                    <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
                    
                    <section>
                      <h3 className="font-semibold mb-2">1. What Are Cookies</h3>
                      <p>Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and analyze site usage.</p>
                    </section>
                    
                    <section>
                      <h3 className="font-semibold mb-2">2. Types of Cookies We Use</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                        <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                      </ul>
                    </section>
                    
                    <section>
                      <h3 className="font-semibold mb-2">3. Managing Cookies</h3>
                      <p>You can control and delete cookies through your browser settings. Note that disabling cookies may affect website functionality.</p>
                    </section>
                    
                    <section>
                      <h3 className="font-semibold mb-2">4. Third-Party Cookies</h3>
                      <p>We may use third-party services that place cookies on your device. These are governed by the respective third-party privacy policies.</p>
                    </section>
                    
                    <section>
                      <h3 className="font-semibold mb-2">5. Updates</h3>
                      <p>This Cookie Policy may be updated periodically. We encourage you to review it regularly.</p>
                    </section>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-24 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in-right">
          Subscribed Successfully
        </div>
      )}
    </footer>
  );
};

export default Footer;