'use client';
import React, { useState, useEffect } from 'react';
import { Baby, Heart, Phone, MapPin, Star, CheckCircle, ArrowRight, Instagram, MessageCircle, ChevronDown, ChevronUp, ShieldCheck, Smile, Home } from 'lucide-react';
import { motion } from 'framer-motion';

// --- DATA ---
const services = [
  // Baby and Kids
  { name: "Baby 0-1 th / +IR", age: "0-1 Tahun", price: "30K - 35K", category: "Baby", desc: "Pijat lembut untuk bayi 0-1 tahun dengan Infra Red.", icon: Baby },
  { name: "Baby 1-3 th / +IR", age: "1-3 Tahun", price: "35K - 40K", category: "Baby", desc: "Pijat relaksasi bayi 1-3 tahun dengan Infra Red.", icon: Baby },
  { name: "Baby 3-4 th / +IR", age: "3-4 Tahun", price: "40K - 45K", category: "Baby", desc: "Pijat tumbuh kembang anak 3-4 tahun dengan Infra Red.", icon: Baby },
  { name: "Anak >5 th / +IR", age: ">5 Tahun", price: "45K - 50K", category: "Kids", desc: "Pijat untuk anak di atas 5 tahun dengan Infra Red.", icon: Smile },
  { name: "Baby Spa (Massage, Gym, Swim)", age: "All Ages", price: "80K", category: "Package", desc: "Paket lengkap: Massage + Baby Gym + Renang.", icon: Star, highlight: true },
  { name: "Baby Swim", age: "Baby", price: "50K", category: "Baby", desc: "Renang bayi dengan kolam air hangat.", icon: Baby },
  { name: "Kids Spa (Massage, Mandi busa + bola)", age: "Kids", price: "90K", category: "Kids", desc: "Spa anak lengkap dengan massage dan mandi busa.", icon: Smile },
  { name: "Bubble Bath (Mandi busa + bola)", age: "Kids", price: "55K", category: "Kids", desc: "Sensasi mandi busa ceria dengan mainan bola.", icon: Baby },
  { name: "Cukur Gundul", age: "Baby", price: "30K", category: "Care", desc: "Cukur rambut bayi hingga bersih dan rapi.", icon: CheckCircle },
  { name: "Memandikan Bayi Baru Lahir Home Care", age: "Newborn", price: "45K", category: "Baby", desc: "Mandi, perawatan tali pusar, pemantauan ikterik di rumah.", icon: Baby },
  { name: "Mandi Bayi", age: "Baby", price: "15K", category: "Baby", desc: "Layanan mandi bayi profesional.", icon: Baby },
  { name: "Masker Anak", age: "Kids", price: "10K", category: "Care", desc: "Masker perawatan wajah untuk anak.", icon: Smile },
  { name: "Membersihkan Sela Korang", age: "Baby", price: "15K", category: "Care", desc: "Membersihkan sela-sela kulit bayi.", icon: CheckCircle },
  
  // Baby & Kids Treatment
  { name: "Pijat Batuk Pilek", age: "0-5 Th", price: "40K - 60K", category: "Health", desc: "Pijat khusus meredakan batuk pilek anak.", icon: ShieldCheck },
  { name: "Pijat Sembelit", age: "0-5 Th", price: "40K - 60K", category: "Health", desc: "Pijat untuk mengatasi sembelit pada anak.", icon: ShieldCheck },
  { name: "Pijat Nafsu Makan", age: "0-5 Th", price: "40K - 60K", category: "Health", desc: "Pijat meningkatkan nafsu makan anak.", icon: Heart },
  { name: "Pijat Susah Tidur", age: "0-5 Th", price: "40K - 60K", category: "Health", desc: "Pijat relaksasi agar anak tidur nyenyak.", icon: Heart },
  { name: "Pijat Perut Kembung", age: "0-5 Th", price: "40K - 60K", category: "Health", desc: "Pijat untuk meredakan perut kembung.", icon: ShieldCheck },
  { name: "Pijat Bayi Prematur", age: "Prematur", price: "30K", category: "Health", desc: "Pijat lembut khusus untuk bayi prematur.", icon: Heart },
  { name: "Uap / Nebulizer", age: "Kids", price: "30K", category: "Health", desc: "Terapi uap nebulizer untuk anak.", icon: ShieldCheck },
  { name: "Sinar / Infrared", age: "Baby", price: "20K", category: "Health", desc: "Terapi sinar infrared untuk bayi.", icon: Star },
  { name: "Nebulizer + Infrared", age: "Baby", price: "45K", category: "Health", desc: "Kombinasi nebulizer dan infrared.", icon: ShieldCheck },
  { name: "Tindik", age: "Baby", price: "45K", category: "Care", desc: "Tindik telinga bayi yang aman.", icon: CheckCircle },
  { name: "Tapping", age: "Kids", price: "25K", category: "Health", desc: "Terapi tapping untuk anak.", icon: CheckCircle },
  { name: "Potong Kuku", age: "All Ages", price: "25K", category: "Care", desc: "Potong kuku bayi dan anak dengan aman.", icon: CheckCircle },
  
  // Mom Treatment
  { name: "Pijat Laktasi", age: "Mom", price: "75K", category: "Mom", desc: "Treatment melancarkan ASI untuk ibu menyusui.", icon: Heart },
  { name: "Pijat Hamil", age: "Mom", price: "120K", category: "Mom", desc: "Pijat khusus untuk ibu hamil.", icon: Heart },
  { name: "Pijat Nifas", age: "Mom", price: "120K", category: "Mom", desc: "Pijat pemulihan pasca melahirkan.", icon: Heart },
  { name: "Totok Wajah", age: "Mom", price: "25K", category: "Mom", desc: "Totok wajah untuk perawatan kulit ibu.", icon: Heart },
  { name: "Hidroterapi (Berendam Rempah)", age: "Mom", price: "75K", category: "Mom", desc: "Berendam dengan rempah-rempah tradisional.", icon: Heart },
  { name: "Mom Spa (Massage + Berendam Rempah)", age: "Mom", price: "175K", category: "Mom", desc: "Me time: Full body massage + Berendam rempah.", icon: Heart, highlight: true },
  { name: "Bekam", age: "Mom", price: "75K", category: "Mom", desc: "Terapi bekam untuk ibu.", icon: Heart },
];

