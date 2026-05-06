import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Play, X, Clock, Video as VideoIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Run: npm install framer-motion

const videos = [
  {
    title: "Sapphire 82A - New Launch",
    youtubeId: "TXFwGWClqws", 
    duration: "2:15",
    category: "New Launch"
  },
  {
    title: "Sapphire 57 Construction Update",
    youtubeId: "hU1cQQtifKs", 
    duration: "3:45",
    category: "Ongoing"
  },
  {
    title: "Investment Opportunities in Gurgaon",
    youtubeId: "Yiw3ifQkiVw", 
    duration: "4:30",
    category: "Expert Talk"
  },
  {
    title: "Ameya Group - Sapphire Chain",
    youtubeId: "taYgBJ8BU_k", 
    duration: "5:10",
    category: "Corporate"
  },
  {
    title: "Retail Spaces in New Gurgaon",
    youtubeId: "g62QLaJDcoE", 
    duration: "2:50",
    category: "Commercial"
  },
  {
    title: "Sapphire 83 & 90 Overview",
    youtubeId: "iLZf28Ej26g", 
    duration: "4:05",
    category: "Delivered"
  }
];

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <Layout>
<PageHeader
  title={
    <span style={{ fontFamily: 'Poppins, sans-serif' }}>
      Experience Excellence
    </span>
  }
  subtitle="Visual walkthroughs of our landmark developments"
  backgroundImage="/media.jpeg"
  breadcrumbs={[
    { name: "Media", href: "/media/videos" },
    { name: "Video Gallery" },
  ]}
/>

      <section className="section-padding bg-slate-50/50">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <VideoIcon className="w-5 h-5 text-gold" />
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs">
                Premium Media Gallery
              </span>
            </motion.div>
<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[Poppins]">
  Leaders <span className="text-gold">Speak...</span> 
</h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded-full" />
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedVideo(video.youtubeId)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-border/40"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e: any) => { e.target.src = `https://img.youtube.com/vi/${video.youtubeId}/0.jpg` }}
                  />
                  
                  {/* Glassmorphism Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                    {video.category}
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                    >
                      <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                    </motion.div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-[10px] text-white font-mono">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
       
                  <div className="mt-4 flex items-center text-gold text-sm font-bold group-hover:gap-3 transition-all duration-300">
                    WATCH NOW <div className="h-px w-8 bg-gold/40" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Smooth Video Modal with AnimatePresence --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.2)] border border-white/10 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-gold text-white hover:text-primary rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Videos;