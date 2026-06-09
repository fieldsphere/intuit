export type Product = {
  name: string;
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
  href: string;
  logo: string;
  image: string;
  customerImage: string;
  customerAlt: string;
  accent: "turbo" | "credit" | "quickbooks" | "mailchimp";
  promise: string;
};

export const products: Product[] = [
  {
    name: "TurboTax",
    eyebrow: "TurboTax",
    heading: "Expertise that helps you file smarter",
    body: "Personalized, AI-powered answers in real-time as you file. Dedicated tax experts at the ready to file on your behalf. All the support you need, when you need it.",
    cta: "Go to TurboTax",
    href: "https://turbotax.intuit.com/",
    logo: "/assets/turbotax-logo.svg",
    image: "/assets/product-turbotax.svg",
    customerImage: "https://www.intuit.com/oidam/intuit/ic/en_us/images/h-z/homepage-turbotax-customer-photo-desktop-icom-20251001-286x508.png",
    customerAlt: "TurboTax customer portrait",
    accent: "turbo",
    promise: "Your taxes done right"
  },
  {
    name: "Credit Karma",
    eyebrow: "Credit Karma",
    heading: "Personalized guidance for your next money moves",
    body: "Transform data into financial improvement with custom insights, timely recommendations, and curated offers for your credit, debt, savings, and more.",
    cta: "Go to Credit Karma",
    href: "https://www.creditkarma.com/",
    logo: "/assets/creditkarma-logo.svg",
    image: "/assets/product-creditkarma.svg",
    customerImage: "https://www.intuit.com/oidam/intuit/ic/en_us/images/01-g/homepage-creditkarma-customer-photo-desktop-icom-20250910-286x508.png",
    customerAlt: "Credit Karma customer portrait",
    accent: "credit",
    promise: "Make financial progress"
  },
  {
    name: "QuickBooks",
    eyebrow: "QuickBooks",
    heading: "Everything you need to power your business",
    body: "From books to payments to payroll, you're backed by a team of AI agents and live experts, all in one place. Our platform takes tasks off your plate, helps you make decisions, and powers growth.",
    cta: "Go to QuickBooks",
    href: "https://quickbooks.intuit.com/",
    logo: "/assets/quickbooks-logo.svg",
    image: "/assets/product-quickbooks.svg",
    customerImage: "https://www.intuit.com/oidam/intuit/ic/en_us/images/01-g/homepage-quickbooks-customer-photo-desktop-icom-20250910-286x508.png",
    customerAlt: "QuickBooks customer portrait",
    accent: "quickbooks",
    promise: "Run your business"
  },
  {
    name: "Mailchimp",
    eyebrow: "Mailchimp",
    heading: "Turn your emails and SMS into revenue",
    body: "With AI-backed, personalized marketing, you can create omnichannel campaigns at scale. Drive it all with AI-generated automation flows.",
    cta: "Go to Mailchimp",
    href: "https://mailchimp.com/",
    logo: "/assets/mailchimp-logo.svg",
    image: "/assets/product-mailchimp.svg",
    customerImage: "https://www.intuit.com/oidam/intuit/ic/en_us/images/h-z/homepage-mailchimp-customer-photo-desktop-icom-20250915-286x508.png",
    customerAlt: "Mailchimp customer portrait",
    accent: "mailchimp",
    promise: "Grow your business"
  }
];

export const footerProductLinks = products.map((product) => ({
  label: product.name,
  href: product.href
}));

export const companyLinks = [
  { label: "About Intuit", href: "https://www.intuit.com/company/" },
  { label: "Careers", href: "https://www.intuit.com/careers/" },
  { label: "Press", href: "https://www.intuit.com/company/press-room/" },
  { label: "Investors", href: "https://investors.intuit.com/" }
];

export const legalLinks = [
  { label: "Privacy", href: "https://www.intuit.com/privacy/statement/" },
  { label: "Security", href: "https://security.intuit.com/" },
  { label: "Terms", href: "https://www.intuit.com/legal/" },
  { label: "Accessibility", href: "https://www.intuit.com/accessibility/" }
];
