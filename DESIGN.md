---
name: YouCam VTO in ChatGPT
description: A three-flow YouCam beauty workspace embedded inside a restrained ChatGPT desktop conversation.
colors:
  chat-canvas: "#212121"
  chat-panel: "#181818"
  chat-hover: "#2f2f2f"
  chat-divider: "#343434"
  chat-text: "#ececec"
  chat-muted: "#a8a8a8"
  tool-canvas: "#f7f7f7"
  tool-surface: "#ffffff"
  tool-ink: "#151515"
  tool-muted: "#626262"
  tool-divider: "#d9d9d9"
  youcam-blue: "#03ade2"
  youcam-blue-deep: "#008fbd"
  youcam-live-pink: "#ff2f7d"
  youcam-live-pink-deep: "#db1762"
typography:
  headline:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans TC, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 670
  body:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans TC, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.72
  title:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans TC, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 700
  label:
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans TC, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.06em"
rounded:
  product: "3px"
  compact: "8px"
  control: "9px"
  status: "10px"
  tool: "14px"
  bubble: "20px"
  composer: "26px"
  circle: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "18px"
  xl: "24px"
  section: "32px"
components:
  tool-frame:
    backgroundColor: "{colors.tool-surface}"
    textColor: "{colors.tool-ink}"
    rounded: "{rounded.tool}"
  camera-control:
    backgroundColor: "{colors.youcam-live-pink}"
    textColor: "{colors.tool-surface}"
    rounded: "{rounded.circle}"
    size: "35px"
  category-tab:
    backgroundColor: "transparent"
    textColor: "{colors.tool-ink}"
    typography: "{typography.label}"
    height: "38px"
  category-tab-active:
    backgroundColor: "transparent"
    textColor: "{colors.youcam-blue}"
    typography: "{typography.label}"
    height: "38px"
  product-tile:
    backgroundColor: "#fafafa"
    textColor: "{colors.tool-ink}"
    rounded: "{rounded.product}"
    width: "82px"
  composer:
    backgroundColor: "{colors.chat-hover}"
    textColor: "{colors.chat-muted}"
    rounded: "{rounded.composer}"
    height: "54px"
---

# Design System: YouCam VTO in ChatGPT

## Overview

**Creative North Star: "Choose the Flow, Then Enter the Studio"**

The visual system stages a deliberate handoff between two products without breaking conversational continuity. ChatGPT supplies a dense, quiet charcoal frame; an independent floating setting switches among three prototype flows labeled Proposal 1, Proposal 2, and Proposal 3. Proposal 1 is marked as selected and begins with multi-select recommendations for credit-based photo output plus an optional Live Makeup route. Proposal 2 begins with one Live Makeup action before revealing the full method selector on back, and Proposal 3 asks the user to select one recommended Look or makeup item first. All routes then open the same bright, precise beauty workspace. Once VTO opens, the portrait is the dominant surface and controls stay compact and subordinate.

The interface should feel operational rather than promotional: controls are familiar, labels are literal, and feedback is immediate. The #03ADE2 blue accent identifies the recommendation and photo-output flow, while Live Camera deliberately switches its controls and active selections to YouCam pink. This is a desktop review prototype whose apparent camera and try-on behavior is intentionally simulated.

**Key Characteristics:**

- Dark conversational shell surrounding a clearly bounded light tool.
- A compact dark Try-On selector followed by a portrait-dominant workspace.
- Dense native-feeling controls, restrained color, and short state feedback.
- Clear differences among Live, Model, and Photo paths without persistent technical-status copy.

## Colors

The palette is a high-contrast charcoal-and-white product frame with one saturated #03ADE2 blue signal color.

### Primary

- **YouCam Live Pink:** The Live Camera accent; use it for its toolbar, selected items, focus indication, and applied-state details.
- **YouCam Blue:** The recommendation and photo-output accent outside Live Camera.
- **Deep variants:** Reserved as darker hover and pressed companions to their matching context.

### Neutral

- **Chat Canvas and Panel:** Layered near-black and charcoal surfaces form the outer ChatGPT shell.
- **Chat Text and Muted:** Soft white and medium gray establish readable conversation hierarchy without stark pure-white body copy.
- **Tool Canvas and Surface:** Off-white and white distinguish the YouCam workspace from the host shell.
- **Tool Ink and Muted:** Near-black and middle gray support compact labels, controls, and status copy.
- **Dividers:** Dark separators belong to the host shell; pale gray separators belong to the tool.

**The Contextual Accent Rule.** #03ADE2 blue is the action signal outside Live Camera. Once Live Camera opens, YouCam pink becomes the sole action signal within that workspace. Never mix the two accents inside one active tool state.

**The Two Worlds Rule.** Never flatten the host and tool into one gray theme: the dark ChatGPT frame and light YouCam workspace must remain visibly distinct.

## Typography

**Display Font:** Not used.
**Body Font:** System UI sans-serif, with Segoe UI, Noto Sans TC, Arial, and generic sans-serif fallbacks.
**Label Font:** The same system stack.

