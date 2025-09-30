"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLinkedin, FaInstagram, FaEnvelope, FaTimes,
  FaChartLine, FaUsers, FaPenFancy, FaRocket,
  FaBars, FaArrowUp
} from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Update active section
      const sections = ["hero", "about", "experience", "portfolio", "case-studies", "testimonials", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuItems = [
    { href: "#hero", label: "Trang chủ" },
    { href: "#about", label: "Về tôi" },
    { href: "#experience", label: "Kinh nghiệm" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#testimonials", label: "Đánh giá" },
    { href: "#services", label: "Dịch vụ" },
    { href: "#contact", label: "Liên hệ" },
  ];

  const skills = [
    { icon: <FaPenFancy />, name: "Content Creation & Planning" },
    { icon: <FaUsers />, name: "Community Engagement" },
    { icon: <FaChartLine />, name: "Social Media Analytics" },
    { icon: <FaRocket />, name: "Brand Strategy" },
  ];

  const experiences = [
    {
      company: "Sorcea",
      location: "Cleveland, Ohio",
      role: "Social Media and Marketing Coordinator",
      period: "Oct. 2024 – Present",
      description: [
        "Tạo và trình bày báo cáo analytics hai tuần theo dõi hiệu suất content, hành vi khách hàng và xu hướng engagement",
        "Thực hiện nghiên cứu thị trường chuyên sâu để xác định xu hướng và tinh chỉnh chiến lược marketing",
        "Phát triển và thực thi content calendar để duy trì sự hiện diện trực tuyến nhất quán"
      ],
      color: "from-pastel-pink/20 to-pastel-beige/20"
    },
    {
      company: "Influki",
      location: "New York, NY",
      role: "Content Planner Intern",
      period: "Dec. 2024 – Mar. 2025",
      description: [
        "Phát triển kế hoạch chiến lược content trên Instagram, Facebook và LinkedIn để tăng cường định vị thương hiệu",
        "Tạo và xuất bản content trên các kênh social, tăng engagement cộng đồng và mở rộng reach",
        "Xác định và tìm kiếm influencers cho brands, quản lý outreach để thúc đẩy hợp tác"
      ],
      color: "from-pastel-beige/20 to-white"
    },
    {
      company: "Power of Patients",
      location: "Boston, MA",
      role: "Communications Graduate Consultant",
      period: "Apr. 2024 – Jun. 2024",
      description: [
        "Phát triển chiến lược benchmarking và best practices để nâng cao nhận diện và visibility của tổ chức",
        "Nghiên cứu cơ hội tạo doanh thu thông qua display advertisements trên website"
      ],
      color: "from-white to-pastel-pink/10"
    },
    {
      company: "Chinatown-International District BIA",
      location: "Seattle, WA",
      role: "Social Media and Outreach Intern",
      period: "Feb. 2022 – Aug. 2022",
      description: [
        "Phát triển content Instagram spotlight hoạt động và sự kiện địa phương, tăng sự quan tâm và tham gia",
        "Hỗ trợ outreach với doanh nghiệp địa phương, đóng góp vào việc tăng 15% tham gia sự kiện",
        "Giám sát và phản hồi comments, messages và tags, xây dựng engagement tích cực"
      ],
      color: "from-pastel-pink/10 to-pastel-beige/20"
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Husky Communicators - Website Redesign Launch",
      category: "Product Marketing & Strategy",
      description: "Phát triển chiến lược launch toàn diện cho website sau rebranding, phối hợp đa team để đảm bảo ra mắt thành công",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      stats: "Cross-functional Launch"
    },
    {
      id: 2,
      title: "Chinatown-ID BIA - Community Engagement",
      category: "Community Building & Content",
      description: "Tạo content Instagram quảng bá hoạt động địa phương, tăng 15% tham gia sự kiện thông qua chiến lược outreach",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      stats: "+15% Event Participation"
    },
    {
      id: 3,
      title: "Sorcea - Social Media Analytics & Strategy",
      category: "Social Media Marketing",
      description: "Xây dựng báo cáo analytics hai tuần, nghiên cứu thị trường và phát triển content calendar để duy trì sự hiện diện trực tuyến nhất quán",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      stats: "Bi-weekly Reports"
    },
    {
      id: 4,
      title: "Influki - Multi-Platform Content Strategy",
      category: "Content Planning",
      description: "Phát triển chiến lược content trên Instagram, Facebook và LinkedIn, tăng engagement và mở rộng reach của brand",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
      stats: "3 Platform Strategy"
    },
  ];

  const caseStudies = [
    {
      title: "Chinatown-ID BIA: Community Engagement & Event Growth",
      problem: "Khu phố Chinatown-International District cần tăng sự tham gia của cộng đồng vào các sự kiện và hoạt động địa phương, đồng thời xây dựng sự hiện diện trực tuyến mạnh mẽ hơn.",
      solution: "Phát triển chiến lược content Instagram tập trung vào việc spotlight các doanh nghiệp địa phương và sự kiện. Thực hiện outreach có hệ thống với các doanh nghiệp trước và sau sự kiện. Giám sát và tương tác tích cực với comments, messages và tags để xây dựng cộng đồng trực tuyến.",
      results: [
        "Tăng 15% tỷ lệ tham gia sự kiện",
        "Nâng cao nhận thức về khu phố trong cộng đồng",
        "Xây dựng mối quan hệ chặt chẽ với doanh nghiệp địa phương",
        "Tạo sự hiện diện trực tuyến gắn kết và tích cực"
      ],
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800"
    },
    {
      title: "Husky Communicators: Website Redesign & Rebranding",
      problem: "Tổ chức cần tái định vị thương hiệu và ra mắt website mới sau khi rebranding, đảm bảo sự chuyển đổi mượt mà và tạo ấn tượng mạnh mẽ với cộng đồng.",
      solution: "Nghiên cứu xu hướng ngành và vị thế cạnh tranh. Đóng góp vào phát triển brand identity mới bao gồm tên, logo và messaging. Phát triển kế hoạch launch quảng bá toàn diện và phối hợp với các team (website, social media, event) để đảm bảo thực thi liền mạch.",
      results: [
        "Ra mắt website thành công với UX được cải thiện",
        "Phối hợp hiệu quả giữa các team chức năng",
        "Tạo brand identity mới nhất quán và chuyên nghiệp",
        "Tổ chức launch party kèm chiến lược truyền thông đa kênh"
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800"
    },
  ];

  const testimonials = [
    {
      name: "Team Lead, Sorcea",
      role: "Social Media & Marketing Team",
      text: "An mang đến cái nhìn sâu sắc thông qua các báo cáo analytics chi tiết. Khả năng nghiên cứu thị trường và phát triển content calendar của cô ấy đã giúp chúng tôi duy trì sự hiện diện trực tuyến nhất quán và hiệu quả.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
    },
    {
      name: "Project Manager, Influki",
      role: "Content Strategy Team",
      text: "An xuất sắc trong việc phát triển chiến lược content đa nền tảng. Cô ấy không chỉ tạo nội dung chất lượng mà còn hiểu rõ cách tối ưu engagement trên từng kênh. Kỹ năng sourcing influencers của cô ấy đặc biệt ấn tượng.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200"
    },
    {
      name: "Community Director, Chinatown-ID BIA",
      role: "Business Improvement Area",
      text: "Làm việc với An thật tuyệt vời! Cô ấy có khả năng kết nối với cộng đồng địa phương xuất sắc. Nhờ nỗ lực outreach và content sáng tạo của cô ấy, chúng tôi đã thấy sự tăng trưởng rõ rệt trong tham gia sự kiện.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
    },
  ];

  const services = [
    {
      title: "Social Media Marketing & Analytics",
      description: "Phát triển và thực thi chiến lược social media đa nền tảng với báo cáo phân tích chi tiết để tối ưu hiệu suất.",
      features: ["Social media strategy", "Content calendar development", "Analytics & reporting", "Platform optimization (Instagram, Facebook, LinkedIn)"],
      icon: <FaPenFancy className="text-4xl" />
    },
    {
      title: "Community Engagement & Outreach",
      description: "Xây dựng và nuôi dưỡng cộng đồng trực tuyến gắn kết, tăng tương tác và sự tham gia của khách hàng.",
      features: ["Community management", "Event promotion", "Local business outreach", "Engagement strategy"],
      icon: <FaUsers className="text-4xl" />
    },
    {
      title: "Content Strategy & Brand Development",
      description: "Nghiên cứu thị trường và phát triển chiến lược nội dung phù hợp với mục tiêu thương hiệu và đối tượng mục tiêu.",
      features: ["Market research", "Content planning", "Brand positioning", "Multi-platform content creation"],
      icon: <FaRocket className="text-4xl" />
    },
  ];

  const blogPosts = [
    {
      title: "The Power of Analytics: Turning Data Into Actionable Strategy",
      excerpt: "Khám phá cách tôi sử dụng báo cáo analytics hai tuần để theo dõi hiệu suất, hành vi khách hàng và xu hướng engagement, từ đó điều chỉnh chiến lược marketing hiệu quả...",
      date: "15 Tháng 2, 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
    },
    {
      title: "Community-First Approach: Building Local Engagement",
      excerpt: "Bài học từ việc tăng 15% tham gia sự kiện tại Chinatown-ID BIA thông qua chiến lược outreach và content địa phương...",
      date: "8 Tháng 1, 2025",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
    },
    {
      title: "Cross-Platform Content Strategy: Instagram, Facebook & LinkedIn",
      excerpt: "Cách phát triển chiến lược content nhất quán trên nhiều nền tảng để tăng brand positioning và audience engagement...",
      date: "20 Tháng 12, 2024",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600"
    },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
              <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-playfair font-bold text-warm-gray"
            >
              An Thuy Duong
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-pastel-pink ${
                    activeSection === item.href.slice(1) ? "text-pastel-pink" : "text-warm-gray"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-warm-gray text-2xl"
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container-custom py-4 flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-warm-gray hover:text-pastel-pink transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-pastel-beige via-white to-pastel-pink/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-primary mb-6">
                Social Media Strategist –<br />
                <span className="text-pastel-pink">Data-Driven Content Creator</span>
              </h1>
              <p className="text-body mb-8">
                Tôi kết hợp phân tích dữ liệu, sáng tạo nội dung và xây dựng cộng đồng 
                để tạo ra chiến lược marketing có tác động thực sự.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#portfolio" className="btn-primary">
                  Xem Portfolio
                </a>
                <a href="#contact" className="btn-secondary">
                  Liên hệ ngay
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-pastel-pink font-playfair">10+</div>
                  <div className="text-sm text-warm-gray/70">Dự án hoàn thành</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pastel-pink font-playfair">4+</div>
                  <div className="text-sm text-warm-gray/70">Tổ chức hợp tác</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pastel-pink font-playfair">15%</div>
                  <div className="text-sm text-warm-gray/70">Tăng trưởng engagement</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink to-pastel-beige rounded-full opacity-20 blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
                  alt="Profile"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="heading-secondary mb-6">Về tôi</h2>
            <p className="text-body mb-4">
              Xin chào, tôi là <strong>An Thuy Duong</strong> – một Social Media Strategist và Content Creator 
              với niềm đam mê xây dựng cộng đồng và tạo ra những chiến dịch marketing có tác động thực sự.
            </p>
            <p className="text-body mb-4">
              Với bằng Thạc sĩ về Corporate and Organizational Communication từ Northeastern University và 
              kinh nghiệm làm việc với các tổ chức đa dạng, tôi kết hợp phân tích dữ liệu với sáng tạo nội dung 
              để mang lại kết quả đo lường được. Từ việc tăng 15% tham gia sự kiện cho cộng đồng địa phương đến 
              phát triển chiến lược content đa nền tảng, tôi tin rằng marketing hiệu quả bắt đầu từ việc thấu hiểu 
              khách hàng và cộng đồng.
            </p>
            <p className="text-body mb-4">
              Tôi thành thạo tiếng Anh và tiếng Việt, giúp tôi kết nối với đa dạng đối tượng và thị trường.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-pastel-pink text-5xl mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-warm-gray">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gradient-to-br from-pastel-beige/30 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Kinh nghiệm làm việc</h2>
            <p className="text-body max-w-2xl mx-auto">
              Hành trình phát triển của tôi qua các vị trí trong Social Media Marketing & Content Strategy
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-24 w-0.5 h-full bg-pastel-pink/30 -translate-x-1/2 -z-10" />
                )}

                <div className={`card p-8 md:p-10 bg-gradient-to-br ${exp.color} relative`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute -left-3 top-10 w-6 h-6 bg-pastel-pink rounded-full border-4 border-white shadow-lg" />
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-playfair font-semibold text-warm-gray mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-pastel-pink font-medium">
                        <span className="text-lg">{exp.company}</span>
                        <span>•</span>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <div className="text-warm-gray/70 font-medium whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-pastel-pink mt-1.5 flex-shrink-0">▸</span>
                        <span className="text-warm-gray/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="heading-tertiary text-center mb-12">Học vấn</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card p-8 text-center bg-gradient-to-br from-pastel-pink/10 to-white"
              >
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-xl font-playfair font-semibold text-warm-gray mb-2">
                  Master of Science
                </h4>
                <p className="text-pastel-pink font-medium mb-2">
                  Corporate and Organizational Communication
                </p>
                <p className="text-warm-gray/70 text-sm">
                  Northeastern University, Boston, MA
                </p>
                <p className="text-warm-gray/60 text-sm mt-1">May 2024</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="card p-8 text-center bg-gradient-to-br from-pastel-beige/20 to-white"
              >
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-xl font-playfair font-semibold text-warm-gray mb-2">
                  Bachelor of Arts
                </h4>
                <p className="text-pastel-pink font-medium mb-2">
                  Communication and Media
                </p>
                <p className="text-warm-gray/70 text-sm">
                  Seattle University, Seattle, WA
                </p>
                <p className="text-warm-gray/60 text-sm mt-1">
                  June 2021 • Magna Cum Laude
                </p>
                <p className="text-warm-gray/50 text-xs mt-2">
                  Messina Scholarship Recipient 2019-2021
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="portfolio" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Portfolio</h2>
            <p className="text-body max-w-2xl mx-auto">
              Một số dự án tiêu biểu mà tôi đã thực hiện trong lĩnh vực content marketing, 
              community building và growth marketing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card cursor-pointer"
                onClick={() => setLightboxImage(item.image)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-pastel-pink px-4 py-2 rounded-full text-sm font-medium">
                    {item.stats}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-pastel-pink font-medium mb-2">{item.category}</div>
                  <h3 className="text-xl font-playfair font-semibold mb-3">{item.title}</h3>
                  <p className="text-warm-gray/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-pastel-pink transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <FaTimes />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightboxImage}
              alt="Portfolio item"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Case Studies Section */}
      <section id="case-studies" className="section-padding bg-gradient-to-br from-pastel-beige/30 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Case Studies</h2>
            <p className="text-body max-w-2xl mx-auto">
              Khám phá chi tiết về cách tôi giải quyết thách thức và tạo ra kết quả thực tế
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <h3 className="heading-tertiary mb-6">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-pastel-pink mb-2">Vấn đề</h4>
                      <p className="text-warm-gray/80">{study.problem}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-pastel-pink mb-2">Giải pháp</h4>
                      <p className="text-warm-gray/80">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-pastel-pink mb-3">Kết quả</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-pastel-pink mt-1">✓</span>
                            <span className="text-warm-gray/80">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Đánh giá</h2>
            <p className="text-body max-w-2xl mx-auto">
              Lời nhận xét từ những người đã làm việc cùng tôi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-warm-gray">{testimonial.name}</h4>
                    <p className="text-sm text-warm-gray/60">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-warm-gray/80 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-br from-pastel-pink/10 to-pastel-beige/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Dịch vụ</h2>
            <p className="text-body max-w-2xl mx-auto">
              Các gói dịch vụ tôi cung cấp để giúp doanh nghiệp của bạn phát triển
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-pastel-pink mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="heading-tertiary text-2xl mb-4">{service.title}</h3>
                <p className="text-warm-gray/80 mb-6">{service.description}</p>
                <ul className="space-y-2 text-left">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-pastel-pink mt-1">✓</span>
                      <span className="text-warm-gray/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a href="#contact" className="btn-primary inline-block">
              Hợp tác với tôi
            </a>
          </motion.div>
        </div>
      </section>

      {/* Blog/Insights Section */}
      <section className="section-padding bg-gradient-to-br from-pastel-beige/30 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Insights</h2>
            <p className="text-body max-w-2xl mx-auto">
              Chia sẻ góc nhìn và kinh nghiệm về marketing & growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-pastel-pink mb-2">{post.date}</div>
                  <h3 className="text-xl font-playfair font-semibold mb-3">{post.title}</h3>
                  <p className="text-warm-gray/70 text-sm">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Liên hệ</h2>
            <p className="text-body max-w-2xl mx-auto">
              Hãy kết nối với tôi để thảo luận về dự án hoặc cơ hội hợp tác
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8 md:p-12"
            >
              <div className="mb-6">
                <label className="block text-warm-gray font-medium mb-2">
                  Tên của bạn
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-pastel-pink/30 rounded-lg focus:outline-none focus:border-pastel-pink transition-colors"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              <div className="mb-6">
                <label className="block text-warm-gray font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-pastel-pink/30 rounded-lg focus:outline-none focus:border-pastel-pink transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-warm-gray font-medium mb-2">
                  Nhu cầu hợp tác
                </label>
                <select className="w-full px-4 py-3 border border-pastel-pink/30 rounded-lg focus:outline-none focus:border-pastel-pink transition-colors">
                  <option>Tư vấn Content Marketing</option>
                  <option>Xây dựng Cộng đồng</option>
                  <option>Growth & Product Marketing</option>
                  <option>Dự án khác</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-warm-gray font-medium mb-2">
                  Tin nhắn
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-pastel-pink/30 rounded-lg focus:outline-none focus:border-pastel-pink transition-colors resize-none"
                  placeholder="Mô tả ngắn gọn về dự án hoặc nhu cầu của bạn..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Gửi tin nhắn
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-pastel-pink/20 to-pastel-beige/30 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-playfair font-bold text-warm-gray mb-2">
                An Thuy Duong
              </div>
              <p className="text-warm-gray/70">Social Media Strategist & Content Creator</p>
              <p className="text-warm-gray/60 text-sm mt-2">anduong2902@gmail.com | (253) 231-6358</p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/anthuyduong/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-warm-gray hover:text-pastel-pink transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:anduong2902@gmail.com"
                className="text-3xl text-warm-gray hover:text-pastel-pink transition-colors"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-warm-gray/20 text-center text-warm-gray/60 text-sm">
            <p>© 2025 An Thuy Duong. All rights reserved.</p>
            <p className="mt-2">Master of Science in Corporate and Organizational Communication, Northeastern University</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-pastel-pink text-warm-gray p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40"
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
