import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const footerLinks = {
        company: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Press", href: "/press" },
            { name: "Blog", href: "/blog" }
        ],
        support: [
            { name: "Help Center", href: "/help" },
            { name: "Safety", href: "/safety" },
            { name: "Contact Us", href: "/contact" },
            { name: "FAQs", href: "/faq" }
        ],
        organizers: [
            { name: "Create Event", href: "/create-event" },
            { name: "Pricing", href: "/pricing" },
            { name: "Resources", href: "/resources" },
            { name: "Best Practices", href: "/best-practices" }
        ],
        legal: [
            { name: "Terms of Service", href: "/terms" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Cookie Policy", href: "/cookies" },
            { name: "Refund Policy", href: "/refund" }
        ]
    };

    const socialLinks = [
        { icon: <Facebook className="size-5" />, href: "https://facebook.com", label: "Facebook" },
        { icon: <Twitter className="size-5" />, href: "https://twitter.com", label: "Twitter" },
        { icon: <Instagram className="size-5" />, href: "https://instagram.com", label: "Instagram" },
        { icon: <Linkedin className="size-5" />, href: "https://linkedin.com", label: "LinkedIn" }
    ];

    return (
        <footer className="bg-gray-900 text-gray-300 mt-20">
            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <h2 className="text-3xl font-bold text-white">
                                Event<span className="text-purple-500">ra</span>
                            </h2>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Discover and create amazing events. Connect with people who share your interests 
                            and make unforgettable memories.
                        </p>
                        
                        {/* Newsletter */}
                        <div className="mb-6">
                            <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
                            <div className="flex gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="flex-1 px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none text-white placeholder-gray-500 text-sm"
                                />
                                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-lg transition-colors duration-300">
                                    <ArrowRight className="size-5" />
                                </button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="bg-gray-800 hover:bg-purple-600 p-2.5 rounded-lg transition-colors duration-300"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Organizers Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">For Organizers</h3>
                        <ul className="space-y-3">
                            {footerLinks.organizers.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-800">
                    <div className="flex items-start gap-3">
                        <Mail className="size-5 text-purple-500 mt-0.5" />
                        <div>
                            <p className="text-white font-medium text-sm mb-1">Email Us</p>
                            <a href="mailto:support@eventra.com" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                support@eventra.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Phone className="size-5 text-purple-500 mt-0.5" />
                        <div>
                            <p className="text-white font-medium text-sm mb-1">Call Us</p>
                            <a href="tel:+1234567890" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                +1 (234) 567-890
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <MapPin className="size-5 text-purple-500 mt-0.5" />
                        <div>
                            <p className="text-white font-medium text-sm mb-1">Visit Us</p>
                            <p className="text-gray-400 text-sm">
                                123 Event Street, NY 10001
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="mx-auto max-w-7xl px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Eventra. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                Terms
                            </Link>
                            <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                Privacy
                            </Link>
                            <Link href="/cookies" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