const faqs = [
  { q: "Apakah bisa dipanggil ke rumah (Home Care)?", a: "Tentu! Kami menyediakan layanan Home Care agar Bunda dan si Kecil tetap nyaman di rumah. Hubungi admin untuk jadwal & transport." },
  { q: "Umur berapa bayi boleh mulai di-spa?", a: "Baby Spa (pijat & renang) disarankan mulai usia 3 bulan atau saat leher bayi sudah tegak/kuat. Untuk pijat saja bisa sejak newborn." },
  { q: "Apakah air kolamnya hangat?", a: "Ya, kami selalu menggunakan air hangat yang suhunya disesuaikan dengan kenyamanan bayi agar tidak kedinginan." },
];

// --- COMPONENTS ---

export default function App() {
  const [activeTab, setActiveTab] = useState('All');
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll Listener for Navbar Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter Logic
  const filteredServices = activeTab === 'All' 
    ? services 
    : activeTab === 'Baby'
    ? services.filter(s => ['Baby', 'Kids', 'Health', 'Package', 'Care'].includes(s.category))
    : services.filter(s => s.category === 'Mom');

  return (
    <div className="min-h-screen transition-colors duration-500 font-sans selection:bg-pink-500 selection:text-white bg-slate-50 text-slate-900">
      
      {/* --- ANIMATED BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-blob bg-pink-300"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-2000 bg-purple-300"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-4000 bg-rose-300"></div>
      </div>

      {/* --- NAVBAR (Desktop Only) --- */}
      <nav className={`hidden md:block fixed w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-white/80 border-b border-slate-200' : 'bg-transparent'} backdrop-blur-lg`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <img src="/logo.png" alt="Mayesha Spa Logo" className="w-12 h-12 rounded-full object-cover" />
            <span className="text-2xl font-bold tracking-tight transition-colors text-slate-900">
              Mayesha <span className="text-pink-500">Baby Spa</span>
            </span>
          </div>
          
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#home" className="hover:text-pink-500 transition-colors">Home</a>
              <a href="#pricelist" className="hover:text-pink-500 transition-colors">Layanan</a>
              <a href="#faq" className="hover:text-pink-500 transition-colors">FAQ</a>
              <a href="#location" className="hover:text-pink-500 transition-colors">Lokasi</a>
            </div>
            
            <a href="#booking" className="px-6 py-2.5 text-sm font-bold text-white bg-pink-500 hover:bg-pink-600 rounded-full transition-all shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:-translate-y-0.5">
              Reservasi
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="home" className="relative pt-40 pb-20 px-6 min-h-[90vh] flex flex-col justify-center items-center text-center">
        <div className="max-w-5xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-pink-200 backdrop-blur-md mb-8 animate-fade-in-up shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider uppercase text-pink-600">
              Buka Setiap Hari 08.30 - 16.30 WIB
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
            Perawatan Terbaik untuk <br/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-pink-500">
                Buah Hati & Bunda
              </span>
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-pink-300 opacity-60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-slate-700">
            Nikmati layanan <b>Baby Spa</b>, <b>Kids Massage</b>, dan <b>Mom Treatment</b> dengan terapis bidan profesional. Bisa Home Care langsung ke rumah Anda!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/6281325641896" 
              target="_blank" 
              className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="absolute inset-0 w-full h-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2 group-hover:text-white">
                <Phone size={20} /> Booking Sekarang
              </span>
            </a>
            <a 
              href="#pricelist"
              className="px-8 py-4 rounded-full border-2 border-slate-200 font-bold text-lg transition-all flex items-center gap-2 hover:gap-4 hover:bg-white hover:shadow-lg"
            >
              Lihat Menu <ArrowRight size={18} />
            </a>
          </div>

          {/* Stats / Trust Badges */}
          <div className="mt-16 pt-8 border-t border-slate-200/50 grid grid-cols-3 gap-4 md:gap-12">
             {[
               { val: "500+", lab: "Happy Baby" },
               { val: "100%", lab: "Certified Bidan" },
               { val: "5.0", lab: "Rating Google" }
             ].map((stat, i) => (
               <div key={i} className="flex flex-col items-center">
                 <span className="text-2xl md:text-3xl font-extrabold text-slate-900">{stat.val}</span>
                 <span className="text-xs md:text-sm text-slate-600 uppercase tracking-wider font-semibold">{stat.lab}</span>
               </div>
             ))}
          </div>
        </div>
      </header>

      {/* --- GALLERY SECTION --- */}
      <section className="py-16 px-6 bg-slate-50 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-pink-500 font-bold tracking-wider text-sm uppercase mb-2 block">Galeri Kami</span>
            <h2 className="text-4xl font-extrabold mb-4">Galeri Mayesha Baby Spa</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Lihat aktivitas layanan dan fasilitas lengkap kami.</p>
          </motion.div>

          {/* Activity Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <Star className="text-pink-500 fill-pink-500" size={24} />
              Aktivitas Kami
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  src: "/images/activity-swim-purple.png",
                  alt: "Baby Spa & Swim",
                  title: "Fun Baby Swim",
                  desc: "Pengalaman renang seru"
                },
                {
                  src: "/images/activity-team.jpg",
                  alt: "Tim Profesional",
                  title: "Bidan Profesional",
                  desc: "Ditangani tenaga ahli"
                },
                {
                  src: "/images/activity-massage.jpg",
                  alt: "Pijat Bayi",
                  title: "Baby Massage",
                  desc: "Relaksasi untuk si kecil"
                },
                {
                  src: "/images/activity-therapy.png",
                  alt: "Terapi Sinar",
                  title: "Layanan Kesehatan",
                  desc: "Terapi infrared & uap"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                >
                  <img src={item.src} alt={item.alt} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-xs text-slate-200">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Facility Gallery */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <Home className="text-pink-500" size={24} />
              Fasilitas Kami
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  src: "/images/facility-pool.png",
                  alt: "Kolam Renang Bayi",
                  title: "Kolam Renang",
                  desc: "Air hangat & nyaman"
                },
                {
                  src: "/images/facility-gym.jpg",
                  alt: "Ruang Baby Gym",
                  title: "Baby Gym",
                  desc: "Area bermain edukatif"
                },
                {
                  src: "/images/facility-treatment.png",
                  alt: "Ruang Treatment",
                  title: "Ruang Private",
                  desc: "Bersih & higienis"
                },
                {
                  src: "/images/facility-massage.png",
                  alt: "Ruang Massage",
                  title: "Matras Empuk",
                  desc: "Nyaman untuk bayi"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                >
                  <img src={item.src} alt={item.alt} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-xs text-slate-200">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="pricelist" className="py-24 px-6 relative rounded-t-[3rem] -mt-12 z-20 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-center md:text-left w-full md:w-auto">
              <span className="text-pink-500 font-bold tracking-wider text-sm uppercase mb-2 block">Daftar Menu & Harga</span>
              <h2 className="text-4xl font-extrabold">Pilihan Perawatan</h2>
            </div>
            
            {/* Custom Tab Switcher */}
            <div className="p-1.5 rounded-full flex bg-slate-100 mx-auto md:mx-0 w-fit">
              {['All', 'Baby', 'Mom'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeTab === tab 
                    ? 'bg-white text-slate-900 shadow-md' 
                    : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab === 'All' ? 'Semua' : tab === 'Baby' ? 'Kids & Baby' : 'Mom Care'}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service, idx) => (
              <motion.div 
                key={idx}
                className="group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 border bg-slate-50 border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-pink-100/50 hover:border-pink-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ 
                  duration: 0.4, 
                  delay: Math.min(idx * 0.05, 1.5),
                  ease: "easeOut" 
                }}
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 overflow-hidden rounded-tr-3xl rounded-bl-3xl">
                     <div className="bg-pink-500 text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest shadow-lg">
                       Best Seller
                     </div>
                  </div>
                )}
                
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 bg-white text-pink-500 shadow-lg shadow-pink-100">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg font-extrabold mb-2 text-slate-900 group-hover:text-pink-500 transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs text-slate-500 mb-1 font-medium">{service.age}</p>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-slate-400 font-bold">Mulai dari</span>
                    <span className="text-xl font-extrabold text-pink-500">{service.price}</span>
                  </div>
                  <a 
                    href={`https://wa.me/6281325641896?text=Halo, saya ingin booking ${service.name} (${service.price})`}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 hover:bg-pink-500 hover:text-white transition-all"
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-pink-500 font-bold tracking-wider text-sm uppercase mb-2 block">Testimoni Customer</span>
            <h2 className="text-4xl font-extrabold mb-4">Apa Kata Mereka?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Kepuasan customer adalah prioritas kami. Berikut testimoni dari para Bunda yang sudah merasakan layanan Mayesha Baby Spa.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Ibu Siti Nurhaliza",
                service: "Baby Spa Complete",
                rating: 5,
                text: "Alhamdulillah baby saya jadi lebih aktif dan tidurnya nyenyak setelah rutin baby spa di Mayesha. Terapis nya ramah dan profesional banget!",
                initial: "S"
              },
              {
                name: "Ibu Dewi Lestari",
                service: "Pijat Laktasi",
                rating: 5,
                text: "Pijat laktasi di sini sangat membantu melancarkan ASI saya. Sekarang baby kenyang terus dan saya lebih tenang. Recommended!",
                initial: "D"
              },
              {
                name: "Ibu Rina Wijaya",
                service: "Kids Spa",
                rating: 5,
                text: "Anak saya suka banget mandi busa di Mayesha! Tempatnya bersih, air hangatnya pas, dan terapis sabar banget sama anak-anak. Top!",
                initial: "R"
              },
              {
                name: "Ibu Fitri Handayani",
                service: "Pijat Batuk Pilek",
                rating: 5,
                text: "Baby saya batuk pilek langsung membaik setelah dipijat di Mayesha. Terapis nya bidan bersertifikat jadi saya percaya banget!",
                initial: "F"
              },
              {
                name: "Ibu Maya Kusuma",
                service: "Mom Spa",
                rating: 5,
                text: "Me time terbaik! Mom spa nya bikin badan fresh lagi setelah cape ngurus baby. Massage nya enak banget dan berendam rempahnya relaxing!",
                initial: "M"
              },
              {
                name: "Ibu Ayu Pramesti",
                service: "Baby Swim",
                rating: 5,
                text: "Baby saya umur 4 bulan sudah berani renang di Mayesha. Kolamnya bersih, air hangat, dan baby jadi lebih ceria. Terima kasih Mayesha!",
                initial: "A"
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                className="p-6 rounded-2xl border border-slate-100 hover:border-pink-200 hover:shadow-lg transition-all duration-300 bg-slate-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500">{testimonial.service}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://www.google.com/search?q=mayesha+baby+spa" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-pink-500 transition-all"
            >
              <Star size={20} className="fill-yellow-400 text-yellow-400" />
              Lihat Semua Review di Google
            </a>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-20 px-6 bg-slate-50">
         <div className="max-w-3xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
               <h2 className="text-3xl font-bold mb-4">Sering Ditanyakan (FAQ)</h2>
               <p className="text-slate-600">Informasi seputar layanan Mayesha Baby Spa</p>
            </motion.div>
            
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                 <div 
                    key={i} 
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                       openFaq === i 
                       ? 'bg-white border-pink-200 shadow-lg shadow-pink-100' 
                       : 'bg-white border-slate-200 hover:border-pink-200'
                    }`}
                 >
                    <button 
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                       className="w-full flex items-center justify-between p-6 text-left font-bold focus:outline-none"
                    >
                       <span>{faq.q}</span>
                       {openFaq === i ? <ChevronUp className="text-pink-500" /> : <ChevronDown className="text-slate-400" />}
                    </button>
                    <div className={`px-6 text-slate-600 leading-relaxed transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                       {faq.a}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- LOCATION / FOOTER --- */}
      <footer id="location" className="pt-20 pb-10 px-6 border-t bg-white border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="lg:col-span-2">
               <div className="flex items-center gap-2 mb-6">
                  <img src="/logo.png" alt="Mayesha Spa Logo" className="w-12 h-12 rounded-full object-cover" />
                  <span className="text-2xl font-bold">Mayesha <span className="text-pink-500">Baby Spa</span></span>
               </div>
               <p className="text-lg max-w-md mb-8 text-slate-600">
                 Solusi kesehatan dan relaksasi keluarga. Kami menggabungkan perawatan modern dengan sentuhan kasih sayang.
               </p>
               <div className="flex gap-4">
                  <a href="https://www.instagram.com/mayeshababyspa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all"><Instagram size={20}/></a>
                  <a href="https://m.me/mayesha.babyspa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"><MessageCircle size={20}/></a>
               </div>
            </div>

            <div>
               <h4 className="font-bold text-lg mb-6">Kontak & Lokasi</h4>
               <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex flex-col gap-2">
                     <div className="flex items-start gap-3">
                       <MapPin className="text-pink-500 shrink-0 mt-0.5" size={18} />
                       <span>Jl. Musi Tegalwinangun Rt 02 Rw 13 Tegalgede, Kec. Karanganyar, Kab. Karanganyar (Barat Pasar Bejen)</span>
                     </div>
                     <a 
                       href="https://maps.app.goo.gl/wFPszoLPwrqvPav46" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="ml-6 inline-flex items-center gap-2 px-4 py-2 bg-pink-500 text-white text-xs font-bold rounded-full hover:bg-pink-600 transition-all w-fit"
                     >
                       <MapPin size={14} /> Buka di Maps
                     </a>
                  </li>
                  <li className="flex items-center gap-3">
                     <Phone className="text-pink-500 shrink-0" size={18} />
                     <a href="https://wa.me/6281325641896" className="hover:text-pink-500 transition-colors">+62 813-2564-1896</a>
                  </li>
               </ul>
            </div>

            <div>
               <h4 className="font-bold text-lg mb-6">Jam Operasional</h4>
               <div className="p-4 rounded-xl border bg-slate-50 border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-sm font-medium">Senin - Minggu</span>
                     <span className="text-xs font-bold px-2 py-1 rounded bg-green-100 text-green-700">BUKA</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">08.30 - 16.30</div>
               </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
             <p>&copy; 2025 Mayesha Baby Spa. All rights reserved.</p>
             <div className="flex gap-6">
                <a href="#" className="hover:text-pink-500">Privacy Policy</a>
                <a href="#" className="hover:text-pink-500">Terms of Service</a>
             </div>
          </div>
        </div>
      </footer>

      {/* --- MOBILE BOTTOM NAVIGATION --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg">
        <div className="flex justify-around items-center py-3 px-2">
          <a href="#home" className="flex flex-col items-center gap-1 text-slate-600 hover:text-pink-500 transition-colors">
            <Home size={22} />
            <span className="text-[10px] font-medium">Home</span>
          </a>
          <a href="#pricelist" className="flex flex-col items-center gap-1 text-slate-600 hover:text-pink-500 transition-colors">
            <Star size={22} />
            <span className="text-[10px] font-medium">Layanan</span>
          </a>
          <a 
            href="https://wa.me/6281325641896" 
            target="_blank"
            className="flex flex-col items-center gap-1 -mt-6 bg-pink-500 text-white p-4 rounded-full shadow-xl hover:bg-pink-600 transition-all"
          >
            <MessageCircle size={24} fill="white" />
          </a>
          <a href="#faq" className="flex flex-col items-center gap-1 text-slate-600 hover:text-pink-500 transition-colors">
            <ChevronDown size={22} />
            <span className="text-[10px] font-medium">FAQ</span>
          </a>
          <a href="#location" className="flex flex-col items-center gap-1 text-slate-600 hover:text-pink-500 transition-colors">
            <MapPin size={22} />
            <span className="text-[10px] font-medium">Lokasi</span>
          </a>
        </div>
      </nav>

      {/* --- FLOATING WHATSAPP BUTTON (Desktop Only) --- */}
      <a 
        href="https://wa.me/6281325641896" 
        target="_blank"
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-full font-bold shadow-2xl hover:bg-[#20bd5a] hover:scale-105 transition-all animate-bounce-slow"
      >
         <MessageCircle size={24} fill="white" className="text-white" />
         <span>Chat Admin</span>
      </a>

      {/* --- GLOBAL STYLES FOR ANIMATION --- */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-bounce-slow {
           animation: bounce 3s infinite;
        }
      `}</style>
    </div>
  );
}
