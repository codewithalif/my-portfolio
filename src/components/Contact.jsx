import { useState } from 'react';
import { Mail, MapPin, Send, Check, Clock, Sparkles, User, FileText, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('alif@developer.example');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-900 scroll-mt-24 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -right-16 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-16 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal yOffset={35} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Have an exciting web project, internship opening, or technical question? Reach out through the form or direct channels below.
          </p>
        </ScrollReveal>

        {/* Grid Layout: Stacking on mobile (grid-cols-1), Splitting Contact Info and Form on Desktop (lg:grid-cols-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Contact Info Cards */}
          <ScrollReveal delay={0.1} yOffset={40} className="space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800/90 shadow-xl backdrop-blur-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Feel free to connect directly via email or social platforms. I actively check messages and respond promptly.
              </p>

              {/* Info Cards List */}
              <div className="space-y-4">
                {/* Email Card with Copy Action */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                        Email Address
                      </div>
                      <a
                        href="mailto:alif@developer.example"
                        className="text-white hover:text-cyan-400 font-medium text-sm sm:text-base transition-colors truncate block"
                      >
                        alif@developer.example
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors active:scale-95 cursor-pointer touch-manipulation"
                    aria-label="Copy email address"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                      Location &amp; Institution
                    </div>
                    <div className="text-white font-medium text-sm sm:text-base">
                      Pabna, Bangladesh
                    </div>
                    <div className="text-xs text-slate-400">
                      Pabna Polytechnic Institute (CST)
                    </div>
                  </div>
                </div>

                {/* Availability & Response Time */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                      Response Time &amp; Status
                    </div>
                    <div className="text-white font-medium text-sm sm:text-base flex items-center gap-2">
                      <span>Within 24 Hours</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="text-xs text-emerald-400/90">
                      Open for full-stack projects &amp; internships
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Connect on Socials
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2.5 min-h-[48px] py-3 px-4 rounded-xl bg-slate-950/70 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all active:scale-95 touch-manipulation text-sm font-semibold group shadow-sm"
                    aria-label="Visit Alif's GitHub"
                  >
                    <GithubIcon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2.5 min-h-[48px] py-3 px-4 rounded-xl bg-slate-950/70 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all active:scale-95 touch-manipulation text-sm font-semibold group shadow-sm"
                    aria-label="Visit Alif's LinkedIn"
                  >
                    <LinkedinIcon className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Column 2: Contact Form with Proper Input Field Padding & Touch Target Sizes */}
          <ScrollReveal
            delay={0.2}
            yOffset={40}
            className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800/90 shadow-xl backdrop-blur-xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Fill out this form and your message will land straight into my primary inbox.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-start gap-3.5 animate-fadeIn">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-base">Message Sent Successfully!</div>
                  <div className="text-sm text-slate-300 mt-1">
                    Thank you for reaching out, Alif will review your message and reply within 24 hours.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label 
                      htmlFor="contact-name"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      <User className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Your Name</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full min-h-[48px] py-3.5 px-4 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all shadow-inner touch-manipulation"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label 
                      htmlFor="contact-email"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Email Address</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full min-h-[48px] py-3.5 px-4 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all shadow-inner touch-manipulation"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label 
                    htmlFor="contact-subject"
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                  >
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Subject</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry, Internship, or Full-Stack Opportunity"
                    className="w-full min-h-[48px] py-3.5 px-4 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all shadow-inner touch-manipulation"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label 
                    htmlFor="contact-message"
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Message</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, deliverables, or team requirements..."
                    className="w-full min-h-[140px] p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none shadow-inner touch-manipulation"
                  />
                </div>

                {/* Submit Button with Touch-Friendly Size */}
                <button
                  type="submit"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 active:scale-95 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 cursor-pointer touch-manipulation select-none"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
