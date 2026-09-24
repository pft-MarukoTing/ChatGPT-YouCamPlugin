# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Confirmed: standalone static HTML, CSS, and JavaScript prototype for desktop review. It simulates ChatGPT and the YouCam MCP App surface without production tool integration.

## Users

- A ChatGPT user who explicitly asks to virtually try a makeup Look.
- Perfect Corp product leadership reviewing how YouCam VTO should appear and behave inside ChatGPT.

## Product Purpose

Demonstrate a plausible ChatGPT-to-YouCam VTO flow: the user triggers VTO in conversation, chooses Live Makeup, a sample model, or a photo upload, then switches complete Looks inside the same conversation.

## Operating Context

- Desktop ChatGPT UI is the outer product surface.
- The ChatGPT sidebar can collapse from 260px to a 72px icon rail and expand again without interrupting the try-on flow.
- Proposal 1 is the selected direction. The response follows ChatGPT’s Worked for Ns pattern, gives a conversational analysis of visible facial characteristics, names the recommended Looks and makeup directions, and then identifies the headerless MCP surface as beauty-knowledge. LOOK and MAKEUP are mutually exclusive top-level tabs; makeup may combine one item per category. Apply It (3 Credits) directly prepares a photo-output instruction in the composer, including its 3-credit acknowledgement, so the user remains in control of whether to send it. After Send, ChatGPT returns a concise applied-makeup summary, the simulated result image, and a personalized compliment about the visual effect. Try-on Live is a free secondary action that opens the camera directly in the current MCP surface and exposes only the active LOOK or MAKEUP family.
- The VTO workspace supports expanding into an immersive overlay and closing back to the exact conversation position.
- Live Makeup uses the supplied Live image and retains the capture affordance. Model and Photo paths use the supplied non-Live image and omit capture.

## Capabilities and Constraints

- Responsive down to mobile widths (~375px), mirroring ChatGPT's own breakpoints: desktop (≥1100px), tablet (768–1099px, sidebar auto-collapses to an icon rail), and mobile (<768px, sidebar becomes an off-canvas drawer opened from a header hamburger button).
- No real camera permission or camera stream.
- No image-to-image generation and no modification of the portrait.
- Only one Look or individual makeup product can be active at a time; a new selection replaces the previous selection across categories.
- The current outdoor-wedding conversation recommends three complete Looks plus Lip, Blush, and Eyeliner options after a friendly description of the user’s visible facial characteristics.
- Changing a complete Look or an individual product updates selection state and overlays a short “applied” message on the portrait.
- Demonstrated controls: recommendation multi-selection, direct credit-aware photo instructions in the composer, prepared ChatGPT follow-up messages, direct Live Makeup launch, makeup selection and removal, zoom, comparison, free live capture/download, expand, and close. Proposal 2 and Proposal 3 retain their comparison flows.
- The prototype is a UX artifact, not an implementation of the real YouCam tool or backend.

## Brand Commitments

- Outer shell follows the current ChatGPT desktop UI structure and interaction density.
- VTO workspace closely follows the supplied current YouCam VTO screenshot: dominant portrait canvas, compact Look choices, and pink floating controls anchored at bottom right for the Live Camera state.
- YouCam's light tool UI remains visually distinct from the ChatGPT shell without looking like an unrelated website.

## Evidence on Hand

- Current VTO reference screenshot: `C:/Users/STEVEN~1/AppData/Local/Temp/codex-clipboard-8ed52918-948d-4c95-9853-865ba16a0a46.png`.
- Static portrait approved for use: `C:/Users/steven_weng/Downloads/ai hair sample image.jpg`.
- Current ChatGPT desktop UI inspected on 2026-09-02.

## Product Principles

- Method first, portrait dominant: users choose the preview source before the person becomes the dominant visual surface.
- Chat continuity: opening, expanding, and closing the tool never loses conversational context.
- Tool autonomy without visual conflict: ChatGPT owns the frame; YouCam owns the active workspace.
- Honest simulation: controls demonstrate the intended camera and photo-output states with static prototype imagery; no real camera access, image generation, or portrait modification occurs.
