# Mask Reveal System

## Directory Structure
```
/
├── components/
│   ├── Core/       # Primitive components
│   ├── Section/    # Compositional sections (MaskReveal)
│   └── Page/       # Layouts (Home)
├── utils/          # Hooks and logic (useMousePosition)
├── App.tsx         # Main Component
├── constants.ts    # Design Tokens & Config
├── types.ts        # Type Definitions
└── index.tsx       # Entry Point
```

## ELI10 TLDR
This app creates a "magic flashlight" effect. 
- There are two layers of text stacked on top of each other.
- The bottom layer is always there (grey text).
- The top layer is orange but usually invisible.
- We use a "mask" (like a stencil) that follows your mouse.
- Where the mask is, you see the orange layer.
- When you hover over the text, the mask gets bigger!

## Key Systems
1. **Fluid Motion**: Uses Framer Motion `tween` with `backOut` ease for snappy cursor following.
2. **Design Tokens**: Colors and Types are centralized in `constants.ts`.
3. **Reactive**: Mouse position updates state -> triggers re-render of mask position.

## Setup
Built with React 18, TypeScript, Tailwind, and Framer Motion via ESM.