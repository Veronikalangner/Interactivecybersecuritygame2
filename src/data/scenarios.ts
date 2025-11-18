import { Scenario } from '../types/game';

export const scenarios: Scenario[] = [
  {
    id: 1,
    type: 'swipe',
    title: "The Public WiFi Dilemma",
    description: "You're at a café and need to check your bank account. The free WiFi looks tempting...",
    image: "cafe wifi",
    leftAction: {
      label: "Use Public WiFi",
      isCorrect: false,
      feedback: "Risky Move!",
      explanation: "Public WiFi networks are often unsecured. Hackers can intercept your data, including passwords and financial information. Always use a VPN or your mobile data for sensitive activities."
    },
    rightAction: {
      label: "Use Mobile Data",
      isCorrect: true,
      feedback: "Smart Choice!",
      explanation: "Using your mobile data creates a secure connection that's much harder for hackers to intercept. Great thinking!"
    },
    category: "Network Security",
    storyContext: "Your friend Alex's troubles started with a public WiFi connection. Will you make a different choice?"
  },
  {
    id: 2,
    type: 'info',
    title: "The Guardian's First Lesson",
    content: "Before you continue, remember: cybercriminals prey on trust and urgency. They create scenarios that make you act without thinking.",
    tip: "Always pause and think: 'Does this make sense?' before taking action online.",
    image: "cyber education",
    category: "Security Mindset",
    storyContext: "The Council shares their wisdom with you..."
  },
  {
    id: 3,
    type: 'swipe',
    title: "The Suspicious Email",
    description: "You received an email saying you won a prize! It asks you to click a link and enter your details.",
    image: "email phishing",
    leftAction: {
      label: "Click the Link",
      isCorrect: false,
      feedback: "Phishing Alert!",
      explanation: "This is a classic phishing attempt. Legitimate companies don't ask for personal information via email links. Always verify by contacting the company directly through their official website."
    },
    rightAction: {
      label: "Delete & Report",
      isCorrect: true,
      feedback: "Excellent!",
      explanation: "You avoided a phishing scam! Always be suspicious of unsolicited emails asking for personal information or offering prizes you didn't enter to win."
    },
    category: "Phishing",
    storyContext: "This is exactly how Alex lost their accounts. Can you recognize the trap?"
  },
  {
    id: 4,
    type: 'quiz',
    title: "Password Strength Challenge",
    question: "Which of these passwords would take the LONGEST for a hacker to crack?",
    image: "password quiz",
    options: [
      {
        text: "password123",
        isCorrect: false,
        explanation: "This would be cracked in less than a second! It's one of the most common passwords."
      },
      {
        text: "JohnSmith1990",
        isCorrect: false,
        explanation: "Personal information like names and birth years are easy to guess or find on social media."
      },
      {
        text: "Tr0ub4dor&3",
        isCorrect: false,
        explanation: "Better, but predictable patterns and common substitutions (0 for o) are in hacker databases."
      },
      {
        text: "correct-horse-battery-staple",
        isCorrect: true,
        explanation: "Random words strung together create length and complexity! This would take centuries to crack. Even better with symbols: correct-horse-battery-staple!"
      }
    ],
    category: "Authentication",
    storyContext: "The Council tests your knowledge of password protection..."
  },
  {
    id: 5,
    type: 'swipe',
    title: "The USB Drive Mystery",
    description: "You found a USB drive in the parking lot. What do you do?",
    image: "usb drive",
    leftAction: {
      label: "Plug it in to see what's on it",
      isCorrect: false,
      feedback: "Danger Zone!",
      explanation: "Unknown USB drives can contain malware that automatically installs when plugged in. This is a common attack vector. Never plug in unknown devices!"
    },
    rightAction: {
      label: "Turn it in to security",
      isCorrect: true,
      feedback: "Safety First!",
      explanation: "Perfect choice! Unknown USB drives can be weaponized with malware. Always turn found devices in to security or IT staff who can safely examine them."
    },
    category: "Physical Security",
    storyContext: "A test from the Council. Physical security is just as important as digital..."
  },
  {
    id: 6,
    type: 'info',
    title: "Social Engineering Uncovered",
    content: "Social engineering is the art of manipulating people into giving up confidential information. Hackers use psychology, not just technology. They exploit emotions like fear, curiosity, greed, and urgency.",
    tip: "If something creates a strong emotional response (panic, excitement), that's your red flag to slow down and verify!",
    image: "social engineering",
    category: "Social Engineering",
    storyContext: "The Council reveals the most dangerous weapon hackers use: human emotion..."
  },
  {
    id: 7,
    type: 'quiz',
    title: "Two-Factor Authentication Quiz",
    question: "What is the BEST type of two-factor authentication (2FA)?",
    image: "2fa quiz",
    options: [
      {
        text: "SMS text message codes",
        isCorrect: false,
        explanation: "SMS is better than nothing, but it can be intercepted through SIM swapping attacks."
      },
      {
        text: "Email codes",
        isCorrect: false,
        explanation: "If your email is compromised, your 2FA is compromised. It's the weakest form of 2FA."
      },
      {
        text: "Authenticator app (like Google Authenticator)",
        isCorrect: true,
        explanation: "Authenticator apps generate time-based codes offline, making them very secure and immune to interception!"
      },
      {
        text: "No 2FA needed if password is strong",
        isCorrect: false,
        explanation: "Even strong passwords can be compromised through data breaches or keyloggers. Always use 2FA!"
      }
    ],
    category: "Authentication",
    storyContext: "Your training intensifies. The Council wants to ensure you understand advanced defenses..."
  },
  {
    id: 8,
    type: 'swipe',
    title: "The Urgent Text",
    description: "You get a text claiming to be from your bank about suspicious activity. It includes a link to 'verify your account.'",
    image: "phone security",
    leftAction: {
      label: "Click the link",
      isCorrect: false,
      feedback: "Smishing Trap!",
      explanation: "This is 'smishing' - SMS phishing. Banks never ask you to verify accounts via text links. Always call your bank directly using the number on your card or their official website."
    },
    rightAction: {
      label: "Call bank directly",
      isCorrect: true,
      feedback: "Brilliant!",
      explanation: "You spotted a smishing attempt! Always verify urgent requests by contacting the organization directly through official channels, not through links in messages."
    },
    category: "Phishing",
    storyContext: "A sophisticated attack! The dark forces are testing your resolve..."
  },
  {
    id: 9,
    type: 'info',
    title: "The Privacy Principle",
    content: "Every app, website, and service collects data about you. Your digital footprint is permanent. Once information is online, it's nearly impossible to completely remove.",
    tip: "Before sharing anything online, ask: 'Would I be comfortable with this being public forever?' If not, don't share it!",
    image: "privacy concept",
    category: "Privacy",
    storyContext: "The Council shares the sacred principle of digital privacy..."
  },
  {
    id: 10,
    type: 'swipe',
    title: "Data Breach Alert",
    description: "You receive a notification that a website you use has been breached and passwords were exposed.",
    image: "data breach",
    leftAction: {
      label: "Do nothing if account seems fine",
      isCorrect: false,
      feedback: "Hidden Danger!",
      explanation: "Exposed credentials are often sold on the dark web and used months later. Change your password immediately, and check if you used the same password elsewhere!"
    },
    rightAction: {
      label: "Change password immediately",
      isCorrect: true,
      feedback: "Cyber Security Master!",
      explanation: "Perfect response! Change your password right away, enable 2FA if available, and monitor for suspicious activity. If you used this password elsewhere, change those too!"
    },
    category: "Incident Response",
    storyContext: "Your final trial. How you respond to a breach determines if you're ready to be a true Guardian..."
  }
];
