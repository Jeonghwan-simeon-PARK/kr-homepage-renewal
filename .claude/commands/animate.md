# /animate - Scroll Animation System

Add or update scroll-based animations for HicareNet website elements.

## Usage
```
/animate [element-selector] [animation-type]
/animate .card-grid stagger
/animate #impact-numbers counter
/animate .hero__bg parallax
```

## Available Animation Types

| Type | Effect | Duration | Trigger |
|------|--------|----------|---------|
| fade-up | opacity 0→1, translateY 30→0 | 600ms | scroll into view |
| fade-in | opacity 0→1 | 600ms | scroll into view |
| slide-left | opacity 0→1, translateX -50→0 | 600ms | scroll into view |
| slide-right | opacity 0→1, translateX 50→0 | 600ms | scroll into view |
| scale-in | opacity 0→1, scale 0.9→1 | 500ms | scroll into view |
| counter | number 0→target | 2000ms | scroll into view |
| parallax | translateY linked to scroll | continuous | scroll position |
| stagger | children fade-up with 100ms delay | 600ms each | scroll into view |

## Implementation

### HTML: Add data attributes
```html
<div data-animate="fade-up">Content</div>
<div data-animate="fade-up" data-animate-delay="200">Delayed</div>
<div data-animate="counter" data-count-target="200">0</div>
<div data-animate="stagger">
  <div>Child 1</div>
  <div>Child 2</div>
</div>
```

### CSS: Default hidden + visible states
Located in `css/animations/scroll-reveal.css`. All animated elements start invisible and transition to visible when `.is-visible` class is added.

### JS: IntersectionObserver in `js/animations/scroll-observer.js`
- Observer threshold: 0.15 (15% visible triggers animation)
- One-shot: unobserves after first intersection
- Applies `data-animate-delay` as transition-delay
- Adds `.is-visible` class to trigger CSS transition

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  [data-animate] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

## Process
1. Identify target elements in HTML
2. Add appropriate `data-animate` attribute
3. Verify CSS rules exist in scroll-reveal.css
4. Verify JS observer handles the animation type
5. Test with `prefers-reduced-motion` enabled