**Character:** Neutral and platform-native. Hierarchy comes from compact size, weight, line-height, and case rather than decorative type or font pairing.

### Hierarchy

- **Headline:** Semibold model picker and highest-level shell label.
- **Title:** Compact tool identity and selected product/status names.
- **Body:** Conversation copy and the user message; generous line-height keeps prose readable inside a dense shell.
- **Label:** Tool metadata, category tabs, button copy, and applied-state labels. Uppercase is limited to category and applied-state labels.

**The Native Voice Rule.** Use the system stack throughout. Do not introduce display fonts, beauty-editorial serifs, gradients in text, or oversized marketing typography.

## Layout

The desktop shell (≥1100px) has a 260px sidebar that collapses into a 72px icon rail and a fluid main column. The conversation and fixed composer reclaim the released width as the rail contracts. The centered conversation is capped at 960px and the composer at 760px.

Below 1100px the layout follows ChatGPT's own observed breakpoints. From 768–1099px (tablet) the sidebar automatically stays in its 72px icon-rail state; the manual collapse toggle still works within this range. Below 768px (mobile) the sidebar leaves the grid entirely and becomes a fixed, off-canvas drawer at its full 260px width, opened via a dedicated hamburger button in the header (the in-sidebar collapse toggle is unreachable once the sidebar is off-canvas, so mobile needs its own trigger) and closed via a backdrop tap, Escape, or resizing back above 768px. The conversation, composer, and embedded tool surfaces go edge-to-edge with a small fixed gutter, the portrait stage shortens (460px, then 420px, then 380px below 420px width), and the model-picker grid drops from 6 to 3 columns.

The inline flow sits inside the assistant response after a compact Worked for 6s disclosure, divider, personalized face analysis, and an external YouCam-logo beauty-knowledge tool label. Every embedded MCP surface uses the same 760px width so switching between recommendation, loading, and VTO states does not resize the app. Proposal 1 is the selected direction: its headerless recommendation surface begins with a LOOK / MAKEUP segmented control. LOOK shows three complete Looks directly; MAKEUP expands Lip Color, Blush, and Eyeliner simultaneously in labeled groups, without category tabs or an ALL option. Look and makeup selections are mutually exclusive, while makeup may combine one item per category. Apply It (3 Credits) is the primary photo-output action and immediately prepares a follow-up instruction with an explicit 3-credit acknowledgement in the ChatGPT composer; the user remains in control of sending it and no modal interrupts the selection flow. After Send, the assistant immediately returns a short account of the applied items, a large static simulated result image, and a warm personalized compliment describing how the makeup flatters the user; photo application has no intermediate loading state. Try-on Live sits at the far left as a free add-on and opens the camera directly inside the current MCP flow, without adding another chat instruction or showing a Try-On Experience selector. Proposals 2 and 3 remain available for comparison. The resulting VTO uses a 480px portrait stage, contracting to 460px at viewports up to 1250px. Live Camera has no white product header: an overlaid Back to list control occupies the upper-left and the full-screen control the upper-right. Expansion moves the same tool node into a fixed overlay inset 18px from the viewport; the workspace remains edge-to-edge, swaps the upper-right control to close, and preserves Back to list at upper-left.

Inside the tool, the portrait fills all available space. Four core pink controls form a vertical rail at the bottom-right edge; Live Makeup adds a fifth undo-style control that clears every applied makeup item and Look. The rail and centered Live capture control always sit fully above the product dock so selected content never obscures an action. Proposal 1 Live Makeup locks the bottom dock to the recommendation surface’s last active top-level tab: LOOK reveals only the three complete Looks, while MAKEUP reveals its category row and corresponding items without exposing LOOK. One item can be active per category, and clicking the active item again removes it. Photo output presents the selected result without an editable product dock. Live capture and download are free simulated actions and do not interrupt users with credit messaging. A dark translucent Back to list control sits directly over the portrait at upper-left, opposite the full-screen control, and returns Proposal 1 users to the recommendation list.

All simulated waiting states use the supplied YouCam loading mark recolored to the #03ADE2 accent, centered and rotating clockwise at a constant speed. Camera startup and photo preparation share this treatment instead of showing different progress indicators.

**The Camera-First Rule.** The portrait receives the largest uninterrupted area. Tool chrome must not compete with or substantially cover the face.

## Elevation & Depth

Depth is structural and restrained. The host shell relies mainly on tonal layering and thin dividers; shadows appear on the embedded tool, floating camera controls, transient feedback, composer, and expanded modal where spatial separation is necessary.

### Shadow Vocabulary

- **Tool lift:** A broad, medium shadow separates the white inline workspace from the dark conversation.
- **Floating control:** A short shadow lifts circular controls and shelf arrows above imagery.
- **Transient feedback:** A compact shadow and optional backdrop blur support the apply banner and credit confirmation.
- **Expanded modal:** The strongest shadow is exclusive to the immersive overlay.
- **Camera vignette:** Inset shadows darken image edges subtly without altering the underlying portrait asset.

