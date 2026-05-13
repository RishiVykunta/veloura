import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '8320187353';
  const message = 'Hi Veloura! I would like to inquire about your collection.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      <MessageCircle size={28} />
      <span className="tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
