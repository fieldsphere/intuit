export type Story = {
  name: string;
  title: string;
  description: string;
  product: string;
  image: string;
  alt: string;
};

export const valueTabs = [
  {
    label: "Your taxes done right",
    description: "TurboTax combines expert-backed guidance and intuitive tools for confident filing."
  },
  {
    label: "Make financial progress",
    description: "Credit Karma helps members understand options and make the next money move."
  },
  {
    label: "Run your business",
    description: "QuickBooks brings books, payroll, payments, and insights into one operating system."
  },
  {
    label: "Grow your business",
    description: "Mailchimp helps teams reach, convert, and retain customers with smarter marketing."
  }
];

export const segments = [
  {
    label: "Small Businesses",
    heading: "Small Businesses",
    description: "Tools and expert help for books, payroll, payments, marketing, and cash flow, all designed to give owners more time back."
  },
  {
    label: "Individuals",
    heading: "Individuals",
    description: "Tax and money guidance that helps people file smarter, understand their finances, and make confident next moves."
  },
  {
    label: "Mid-Market Businesses",
    heading: "Mid-Market Businesses",
    description: "Connected financial operations, data, and automation for larger teams that need more clarity as they scale."
  }
];

export const customerStories: Story[] = [
  {
    name: "Kris",
    title: "Meet Kris.",
    description: "He and his team handcraft each sauna with care. Having a financial tool that saves them time means they can focus on their craft.",
    product: "QuickBooks",
    image: "https://www.intuit.com/oidam/intuit/ic/en_us/images/h-z/qb-customer-kris-harris-nootka-saunas-photo-20260130-376x252.jpg",
    alt: "Kris Harris, Co-Founder, Nootka Saunas"
  },
  {
    name: "Anna",
    title: "Meet Anna.",
    description: "She compares the quality of her cacao to the grapes of a fine wine.",
    product: "Mailchimp",
    image: "https://www.intuit.com/oidam/intuit/ic/en_us/images/01-g/customer-anna-smallbusiness-photo-icom-20250910-376x252.png",
    alt: "Anna Seear, president and co-founder of Ritual Chocolate"
  },
  {
    name: "Howard",
    title: "Meet Howard.",
    description: "He values community-building, and SMS helps him get timely deals in the hands of his customers just in time for dinner.",
    product: "Mailchimp",
    image: "https://www.intuit.com/oidam/intuit/ic/en_us/images/01-g/customer-howard-hsu-smallbusiness-photo-icom-20250923-376x252.png",
    alt: "Howard Hsu, Co-Founder of Sweet Auburn Barbeque"
  }
];

export const newsCards = [
  {
    category: "Partnership",
    title: "Intuit Financial Intelligence Comes to Claude via Anthropic",
    image: "https://www.intuit.com/oidam/intuit/ic/en_us/images/h-z/intuit-fuse-web-product-screen-784x784.jpg"
  },
  {
    category: "Partnership",
    title: "Intuit and OpenAI partner to revolutionize Financial Intelligence",
    image: "https://www.intuit.com/oidam/intuit/ic/en_us/images/h-z/intuit-oai-partnership-logo-lockup-icom-20251117-396x396.jpg"
  },
  {
    category: "Press",
    title: "Fast Company: Intuit bets big on AI",
    image: "https://www.intuit.com/oidam/intuit/ic/en_us/images/01-g/articles-press-quickbooks-ai-humanexpert-photo-icom-20250919-396x396.png"
  },
  {
    category: "Innovation",
    title: "Meet your virtual team - AI agents and human experts",
    image: "https://www.intuit.com/oidam/intuit/ic/en_us/images/01-g/articles-innovation-aiagent-humanexpert-photo-icom-20250910-396x396.jpg"
  },
  {
    category: "Investors",
    title: "Intuit hosts Investor Day, reaffirms first-quarter and fiscal 2026 guidance"
  },
  {
    category: "Innovation",
    title: "Delivering done-for-you agentic AI experiences for millions of business owners"
  }
];

export const successTogether = [
  {
    title: "Work with us",
    body: "Join teams building products that help millions of people and businesses prosper.",
    href: "https://www.intuit.com/careers/"
  },
  {
    title: "Learn about us",
    body: "See how Intuit uses technology, data, and customer obsession to power prosperity.",
    href: "https://www.intuit.com/company/"
  },
  {
    title: "Build with us",
    body: "Explore partner and developer opportunities across the Intuit ecosystem.",
    href: "https://developer.intuit.com/"
  }
];
