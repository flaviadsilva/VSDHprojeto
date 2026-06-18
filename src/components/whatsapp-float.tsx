"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5551997026577?text=Olá! Gostaria de falar com um especialista da VSDH.";

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Chat bubble */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="w-72 bg-white rounded-[5px] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">VSDH</p>
                <p className="text-[11px] text-white/70">Normalmente responde em minutos</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 bg-[#e5ddd5]">
              <div className="bg-white p-3 rounded-[5px] rounded-tl-none shadow-sm max-w-[85%]">
                <p className="text-sm text-gray-800 leading-relaxed">
                  Olá! 👋 Como podemos ajudar sua empresa hoje?
                </p>
                <span className="text-[10px] text-gray-400 mt-1 block text-right">agora</span>
              </div>
            </div>

            {/* CTA */}
            <div className="p-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-2.5 rounded-[5px] text-sm font-medium hover:bg-[#20bd5a] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Iniciar conversa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Float button */}
      <motion.button
        onClick={() => setOpen(!open)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <WhatsAppIcon className="w-7 h-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="white" className={className}>
      <path d="M16.004 2.667A13.26 13.26 0 0 0 2.672 15.933a13.16 13.16 0 0 0 1.785 6.613L2.667 29.333l6.987-1.83A13.27 13.27 0 0 0 16.004 29.4 13.27 13.27 0 0 0 29.333 16.067 13.27 13.27 0 0 0 16.004 2.667zm0 24.267a10.83 10.83 0 0 1-5.52-1.507l-.396-.235-4.1 1.075 1.093-3.995-.257-.41a10.78 10.78 0 0 1-1.657-5.729A10.84 10.84 0 0 1 16.004 5.2a10.84 10.84 0 0 1 10.862 10.867 10.84 10.84 0 0 1-10.862 10.867zm5.953-8.133c-.327-.163-1.93-.952-2.23-1.06-.3-.11-.517-.164-.735.163-.217.327-.843 1.06-1.033 1.28-.19.217-.38.245-.707.082-.327-.164-1.38-.509-2.63-1.622-.972-.867-1.628-1.937-1.82-2.264-.19-.327-.02-.504.143-.667.147-.147.327-.381.49-.572.164-.19.218-.327.327-.544.109-.218.055-.409-.027-.572-.082-.164-.735-1.772-1.007-2.427-.265-.636-.535-.55-.735-.56l-.626-.01c-.218 0-.572.082-.871.409-.3.327-1.144 1.117-1.144 2.725s1.171 3.162 1.335 3.38c.163.217 2.305 3.52 5.586 4.937.78.337 1.39.538 1.865.689.784.249 1.497.214 2.06.13.629-.094 1.93-.789 2.203-1.55.272-.762.272-1.415.19-1.55-.081-.136-.3-.218-.626-.381z" />
    </svg>
  );
}
