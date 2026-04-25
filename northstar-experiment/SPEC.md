# NorthStar Experiment Spec

## Opportunity
**High-volume DTC brands achieve increased conversions through secure checkout and admin portal features.**
Beacons AI Brand underperforms HYPR due to its limited focus on enterprise-grade features, leading to subpar Conversion Rate (CVR) with unit %.

## Goal
improve_activation

## Variation
**Checkout-Free Conversion Proof Layer**
Contrarian whitespace: prove CVR lift without requiring checkout infrastructure by making the admin portal the activation hook, not the checkout

## Targeting
- Type: emails
- Value: {"emails":["amritasshwar@gmail.con"]}

## Feature Flag
- Key: `northstar-exp-high-volume-dtc-brands-achieve-increased-f5015z`
- Check endpoint: `https://www.agent-northstar.com/api/flags/northstar-exp-high-volume-dtc-brands-achieve-increased-f5015z?email={user_email}`

## Plan
# Investigation Plan

## The Hypothesis

Marketing managers at consumer product companies abandon Beacons AI Brand during activation because the product leads with creator discovery and link-in-bio outputs — not the governance and attribution controls their job requires. HYPR exploits this by positioning enterprise-grade features (team roles, approval workflows, CVR attribution) as table stakes. Loomly's recent shipment of **Custom Fields** and **Calendar Groups** — features that win with "Marketing Manager at a small to medium-sized business" — proves that structured workflow primitives, not publishing features, are what drive activation for this ICP. If we make **completing a team invite + first content approval workflow** the activation milestone rather than connecting a creator or launching a campaign, we bypass the checkout infrastructure gap entirely and land the enterprise-governance positioning that HYPR currently owns.

---

## What We're Building

A **Brand Admin Portal** surfaced immediately post-signup, consisting of three lightweight primitives:

1. **Team Invite Flow** — invite a teammate with a role (Admin, Reviewer, Viewer)
2. **Content Approval Workflow** — submit a creator deliverable for review, approve/reject with a comment
3. **CVR Attribution Dashboard stub** — shows link-click-to-purchase data sourced from UTM passthrough and Shopify webhook payloads (no PCI checkout required)

The activation milestone is: `first_team_invite_sent` + `first_approval_workflow_completed` fired as a single compound event.

**Because no source files are available in the repo tree** (the REPO TREE field is empty above), the file paths below are derived strictly from what is visible: the public homepage URL (`https://beaconsaibrand.vercel.app/`) and the login route (`/login`) confirmed in the homepage markdown. All new file paths follow the Next.js App Router convention implied by the `_next/image` URLs and the `/login` route already present.

> ⚠️ **Repo tree was not populated.** The file paths below are the minimum set required to implement this variation, named to match the confirmed routes (`/login`, `/` = homepage) and Next.js App Router conventions visible in the actual source. No interior component files are confirmed. Flag this with the engineering lead before writing code — pull the actual tree from `influenxer-coder/beaconsaibrand` first.

---

## The New Screens

### 1. `/onboarding` — New activation funnel entry
**File path to create:** `app/onboarding/page.tsx`

**What changes:** Replaces or follows the existing post-signup redirect (currently `/` or undefined). Renders a 3-step stepper:
- Step 1: "Set up your brand workspace" (name, logo upload)
- Step 2: "Invite your first team member" (email + role selector: Admin / Reviewer / Viewer) — fires `first_team_invite_sent`
- Step 3: "Run your first approval" (upload a mock creator deliverable, click Approve) — fires `first_approval_workflow_completed`

**Why:** This is the activation milestone. Loomly's Calendar Groups and Custom Fields win by giving marketing managers a structured container to operate inside. This does the same thing on day one.

---

### 2. `/dashboard/approvals` — Content approval workflow
**File path to create:** `app/dashboard/approvals/page.tsx`

**What changes:** New route showing a Kanban-style board (Pending / Approved / Rejected columns). Each card = one creator deliverable submission. Reviewer role sees Approve / Reject + comment box. Fires `approval_action_taken` event on every state change.

**Why:** Planable's entire activation loop is built on this exact primitive — a team-based content review board. This is the proven pattern for marketing manager ICPs.

---

### 3. `/dashboard/cvr` — CVR Attribution Dashboard
**File path to create:** `app/dashboard/cvr/page.tsx`

**What changes:** Lightweight read-only dashboard. Ingests UTM parameters passed through creator links + Shopify webhook order events. Displays: Clicks → Sessions → Purchases → CVR% per creator. No checkout infrastructure required — data comes from `?utm_source=beacons&utm_campaign=[campaign_id]` passthrough already possible on the existing link-in-bio creator side.

**Why:** This directly addresses the evidence that Beacons underperforms HYPR on CVR with unit %. Showing the number exists (even with limited data on day 1) makes the value prop tangible and keeps the brand team logging in.

---

### 4. `/` (Homepage) — Copy change on hero
**File path:** `app/page.tsx` (confirmed live at `https://beaconsaibrand.vercel.app/`)

