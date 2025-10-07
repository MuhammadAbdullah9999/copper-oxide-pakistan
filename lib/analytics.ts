// Google Analytics 4 tracking functions

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track contact form submissions
export const trackContactForm = (data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  product?: string;
}) => {
  event({
    action: 'contact_form_submit',
    category: 'Lead',
    label: data.product || 'General Inquiry',
  });
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Contact Form Submission:', data);
  }
};

// Track product page views
export const trackProductView = (productName: string) => {
  event({
    action: 'view_product',
    category: 'Product',
    label: productName,
  });
};

// Track quote requests
export const trackQuoteRequest = (productName: string) => {
  event({
    action: 'request_quote',
    category: 'Conversion',
    label: productName,
  });
};

// Track phone number clicks
export const trackPhoneClick = () => {
  event({
    action: 'phone_click',
    category: 'Contact',
    label: 'Phone Number',
  });
};

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
  event({
    action: 'whatsapp_click',
    category: 'Contact',
    label: 'WhatsApp',
  });
};

// Track email clicks
export const trackEmailClick = () => {
  event({
    action: 'email_click',
    category: 'Contact',
    label: 'Email',
  });
};

// Track blog post reads
export const trackBlogRead = (title: string, timeSpent: number) => {
  event({
    action: 'blog_read',
    category: 'Content',
    label: title,
    value: Math.round(timeSpent),
  });
};

// Track downloads (if you add PDF downloads)
export const trackDownload = (fileName: string) => {
  event({
    action: 'download',
    category: 'Resource',
    label: fileName,
  });
};
