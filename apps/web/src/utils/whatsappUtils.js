export const generateWhatsAppLink = (capName) => {
  const phoneNumber = '573173450261';
  const message = `Hola, me interesa la gorra ${capName}`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const openWhatsAppChat = (capName) => {
  const url = generateWhatsAppLink(capName);
  window.open(url, '_blank', 'noopener,noreferrer');
};
