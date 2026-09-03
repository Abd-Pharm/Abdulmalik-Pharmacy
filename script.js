document.addEventListener('DOMContentLoaded', () => {
  const PHONE = '251984868663';

  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.menu');
  if (menu) menu.addEventListener('click', () => nav.classList.toggle('open'));

  const wa = (message) => window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');

  document.querySelectorAll('[data-whatsapp-message]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      wa(el.dataset.whatsappMessage);
    });
  });

  const rx = document.querySelector('form[data-rx-form]');
  if (rx) rx.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(rx);
    const msg = `Hello Abdulmalik Pharmacy. I would like to request a prescription/refill review.\n\nName: ${d.get('name') || ''}\nDate of birth: ${d.get('dob') || ''}\nRX number (if available): ${d.get('rx') || ''}\nPhone: ${d.get('phone') || ''}\nRequest: ${d.get('details') || ''}\nPreferred response: ${d.get('response') || 'WhatsApp'}\n\nPlease let me know the next step.`;
    wa(msg);
  });

  const consult = document.querySelector('form[data-consult-form]');
  if (consult) consult.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(consult);
    const msg = `Hello Abdulmalik Pharmacy. I would like pharmacist support.\n\nName: ${d.get('name') || ''}\nPhone: ${d.get('phone') || ''}\nTopic: ${d.get('topic') || ''}\nQuestion: ${d.get('question') || ''}\n\nPlease advise on the next step.`;
    wa(msg);
  });

  document.querySelectorAll('[data-category]').forEach(el => {
    el.addEventListener('click', () => {
      const category = el.dataset.category;
      wa(`Hello Abdulmalik Pharmacy. I would like to check availability of products in the ${category} category.`);
    });
  });

  const search = document.querySelector('[data-product-search]');
  if (search) {
    search.addEventListener('submit', e => {
      e.preventDefault();
      const q = search.querySelector('input').value.trim();
      if (q) wa(`Hello Abdulmalik Pharmacy. Please check availability for: ${q}`);
    });
  }
});