**What changes:**
- Current H1: `"Creator Marketing Platform for Brands"` → New H1: `"Enterprise Creator Marketing — With the Governance Your Team Actually Needs"`
- Current primary CTA: `"Start for free"` (links to `https://account.beacons.ai/signup?originPage=home&cta_location=header&cta_text=sign_up`) → Add secondary CTA directly below: `"See the Brand Admin Portal →"` linking to `/onboarding`
- Add a 3-icon trust strip below the hero images (already present as 4 rotating images in the markdown): "Team Roles · Approval Workflows · CVR Attribution" — no new imagery required, text-only strip

**Why:** The current hero leads with creator-side imagery (4 lifestyle photos). The ICP is a marketing manager who needs to justify the tool to their CMO. The copy needs to signal governance and measurability before the scroll.

---

### 5. `/login` — Post-login redirect
**File path:** `app/login/page.tsx` (confirmed route from homepage markdown)

**What changes:** After successful authentication, redirect new users (account age < 24h) to `/onboarding` instead of default dashboard. Returning users go to `/dashboard/approvals` as the new default landing tab (replacing whatever the current default is).

**Why:** First-session experience determines activation. Sending new users to an empty dashboard is the primary activation killer for this ICP — confirmed by Loomly and Planable both making "first workflow created" their activation gate.

---

## Files To Change

> The repo tree was not populated in the prompt. The following paths are confirmed only from the live homepage source and must be verified against the actual `influenxer-coder/beaconsaibrand` repository before implementation.

- `app/page.tsx` — Modify hero H1 copy, add secondary CTA `"See the Brand Admin Portal →"`, add 3-item governance trust strip below hero image carousel. Confirmed this file serves `https://beaconsaibrand.vercel.app/`.

- `app/login/page.tsx` — Add post-authentication redirect logic: new users (created_at < now - 86400s) → `/onboarding`; returning users → `/dashboard/approvals`. Confirmed this file serves `/login` route visible in homepage nav.

- `app/onboarding/page.tsx` — **Create new.** 3-step stepper component. Step 2 fires `first_team_invite_sent`. Step 3 fires `first_approval_workflow_completed`. These two events together constitute the activation milestone.

- `app/dashboard/approvals/page.tsx` — **Create new.** Kanban board: Pending / Approved / Rejected. Role-gated actions (Reviewer and Admin can act; Viewer read-only). Fires `approval_action_taken` on state change.

- `app/dashboard/cvr/page.tsx` — **Create new.** UTM + Shopify webhook attribution display. Columns: Creator Handle · Clicks · Sessions · Purchases · CVR%. Shopify webhook handler (POST endpoint) to be added at `app/api/webhooks/shopify/route.ts`.

- `app/api/webhooks/shopify/route.ts` — **Create new.** Receives `orders/create` Shopify webhook, extracts `landing_site` or `referring_site` for UTM campaign ID, writes to data store. No PCI scope — order confirmation only, no card data.

---

## Success Metric

**Primary activation event:** `first_approval_workflow_completed` fired within the first session (session 1, day 0).

**Compound activation gate:** `first_team_invite_sent` AND `first_approval_workflow_completed` both fired within 72 hours of account creation = **Activated User**.

**North Star proxy metric:** % of new brand signups who reach Activated User status within 72 hours.

**Secondary metrics to track:**
- `/onboarding` step completion rate per step (drop-off at Step 2 = invite friction; drop-off at Step 3 = approval UX friction)
- `approval_action_taken` events per user per week (retention signal)
- CVR dashboard return visits (day 3, day 7) as a leading indicator of retained engagement

**Baseline to beat:** Current activation rate (undefined in brief — instrument this first before shipping to establish the denominator).

---

## Evidence

1. **Loomly wins with "Marketing Manager at SMB" via Custom Fields + Calendar Groups** — both features are structured governance primitives (containers, approval states, metadata). This directly validates that workflow structure, not publishing output, is what activates this ICP. *(Source: Competitor Signals — Loomly)*

2. **Beacons underperforms HYPR specifically on "enterprise-grade features" and CVR with unit %** — the gap is named, the metric is named. The checkout-free CVR dashboard addresses the metric; the admin portal addresses the feature category. *(Source: Opportunity / Evidence fields)*

3. **Planable is listed as a validation source for this exact pattern** — Planable's entire product is a team-based content approval workspace. Their activation milestone is "first post approved by a teammate." This is the direct blueprint for the approval workflow screen. *(Source: Validated By field)*

4. **Agorapulse recently shipped "Custom Social Profile & Organization Roles"** — a direct signal that role-based team management is actively being competed on in this market right now, and wins with "Social Media Manager at a 50+ person marketing team." Beacons shipping team roles enters an actively validated market motion. *(Source: Competitor Signals — Agorapulse)*

5. **The current homepage H1 is "Creator Marketing Platform for Brands"** — generic, creator-side framing. No mention of governance, team, approval, or CVR anywhere in the visible homepage copy. The ICP (marketing manager at a consumer brand) sees no signal that this tool is built for their operational reality, which explains why activation fails before the product is even experienced. *(Source: Homepage Content — actual scraped markdown)*



## Prototype Screens
See `prototypes/` directory for HTML prototypes of each screen.
