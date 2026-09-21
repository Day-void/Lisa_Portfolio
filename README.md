# Lisa Mazhambe — portfolio

A React 19 + Vite single-page portfolio, built from Lisa's PDF deck.
All images were extracted from the original document and live in `public/images`.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## How it's put together

Everything on the page is data. `src/data/portfolio.js` holds the profile,
contact details, skills, and the three case studies. Components receive slices
of that through props and hold no content of their own, so editing the site is
mostly editing one file.

### Components (`src/components/`)

| Component | Props | Job |
| --- | --- | --- |
| `Nav` | `name`, `sections` | Sticky header, marks the section you're in, collapses to a menu on phones |
| `Hero` | `profile`, `onViewWork` | Name set large over the ink portrait |
| `Work` | `projects` | Wraps every case study and owns the shared lightbox |
| `ProjectCase` | `project`, `onOpenImage`, `mediaOffset` | One case study: sticky description beside the work |
| `BeforeAfter` | `before`, `after`, alts, `caption` | Drag-to-compare slider for the Addict signage |
| `Gallery` | `items`, `onOpen`, `offset` | Image grid |
| `Figure` | `item`, `onOpen` | One image with caption |
| `Lightbox` | `item`, `isOpen`, `position`, `total`, handlers | Full-screen viewer |
| `About` | `profile`, `approach` | Intro copy and the four-step method |
| `Skills` / `SkillGroup` | `groups`, `credentials` | Skills, tools, study |
| `Contact` | `contact` | Email, phone, LinkedIn |
| `Footer` | `name`, `location` | Closing line |
| `SectionHeading`, `Tag` | — | Small shared pieces |

### Hooks (`src/hooks/`)

| Hook | Returns | When to use it |
| --- | --- | --- |
| `useScrollSpy(ids)` | active section id | Highlighting nav links while scrolling |
| `useMediaQuery(query)` | boolean | Any behaviour that depends on viewport or motion preference |
| `useLightbox(items)` | `{ item, isOpen, open, close, next, previous }` | Opening a gallery in a viewer, with Esc and arrow keys |
| `useBeforeAfter(startAt)` | `{ containerRef, position, handlers, onKeyDown }` | Pointer-dragging a split between two images |

React's own hooks do the rest: `useState` for open/closed and slider state,
`useEffect` for listeners that need cleaning up, `useMemo` for the flattened
media list, `useCallback` for handlers passed down to children, and `useRef`
for measuring the slider.

## Adding a project

Push a new object into `projects` in `src/data/portfolio.js`, drop the images
into `public/images`, and the gallery, lightbox count, and numbering all follow.
Set `span` on each image to `third`, `half` or `full` to control the grid.
Add `beforeAfter` only when a project has one.
# Lisa_Portfolio
