import { WandIcon, PlayIcon, TrendingUp } from "lucide-react";

export const featuresData = [
  {
    icon: <WandIcon className="w-6 h-6" />,
    title: "AI Scripting",
    desc: "Our Gemini-powered engine crafts high-converting scripts tailored to your specific niche and audience.",
  },
  {
    icon: <PlayIcon className="w-6 h-6" />,
    title: "Smart Generation",
    desc: "Instantly transform text into cinematic 4K video ads with dynamic captions and transitions.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Viral Optimization",
    desc: "Automated editing for TikTok, Reels, and Shorts to maximize engagement and watch time.",
  },
];

export const plansData = [
  {
    id: "starter",
    name: "Starter",
    price: "$29",
    desc: "Best for Individual Creators",
    credits: "25 credits",
    features: [
      "25 Credits",
      "720p Export Quality",
      "Standard Gemini AI Scripting",
      "AdGenie Watermark",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$79",
    desc: "Scaling Brands & Agencies",
    credits: "80 credits",
    features: [
      "80 Credits",
      "Unlimited Video Generations",
      "4K Ultra HD Exports",
      'Advanced "Viral" Scripting Engine',
      "No Watermark + Custom Branding",
    ],
    popular: true,
  },
  {
    id: "ultra",
    name: "Enterprise",
    price: "Custom",
    desc: "Large Teams & High Volume",
    credits: "300 credits",
    features: [
      "300 Credits",
      "API Access for bulk automation",
      "Dedicated GPU Rendering",
      "Custom AI Model Fine-tuning",
      "24/7 Priority Support",
    ],
  },
];

export const faqData = [
  {
    question: "Do I own the rights to the AI-generated ads?",
    answer:
      "Yes! Every video generated on a paid plan comes with a full commercial license. You own the content completely for use on any social or ad platform.",
  },
  {
    question: "How long does it take to generate a video?",
    answer:
      "Under 5 seconds. Our Gemini-powered engine renders high-definition, 15-second ads almost instantly so you can test new hooks in real-time.",
  },
  {
    question: "Can I upload my own product images?",
    answer:
      'Definitely. Upload your product photos and the AI will "animate" them into cinematic scenes while maintaining your brand’s specific colors and logos.',
  },
  {
    question: "Are these videos optimized for the Instagram algorithm?",
    answer:
      'Yes. We use proven high-retention hooks and trending styles, ensuring all text stays in the "safe zones" so it\'s never covered by the Instagram UI.',
  },
  {
    question: "Can I edit the script before it renders?",
    answer:
      "Total control. You can tweak the AI-generated script, change the emotional tone, or swap call-to-actions in our editor before hitting the final render.",
  },
];

export const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", url: "#" },
      { name: "Pricing", url: "#" },
      { name: "API Docs", url: "#" },
      { name: "Template Library", url: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "AI Video Guide", url: "#" },
      { name: "Blog", url: "#" },
      { name: "Success Stories", url: "#" },
      { name: "Help Center", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
      { name: "Cookie Policy", url: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Twitter", url: "#" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/usman-ansari-9a1bbb271/",
      },
      { name: "GitHub", url: "https://github.com/ErUsAnsari" },
    ],
  },
];