**The Structural Shadow Rule.** Use shadows to explain layering, not as decoration. Strong elevation belongs only to the expanded tool.

## Shapes

Geometry is compact and gently rounded. The embedded tool uses a 14px frame; icon controls cluster around 8-10px radii; the user bubble uses 20px; and the composer uses a 26px capsule. Camera and capture controls are circular. Product artwork is nearly square with a restrained 3px radius so imagery remains the focus. Borders are one pixel unless selection requires the 2px blue product outline.

**The Compact Curve Rule.** Controls use small, practical radii; reserve circles for icon-only camera actions and the capture affordance.

## Components

### Buttons

- **Shape:** Compact host and tool buttons use 7-10px corners; icon-only camera and composer actions are circular.
- **Color:** Host actions are transparent on charcoal and gain a darker hover fill. Tool actions use pale gray on white, while the four portrait controls use #03ADE2 blue.
- **Hover / Active:** Hover changes the local surface color. Camera buttons compress to 94% on active press.
- **Focus:** All buttons and links receive a visible three-pixel translucent blue focus outline with a three-pixel offset.
- **Iconography:** Inline outline SVGs use rounded caps and joins; decorative SVGs are hidden from assistive technology while each icon-only button has a literal accessible name.

### Cards / Containers

- **Tool frame:** White, clipped, 14px rounded, one-pixel dark border, and structurally elevated above the chat.
- **Look tile:** An 86×112px action with a 79px reference image and one-line name; the expanded version remains compact at 104×128px.
- **Selected product:** The artwork border becomes two-pixel #03ADE2 blue and the surface shifts to a faint blue-tinted white.

### Navigation

- **Chat navigation:** Rows are 40px minimum height with 8-9px corners and tonal hover/active backgrounds.
- **Sidebar toggle:** The existing top icon toggles between the full 260px navigation and a 72px icon rail; accessible labels remain available when visible text is hidden.
- **Makeup categories:** A horizontal 38px tab row uses bold 11px labels. Hover and active states turn blue; active also gains a two-pixel bottom rule.
- **Product shelf:** Horizontal overflow is controlled by edge arrows that scroll 280px per activation. The visible scrollbar is suppressed, but the content remains horizontally scrollable.
- **Flow setting:** A #03ADE2 blue floating control at the lower-left viewport edge sits outside the ChatGPT sidebar structure and switches among Proposal 1, Proposal 2, and Proposal 3. Each option includes a concise English description of its flow; Proposal 1 is the default.
- **Conversation replay:** Changing the prototype flow clears the active tool state, replays the user turn, waits one second, and then reveals the matching assistant response and first-step UI.

### Camera Workspace

- **Portrait:** A user-supplied portrait is embedded as static data and rendered with cover cropping. Zoom only changes CSS scale; the pixels are never edited.
- **Toolbar:** Zoom in, zoom out, compare, and download sit in a blue bottom-right vertical rail. Live adds an undo-style Clear all makeup action above them.
- **Capture:** A centered circular camera affordance appears only in Live Makeup and triggers the simulated capture flash without credit messaging.
- **Compare:** Toggles a labeled dividing overlay; it does not create before/after imagery.
- **Download:** Reports that no image was generated and does not save or modify an asset.

### Feedback and Dialog States

- **Applied banner:** A dark translucent status card enters from above the portrait, remains briefly, and is exposed through a polite live region.
- **Toast:** A compact bottom notification confirms simulated actions through a polite live region.
- **Expanded view:** The tool becomes a labeled modal dialog, the underlying chat becomes inert, body scrolling locks, focus moves to close, Tab is trapped within the tool, Escape/backdrop/close collapse it, and focus returns to expand.
- **Reduced motion:** Animation and smooth scrolling collapse to near-zero duration when the user prefers reduced motion.

## Do's and Don'ts

### Do:

- **Do** preserve the dark-host/light-tool contrast and keep the portrait visually dominant.
- **Do** use #03ADE2 blue only for selection, focus, primary actions, and concise success feedback.
- **Do** label icon-only controls, expose transient feedback politely, trap focus in the expanded dialog, and restore focus on close.
- **Do** distinguish Live, Model, and Photo behavior through the actual controls and supplied imagery.
- **Do** treat the embedded portrait and VTO reference screenshot as static user-supplied source assets.

### Don't:

- **Don't** request camera access, open a camera stream, or imply that camera permission was granted.
- **Don't** generate, retouch, recolor, composite, or otherwise modify the portrait.
- **Don't** present product changes as pixel-level makeup rendering; they update selection state and labels only.
- **Don't** replace the user-supplied portrait or VTO screenshot crops with generated imagery.
- **Don't** diverge from ChatGPT's own observed breakpoints (768px, 1100px) when adjusting responsive behavior; match its sidebar-collapse and off-canvas-drawer pattern rather than inventing a new one.
- **Don't** add ornamental gradients, glass-heavy surfaces, decorative type, or competing accent colors.
