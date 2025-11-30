import { ThemeMode } from './types';

export const COMPLIANCE_REPORT = {
  activeTiers: ['Tier 1', 'Tier 2', 'Tier 3'],
  summary: {
    tier1: 'Mobile-first, Reactive System, strict component architecture.',
    tier2: 'Semantic tokens, 100ms fluid motion, rounded shape system.',
    tier3: 'Comprehensive documentation and logging.'
  },
  conflicts: 'System Prompt requests avoiding Tailwind but Platform requires it for responsive single-file output.',
  priority: 'Stability -> Performance -> Clarity -> Emotion',
  actionPlan: 'Implement masked reveal effect using Framer Motion and semantic design tokens mapped to Tailwind utilities.'
};

export const TOKENS = {
  Color: {
    Base: {
      Surface: {
        1: 'bg-surface-dark', // #0a0a0a
        2: 'bg-zinc-900',
      },
      Content: {
        1: 'text-content-secondary', // #afa18f
        2: 'text-zinc-500',
      }
    },
    Accent: {
      Surface: {
        1: 'bg-[#ec4e39]',
      },
      Content: {
        1: 'text-black', // Contrast for accent bg
      }
    }
  },
  Type: {
    Expressive: {
      Display: {
        L: 'font-bebas text-5xl md:text-7xl lg:text-8xl leading-[0.9]',
      },
      Quote: {
        M: 'font-comic text-xl italic',
      }
    },
    Readable: {
      Body: {
        M: 'font-inter text-base md:text-lg leading-relaxed',
      }
    }
  },
  Effect: {
    Transition: {
      Base: 'transition-all duration-300 ease-out',
      Fast: 'transition-all duration-100 ease-out',
    }
  }
};

export const MASK_SIZE = {
  default: 40,
  hover: 400
};

// SVG Data URI for the mask shape (Circle)
export const MASK_IMAGE = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='20' fill='black'/%3E%3C/svg%3E")`;
