import { MemoryItem, SurpriseGift, WishNote } from '../types';

export const birthdayData = {
  name: 'Nilima Ara',
  bengaliName: 'নীলিমা আরা',
  bengaliGreeting: 'শুভ জন্মদিন, নীলিমা!',
  heroHeadline: 'Happy Birthday, Nilima Ara',
  heroSubtitle:
    'To my dearest best friend from Bangladesh — celebrating your kind heart, your brilliant spirit, and every single memory that makes having you in my life a true blessing.',
  heroTagline: 'October 31 · A Celebration of Timeless Friendship',
  location: 'Bangladesh',

  heroPortrait: '/assets/aistudio/Screenshot_2026-10-31_172300_55328892.png',

  milestones: [
    { label: 'Unforgettable Laughs', value: 'Countless' },
    { label: 'Late Night Talks', value: 'Hundreds' },
    { label: 'Shared Cups of Tea', value: 'Endless' },
    { label: 'Friendship Bond', value: 'Forever' },
  ],

  letter: {
    salutation: 'Dearest Nilima,',
    paragraphs: [
      'Happy, happy birthday! As another year turns, I wanted to take a moment away from all the quick greetings and noise to write you something that comes straight from the heart.',
      'Having you as my best friend has been one of the greatest gifts of my life. There is something so comforting about knowing that no matter how chaotic or busy the world gets, I have someone who truly understands me — someone who can make me laugh with just one look, who listens without judgment, and whose presence feels like home.',
      'From all our candid conversations about life, dreams, and everyday struggles, to the silly jokes and shared playlists, every single memory with you holds a special place in my mind. You carry yourself with such warmth, quiet strength, and genuine kindness that touches everyone around you, even when you do not realize it yourself.',
      'On this birthday, my wish for you is simple but profound: I hope this year brings you peace of mind, good health, exciting new chapters, and the courage to pursue everything your heart secretly desires. You deserve all the beauty and happiness that this life has to offer.',
      'Never forget how cherished, how strong, and how irreplaceable you are to me. Thank you for being my anchor, my confidante, and the truest best friend anyone could ask for.',
      'Enjoy your special day to the fullest, eat all your favorite foods, and remember that I am always in your corner, cheering for you today and every single day that follows.'
    ],
    closing: 'With all my love and warmest prayers,',
    signature: 'Your Best Friend',
    date: 'October 2026',
    postscript: 'P.S. Yes, you still owe me a cup of cha and a proper birthday treat!'
  },

  memories: [
    {
      id: 'mem-1',
      image: '/assets/aistudio/Screenshot_2026-10-31_172300_55328892.png',
      title: 'That Pure, Warm Smile',
      category: 'portraits',
      caption: 'The kind of smile that brightens up even the dullest days. Genuine, gentle, and utterly unforgettable.',
      songInspiration: 'Sweet Melodies & Quiet Sunshine',
      year: '2026'
    },
    {
      id: 'mem-2',
      image: '/assets/aistudio/Screenshot_2026-10-31_172310_05f5d6d9.png',
      title: 'Thoughtful Reverie',
      category: 'aesthetic',
      caption: 'Looking up with those iconic glasses, lost in thoughts and favorite tunes.',
      songInspiration: 'I Thought I Saw Your Face — She & Him',
      year: 'Memories'
    },
    {
      id: 'mem-3',
      image: '/assets/aistudio/Screenshot_2026-10-31_172317_094a8b01.png',
      title: 'Middle of the Night Mood',
      category: 'moments',
      caption: 'Quiet reflections, late night music on loop, and the deep thoughts that only true friends share.',
      songInspiration: 'Middle of the Night — Elley Duhé',
      year: 'Late Nights'
    },
    {
      id: 'mem-4',
      image: '/assets/aistudio/Screenshot_2026-10-31_172337_07f4735f.png',
      title: 'Traditional Grace & Poise',
      category: 'traditional',
      caption: 'Classic Bengali charm draped in warmth. That poise and graceful confidence that stands out effortlessly.',
      songInspiration: 'Confess — Acoustic Rhythms',
      year: 'Grace'
    },
    {
      id: 'mem-5',
      image: '/assets/aistudio/Screenshot_2026-10-31_172344_5f5d6df0.png',
      title: 'Subtle Warmth & Radiance',
      category: 'moments',
      caption: 'A quiet, calm expression with an understated charm. Celebrating the authentic, wonderful person you are.',
      songInspiration: 'Tera Mera Hai Pyar — Soft Beats',
      year: 'Moments'
    },
    {
      id: 'mem-6',
      image: '/assets/aistudio/Screenshot_2026-10-31_172358_d97fecbd.png',
      title: 'Vintage Monochrome Icon',
      category: 'aesthetic',
      caption: 'A timeless black and white capture with oversized frames. Pure artistic soul and style.',
      songInspiration: 'Retro Vinyl & Timeless Vows',
      year: 'Classic'
    }
  ] as MemoryItem[],

  gifts: [
    {
      id: 'gift-1',
      title: 'The 3:00 AM Crisis Hotline',
      description: 'Zero judgment, zero time limits. Call, text, or rant about anything under the sun at any hour.',
      iconName: 'PhoneCall',
      badge: '24/7 Access',
      code: 'NILIMA-HOTLINE-24X7'
    },
    {
      id: 'gift-2',
      title: 'Dhaka Street Food & Cha Treat',
      description: 'An all-you-can-eat feast: fuchka, biryani, jhalmuri, and endless steaming cups of cha on me.',
      iconName: 'Coffee',
      badge: 'All-Inclusive',
      code: 'CHA-BIRYAN-PASS'
    },
    {
      id: 'gift-3',
      title: 'Emergency Bad-Vibe Shield',
      description: 'Whenever life gets stressful or people get exhausting, activate this to deploy best friend backup.',
      iconName: 'Shield',
      badge: 'Permanent',
      code: 'VIBE-SHIELD-100'
    },
    {
      id: 'gift-4',
      title: 'Movie & Rant Session Pass',
      description: 'A cozy evening of watching our favorite shows, complaining about the world, and laughing endlessly.',
      iconName: 'Film',
      badge: 'Unconditional',
      code: 'CHILL-SESSION-PASS'
    },
    {
      id: 'gift-5',
      title: 'Lifetime Best Friend Warranty',
      description: 'Guaranteed loyalty, support, and friendship through every triumph, hiccup, and celebration in life.',
      iconName: 'HeartHandshake',
      badge: 'Non-Expiring',
      code: 'BESTIES-FOREVER'
    }
  ] as SurpriseGift[],

  wishes: [
    {
      id: 'w-1',
      author: 'Your Best Friend',
      text: 'May your smile stay just as bright and heartwarming all year round. Happy Birthday, Nilima!',
      timestamp: 'Today · 12:00 AM',
      color: 'bg-[#FDFBF7] border-[#EADFD4]'
    },
    {
      id: 'w-2',
      author: 'From Bangladesh with Love',
      text: 'Wishing you health, endless peace, and immense success in everything you touch. শুভ জন্মদিন!',
      timestamp: 'Today · 12:01 AM',
      color: 'bg-[#FBF8F3] border-[#E5D7C7]'
    },
    {
      id: 'w-3',
      author: 'The Best Friend Squad',
      text: 'Here is to another year of inside jokes, music recommendations, and memories that last a lifetime.',
      timestamp: 'Today · 12:05 AM',
      color: 'bg-[#F8F9F6] border-[#DCE4D6]'
    }
  ] as WishNote[]
};
