import React from 'react';

const contacts = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#0A66C2"/><path d="M10.667 13.333h2.666v8h-2.666v-8zm1.333-4a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm3.333 4h2.56v1.093h.037c.356-.675 1.226-1.387 2.523-1.387 2.7 0 3.2 1.776 3.2 4.083v4.211h-2.667v-3.733c0-.89-.016-2.037-1.24-2.037-1.24 0-1.427.968-1.427 1.968v3.802h-2.666v-8z" fill="#fff"/></svg>
    ),
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/pandey-anmol',
    color: 'from-blue-500 via-blue-400 to-cyan-400',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#fff"/><path d="M6 10.667A2.667 2.667 0 018.667 8h14.666A2.667 2.667 0 0126 10.667v10.666A2.667 2.667 0 0123.333 24H8.667A2.667 2.667 0 016 21.333V10.667zm2.667-.667v.217l7.333 5.5 7.333-5.5v-.217H8.667zm14.666 2.05l-6.95 5.217a2 2 0 01-2.426 0l-6.95-5.217V21.333c0 .368.299.667.667.667h14.666a.667.667 0 00.667-.667V12.05z" fill="#06b6d4"/></svg>
    ),
    label: 'Email',
    link: 'mailto:anmolpandey051@gmail.com',
    color: 'from-cyan-400 via-blue-400 to-blue-500',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#18181b"/><path d="M16 6.667c-5.147 0-9.333 4.186-9.333 9.333 0 4.12 2.667 7.613 6.373 8.853.467.08.64-.2.64-.453 0-.227-.008-.827-.013-1.627-2.594.563-3.142-1.25-3.142-1.25-.426-1.08-1.04-1.368-1.04-1.368-.85-.58.064-.569.064-.569.94.066 1.434.966 1.434.966.834 1.43 2.188 1.017 2.72.778.085-.604.326-1.017.593-1.252-2.072-.236-4.25-1.036-4.25-4.613 0-1.018.364-1.85.96-2.5-.096-.236-.416-1.188.092-2.477 0 0 .78-.25 2.56.958a8.93 8.93 0 012.333-.313c.792.004 1.59.107 2.334.313 1.78-1.208 2.56-.958 2.56-.958.508 1.289.188 2.241.092 2.477.598.65.96 1.482.96 2.5 0 3.586-2.182 4.374-4.26 4.606.336.29.634.864.634 1.742 0 1.258-.012 2.273-.012 2.584 0 .256.17.537.646.446C22.67 23.613 25.333 20.12 25.333 16c0-5.147-4.186-9.333-9.333-9.333z" fill="#06b6d4"/></svg>
    ),
    label: 'GitHub',
    link: 'https://github.com/axp8948',
    color: 'from-blue-500 via-blue-400 to-cyan-400',
  },
];

const Contact = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-8 bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
        Contact
      </h2>
      <p className="text-xl md:text-2xl text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        I'm always open to new opportunities, collaborations, or just a friendly chat. Reach out to me through any of the links below!
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {contacts.map((c, idx) => (
          <a
            key={c.label}
            href={c.link}
            target={c.label === 'Email' ? undefined : '_blank'}
            rel="noopener noreferrer"
            className={`group flex flex-col items-center justify-center px-8 py-6 rounded-2xl bg-zinc-800/60 border border-gray-200/30 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_0_rgba(34,211,238,0.35)] hover:ring-2 hover:ring-cyan-400/60 cursor-pointer w-80 min-w-[320px] max-w-[320px]`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="mb-3">{c.icon}</div>
            <span className={`text-2xl font-bold bg-gradient-to-b ${c.color} bg-clip-text text-transparent mb-1`}>{c.label}</span>
            <span className="text-gray-400 text-base break-all select-all text-center">
              {c.label === 'Email' ? 'anmolpandey051@gmail.com' : c.link.replace(/^https:\/\//, '')}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact; 