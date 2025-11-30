# LLM Context Instructions

## Codebase Map
- `components/Section/MaskReveal.tsx`: **CRITICAL**. Contains the masking logic.
- `utils/useMousePosition.tsx`: Handles event listeners for mouse/touch.
- `constants.ts`: Modify this to change colors, fonts, or mask size.

## Principles
- **Motion**: Always use `Framer Motion` for interactions.
- **Styling**: Use the `styles` object in components, mapping to Tailwind strings.
- **State**: Keep state local unless shared.
- **Responsiveness**: Mobile-first. Touch events are mapped to mouse events in the hook.

## Future Tasks
- Add "Blend Mode" toggle.
- Add varied mask shapes (Square, Star).
- Implement multi-cursor support for websockets.