import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  ShoppingCart, 
  Store, 
  Shield, 
  Lock, 
  QrCode, 
  Truck, 
  UserCheck, 
  Clock, 
  MapPin, 
  Wifi, 
  Brain, 
  Heart, 
  Star, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Headphones,
  Check,
  ArrowRight,
  Users,
  TrendingUp,
  Package,
  Award
} from 'lucide-react';

// Translation data
const translations = {
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      trustcode: 'TrustCode',
      howItWorks: 'How It Works',
      marketplace: 'Marketplace',
      testimonials: 'Testimonials'
    },
    hero: {
      title: "Bangladesh's Most Trusted Digital Marketplace",
      subtitle: "Secure transactions, verified identities, and guaranteed delivery with TrustA's innovative TrustCode system",
      shopNow: 'Start Shopping',
      sellNow: 'Start Selling'
    },
    stats: {
      users: 'Verified Users',
      sellers: 'Verified Sellers',
      products: 'Products Listed',
      success: 'Successful Transactions'
    },
    features: {
      title: 'Core Trust-Building Features',
      subtitle: 'TrustA is built on a foundation of security, transparency, and user protection',
      registration: {
        title: 'Registration & Verification',
        desc: 'Multi-layer identity verification to prevent fraud',
        points: ['National ID verification', 'Mobile OTP authentication', 'Facial recognition', 'Secure login PIN']
      },
      escrow: {
        title: 'Escrow Payment Protection',
        desc: 'Funds held securely until delivery confirmation',
        points: ['Secure escrow account', 'Payment after verification', 'GPS location tracking', 'Zero hidden charges']
      },
      trustcode: {
        title: 'TrustCode Verification',
        desc: 'Dual-layer offline payment verification system',
        points: ['QR + Numeric code', 'AES-256 encryption', 'Geolocation fencing', '30-minute limitation']
      },
      delivery: {
        title: 'Secure Delivery Process',
        desc: 'End-to-end package security with tracking',
        points: ['Real-time GPS tracking', 'Tamper-proof packaging', 'In-app communication', 'Two-step verification']
      }
    },
    trustcodeSection: {
      title: 'TrustCode Security System',
      desc: 'Revolutionary two-tier offline payment verification using numeric and QR codes',
      verify: 'Verify Now',
      scanText: 'Scan to verify product delivery',
      security: {
        login: 'Login-bound',
        encryption: 'AES-256 Encryption',
        time: '30-min Limit',
        location: 'Geolocation',
        ai: 'AI Fraud Detection',
        offline: 'Offline Verification'
      }
    },
    process: {
      title: 'Secure Delivery Process',
      subtitle: 'Step-by-step process ensuring secure and reliable transactions',
      steps: [
        { title: 'Order Confirmation', desc: 'Payment to escrow with unique TrustCode generation' },
        { title: 'Professional Packaging', desc: 'Product packaged with dual TrustCode labels' },
        { title: 'Real-time Tracking', desc: 'Track delivery through TrustA app' },
        { title: 'Product Verification', desc: 'Inspect product and internal TrustCode' },
        { title: 'TrustCode Verification', desc: 'Scan QR code to complete transaction' }
      ]
    },
    marketplace: {
      title: 'TrustA Feed',
      filters: ['All', 'B2B', 'B2C', 'Trending', 'Local']
    },
    cta: {
      title: 'Ready to Experience Secure E-commerce?',
      subtitle: 'Join thousands of satisfied users in Bangladesh\'s most trusted marketplace'
    },
    footer: {
      description: 'Bangladesh\'s most trusted digital marketplace with secure escrow payments',
      buyers: 'For Buyers',
      sellers: 'For Sellers',
      contact: 'Contact Us',
      address: 'Gulshan-1, Dhaka, Bangladesh',
      support: '24/7 Customer Support',
      security: 'Security Center',
      copyright: '2025 TrustA Ltd. All rights reserved'
    },
    buttons: {
      login: 'Log In',
      register: 'Register'
    }
  },
  bn: {
    nav: {
      home: 'হোম',
      features: 'বৈশিষ্ট্য',
      trustcode: 'ট্রাস্টকোড',
      howItWorks: 'কিভাবে কাজ করে',
      marketplace: 'মার্কেটপ্লেস',
      testimonials: 'প্রশংসাপত্র'
    },
    hero: {
      title: 'বাংলাদেশের সবচেয়ে বিশ্বস্ত ডিজিটাল মার্কেটপ্লেস',
      subtitle: 'নিরাপদ লেনদেন, যাচাইকৃত পরিচয়, এবং ট্রাস্টএ এর উদ্ভাবনী ট্রাস্টকোড সিস্টেমের মাধ্যমে নিশ্চিত ডেলিভারি',
      shopNow: 'কেনাকাটা শুরু করুন',
      sellNow: 'বিক্রয় শুরু করুন'
    },
    stats: {
      users: 'যাচাইকৃত ব্যবহারকারী',
      sellers: 'যাচাইকৃত বিক্রেতা',
      products: 'তালিকাভুক্ত পণ্য',
      success: 'সফল লেনদেন'
    },
    features: {
      title: 'মূল বিশ্বাস-নির্মাণ বৈশিষ্ট্য',
      subtitle: 'ট্রাস্টএ নিরাপত্তা, স্বচ্ছতা এবং ব্যবহারকারী সুরক্ষার ভিত্তিতে নির্মিত',
      registration: {
        title: 'নিবন্ধন এবং যাচাইকরণ',
        desc: 'প্রতারণা প্রতিরোধে বহু-স্তরের পরিচয় যাচাইকরণ',
        points: ['জাতীয় পরিচয়পত্র যাচাই', 'মোবাইল ওটিপি প্রমাণীকরণ', 'মুখ শনাক্তকরণ', 'সুরক্ষিত লগইন পিন']
      },
      escrow: {
        title: 'এসক্রো পেমেন্ট সুরক্ষা',
        desc: 'ডেলিভারি নিশ্চিতকরণ পর্যন্ত তহবিল নিরাপদে রাখা হয়',
        points: ['সুরক্ষিত এসক্রো অ্যাকাউন্ট', 'যাচাইয়ের পর পেমেন্ট', 'জিপিএস অবস্থান ট্র্যাকিং', 'কোন লুকানো চার্জ নেই']
      },
      trustcode: {
        title: 'ট্রাস্টকোড যাচাইকরণ',
        desc: 'দ্বৈত-স্তরের অফলাইন পেমেন্ট যাচাইকরণ সিস্টেম',
        points: ['কিউআর + সংখ্যা কোড', 'এইএস-২৫৬ এনক্রিপশন', 'জিওলোকেশন ফেন্সিং', '৩০-মিনিট সীমা']
      },
      delivery: {
        title: 'সুরক্ষিত ডেলিভারি প্রক্রিয়া',
        desc: 'ট্র্যাকিং সহ এন্ড-টু-এন্ড প্যাকেজ নিরাপত্তা',
        points: ['রিয়েল-টাইম জিপিএস ট্র্যাকিং', 'টেম্পার-প্রুফ প্যাকেজিং', 'ইন-অ্যাপ যোগাযোগ', 'দুই-ধাপ যাচাইকরণ']
      }
    },
    trustcodeSection: {
      title: 'ট্রাস্টকোড সিকিউরিটি সিস্টেম',
      desc: 'সংখ্যা এবং কিউআর কোড ব্যবহার করে বিপ্লবী দ্বৈত-স্তরের অফলাইন পেমেন্ট যাচাইকরণ',
      verify: 'এখনই যাচাই করুন',
      scanText: 'পণ্য ডেলিভারি যাচাই করতে স্ক্যান করুন',
      security: {
        login: 'লগইন-বাউন্ড',
        encryption: 'এইএস-২৫৬ এনক্রিপশন',
        time: '৩০-মিনিট সীমা',
        location: 'জিওলোকেশন',
        ai: 'এআই জালিয়াতি সনাক্তকরণ',
        offline: 'অফলাইন যাচাইকরণ'
      }
    },
    process: {
      title: 'সুরক্ষিত ডেলিভারি প্রক্রিয়া',
      subtitle: 'নিরাপদ এবং নির্ভরযোগ্য লেনদেন নিশ্চিত করার ধাপে ধাপে প্রক্রিয়া',
      steps: [
        { title: 'অর্ডার নিশ্চিতকরণ', desc: 'অনন্য ট্রাস্টকোড তৈরির সাথে এসক্রোতে পেমেন্ট' },
        { title: 'পেশাদার প্যাকেজিং', desc: 'দ্বৈত ট্রাস্টকোড লেবেল সহ পণ্য প্যাকেজ করা' },
        { title: 'রিয়েল-টাইম ট্র্যাকিং', desc: 'ট্রাস্টএ অ্যাপের মাধ্যমে ডেলিভারি ট্র্যাক করুন' },
        { title: 'পণ্য যাচাইকরণ', desc: 'পণ্য এবং অভ্যন্তরীণ ট্রাস্টকোড পরিদর্শন করুন' },
        { title: 'ট্রাস্টকোড যাচাইকরণ', desc: 'লেনদেন সম্পূর্ণ করতে কিউআর কোড স্ক্যান করুন' }
      ]
    },
    marketplace: {
      title: 'ট্রাস্টএ ফিড',
      filters: ['সব', 'বি২বি', 'বি২সি', 'ট্রেন্ডিং', 'স্থানীয়']
    },
    cta: {
      title: 'নিরাপদ ই-কমার্স অনুভব করতে প্রস্তুত?',
      subtitle: 'বাংলাদেশের সবচেয়ে বিশ্বস্ত মার্কেটপ্লেসে হাজার হাজার সন্তুষ্ট ব্যবহারকারীদের সাথে যোগ দিন'
    },
    footer: {
      description: 'সুরক্ষিত এসক্রো পেমেন্ট সহ বাংলাদেশের সবচেয়ে বিশ্বস্ত ডিজিটাল মার্কেটপ্লেস',
      buyers: 'ক্রেতাদের জন্য',
      sellers: 'বিক্রেতাদের জন্য',
      contact: 'যোগাযোগ করুন',
      address: 'গুলশান-১, ঢাকা, বাংলাদেশ',
      support: '২৪/৭ গ্রাহক সহায়তা',
      security: 'সিকিউরিটি সেন্টার',
      copyright: '২০২৫ ট্রাস্টএ লিমিটেড। সর্বস্বত্ব সংরক্ষিত'
    },
    buttons: {
      login: 'লগ ইন',
      register: 'নিবন্ধন করুন'
    }
  }
};

const TrustAWebsite = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('en');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [trustCode, setTrustCode] = useState('7A9B4C2D');

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      let newCode = '';
      for (let i = 0; i < 8; i++) {
        newCode += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setTrustCode(newCode);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    { 
      icon: '📱', 
      name: 'Smartphone X Pro', 
      price: '৳ 25,999', 
      rating: 4.5, 
      reviews: 42, 
      badge: 'Trusted', 
      color: 'from-blue-50 to-cyan-50',
      bgColor: '#dbeafe'
    },
    { 
      icon: '👔', 
      name: 'Premium Cotton Shirts', 
      price: '৳ 1,299', 
      rating: 4.0, 
      reviews: 28, 
      badge: 'Premium', 
      color: 'from-green-50 to-emerald-50',
      bgColor: '#dcfce7'
    },
    { 
      icon: '📚', 
      name: 'Business Strategy Books', 
      price: '৳ 2,450', 
      rating: 5.0, 
      reviews: 56, 
      badge: 'Bestseller', 
      color: 'from-yellow-50 to-amber-50',
      bgColor: '#fef9c3'
    },
    { 
      icon: '🔌', 
      name: 'Smart Kitchen Blender', 
      price: '৳ 4,799', 
      rating: 3.5, 
      reviews: 19, 
      badge: 'Verified', 
      color: 'from-red-50 to-pink-50',
      bgColor: '#fee2e2'
    }
  ];

  const stats = [
    { number: '150K+', label: t.stats.users, icon: Users, color: 'from-blue-500 to-cyan-500' },
    { number: '12K+', label: t.stats.sellers, icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { number: '25K+', label: t.stats.products, icon: Package, color: 'from-purple-500 to-pink-500' },
    { number: '98.6%', label: t.stats.success, icon: Award, color: 'from-orange-500 to-red-500' }
  ];

  const securityFeatures = [
    { icon: Shield, text: t.trustcodeSection.security.login },
    { icon: Lock, text: t.trustcodeSection.security.encryption },
    { icon: Clock, text: t.trustcodeSection.security.time },
    { icon: MapPin, text: t.trustcodeSection.security.location },
    { icon: Brain, text: t.trustcodeSection.security.ai },
    { icon: Wifi, text: t.trustcodeSection.security.offline }
  ];

  const features = [
    { 
      icon: UserCheck, 
      title: t.features.registration.title, 
      desc: t.features.registration.desc, 
      points: t.features.registration.points,
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Lock, 
      title: t.features.escrow.title, 
      desc: t.features.escrow.desc, 
      points: t.features.escrow.points,
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      icon: QrCode, 
      title: t.features.trustcode.title, 
      desc: t.features.trustcode.desc, 
      points: t.features.trustcode.points,
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      icon: Truck, 
      title: t.features.delivery.title, 
      desc: t.features.delivery.desc, 
      points: t.features.delivery.points,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${
        scrolled 
          ? 'py-3 shadow-2xl bg-white/90 dark:bg-gray-900/90' 
          : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                TrustA
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {Object.entries(t.nav).map(([key, item]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="relative font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <Globe className="w-5 h-5" />
                  <span className="font-semibold">{language === 'en' ? 'EN' : 'বাং'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <button
                      onClick={() => { setLanguage('en'); setLangDropdownOpen(false); }}
                      className={`w-full px-4 py-3 text-left transition-all duration-300 ${
                        language === 'en' 
                          ? 'bg-blue-600 text-white' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => { setLanguage('bn'); setLangDropdownOpen(false); }}
                      className={`w-full px-4 py-3 text-left transition-all duration-300 ${
                        language === 'bn' 
                          ? 'bg-blue-600 text-white' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      বাংলা
                    </button>
                  </div>
                )}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Auth Buttons */}
              <div className="hidden lg:flex items-center gap-3">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  {t.buttons.login}
                </button>
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">{t.buttons.register}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl">
              <nav className="flex flex-col space-y-4 px-4">
                {Object.entries(t.nav).map(([key, item]) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    className="py-3 px-4 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 py-3 px-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                    {t.buttons.login}
                  </button>
                  <button className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-lg transition-all duration-300">
                    {t.buttons.register}
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-blue-600/10 to-blue-900/0"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>
          
          <div className="animate-fade-in-up-delay flex flex-col sm:flex-row justify-center gap-6">
            <button className="group relative px-8 py-4 bg-white text-blue-700 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <span className="relative z-10 flex items-center gap-3">
                <ShoppingCart className="w-6 h-6" />
                {t.hero.shopNow}
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="group relative px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <span className="relative z-10 flex items-center gap-3">
                <Store className="w-6 h-6" />
                {t.hero.sellNow}
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-20 mb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className={`text-lg font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t.features.title}
            </h2>
            <p className={`text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 border border-gray-200 dark:border-gray-700"
              >
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                <div className="relative bg-white dark:bg-gray-800 m-0.5 rounded-3xl overflow-hidden">
                  {/* Feature Icon */}
                  <div className={`bg-gradient-to-br ${feature.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <feature.icon className="w-12 h-12 relative z-10 transform group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Feature Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-black mb-4 text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-500">
                      {feature.title}
                    </h3>
                    <p className={`text-lg mb-6 leading-relaxed ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {feature.desc}
                    </p>
                    <ul className="space-y-3">
                      {feature.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className={`text-base ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TrustCode Section */}
      <section id="trustcode" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* TrustCode Card */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative group">
                {/* Floating Animation Container */}
                <div className="animate-float">
                  <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border-4 border-blue-500 max-w-sm w-full transform group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <h3 className="text-2xl font-black text-center mb-8 text-gray-800 dark:text-white">
                      {t.trustcodeSection.verify}
                    </h3>
                    
                    {/* QR Code Container */}
                    <div className="bg-gray-100 dark:bg-gray-700 w-48 h-48 mx-auto rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden">
                      <QrCode className="w-32 h-32 text-blue-600 dark:text-blue-400" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
                    </div>
                    
                    {/* Numeric Code */}
                    <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4 rounded-2xl text-center font-mono text-2xl font-black tracking-widest text-blue-600 dark:text-blue-400 mb-8 relative overflow-hidden border-2 border-gray-200 dark:border-gray-600">
                      {trustCode}
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                    
                    <p className={`text-center mb-8 text-lg ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {t.trustcodeSection.scanText}
                    </p>
                    
                    <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                      <span className="relative z-10">{t.trustcodeSection.verify}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* TrustCode Info */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {t.trustcodeSection.title}
              </h2>
              <p className={`text-xl lg:text-2xl mb-12 leading-relaxed ${
                darkMode ? 'text-gray-400' : 'text-gray-700'
              }`}>
                {t.trustcodeSection.desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {securityFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-semibold text-gray-800 dark:text-white">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t.process.title}
            </h2>
            <p className={`text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t.process.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {t.process.steps.map((step, index) => (
              <div key={index} className="flex gap-8 items-start group">
                {/* Step Number */}
                <div className="flex-shrink-0 relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex items-center justify-center text-2xl font-black shadow-2xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative z-10">{index + 1}</span>
                  </div>
                  {/* Connector Line */}
                  {index < t.process.steps.length - 1 && (
                    <div className="absolute top-20 left-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 transform -translate-x-1/2"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 group">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl group-hover:shadow-3xl group-hover:-translate-y-2 transition-all duration-500 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <h3 className="text-2xl font-black mb-4 text-gray-800 dark:text-white relative z-10">
                      {step.title}
                    </h3>
                    <p className={`text-lg leading-relaxed relative z-10 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] opacity-5"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t.marketplace.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              {t.marketplace.filters.map((filter, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFilter(index)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-500 ${
                    activeFilter === index
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl scale-105'
                      : darkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      : 'bg-white hover:bg-gray-100 text-gray-700 shadow-lg'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 border border-gray-200 dark:border-gray-700"
              >
                {/* Product Image */}
                <div 
                  className="relative h-48 flex items-center justify-center text-7xl"
                  style={{ backgroundColor: product.bgColor }}
                >
                  <span>{product.icon}</span>
                  <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-black rounded-lg shadow-lg">
                    {product.badge}
                  </span>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-black mb-3 text-gray-800 dark:text-white line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="text-2xl font-black text-blue-600 dark:text-blue-400 mb-4">
                    {product.price}
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`w-5 h-5 ${
                            starIndex < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                      <span className={`text-sm ml-2 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <button className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-all duration-300 hover:scale-110">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/30 via-blue-600/20 to-blue-900/0"></div>
        </div>
        
        {/* Animated Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8">
            {t.cta.title}
          </h2>
          <p className="text-xl sm:text-2xl mb-12 opacity-90 leading-relaxed">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="group relative px-8 py-4 bg-white text-blue-700 rounded-2xl font-black text-lg hover:scale-105 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <span className="relative z-10 flex items-center gap-3">
                <ShoppingCart className="w-6 h-6" />
                {t.hero.shopNow}
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="group relative px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-black text-lg hover:bg-white hover:text-blue-700 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <span className="relative z-10 flex items-center gap-3">
                <Store className="w-6 h-6" />
                {t.hero.sellNow}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900'} text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-7 h-7" />
                </div>
                <span className="text-2xl font-black">TrustA</span>
              </div>
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                {t.footer.description}
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* For Buyers */}
            <div>
              <h3 className="text-xl font-black mb-6 relative inline-block">
                {t.footer.buyers}
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
              </h3>
              <ul className="space-y-4 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  How to Buy
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  Payment Methods
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  Return Policy
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  Buyer Protection
                </a></li>
              </ul>
            </div>

            {/* For Sellers */}
            <div>
              <h3 className="text-xl font-black mb-6 relative inline-block">
                {t.footer.sellers}
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
              </h3>
              <ul className="space-y-4 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  How to Sell
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  Seller Fees
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  Shipping Guidelines
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  Seller Dashboard
                </a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-black mb-6 relative inline-block">
                {t.footer.contact}
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
              </h3>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{t.footer.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+880 1711-123456</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>support@trusta.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Headphones className="w-5 h-5 flex-shrink-0" />
                  <span>{t.footer.support}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-white/60">
            <p className="text-lg">{t.footer.copyright}</p>
            <p className="mt-2 text-sm">ISO 27001 Certified | PCI DSS Compliant | GDPR Compliant</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.3s both;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default TrustAWebsite;
