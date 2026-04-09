import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Gift,
  Headphones,
  LineChart,
  Radio,
  Search,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";

const BEACONS_I = "https://beacons.ai/i";
const DEMO_FORM = "https://form.typeform.com/to/asCaQ4o6";
const LOGIN_URL =
  "https://account.beacons.ai/signin?originPage=home&cta_location=header&cta_text=log_in&referring_user=direct&referral_type=log_in";
const SIGNUP_URL =
  "https://account.beacons.ai/signup?originPage=home&cta_location=header&cta_text=sign_up&referring_user=direct&referral_type=sign_up";
const REFERRAL_URL =
  "https://beacons.notion.site/Become-a-Beacons-rep-6b71e53086334f94b2c4ea956fd947d3?pvs=4";
const REPORT_VIOLATION_URL =
  "https://beacons.notion.site/2242815a497f8008ab48dd50231339a9";
const HELP_HOME = "https://help.beacons.ai/en";

function beaconsPath(path: string) {
  return `${BEACONS_I}${path.startsWith("/") ? path : `/${path}`}`;
}

const FAQ_QUESTIONS = [
  "What is a creator gifting platform?",
  "Is influencer gifting effective for beauty brands?",
  "Can Beacons be used for paid creator campaigns?",
  "How do beauty brands track ROI from influencer gifting?",
  "How is Beacons different from other influencer marketing tools?",
] as const;

const TESTIMONIALS = [
  {
    quote:
      "Perplexity partners with creators who are deeply curious and gifted storytellers. Together, we bring to life the ways in which Perplexity satisfies curiosities, solves problems, and simplifies lives.",
    name: "Will Brooke",
    title: "Head of Talent Partnership, Perplexity",
  },
  {
    quote:
      "The Beacons brand portal has been such a time saver when it comes to finding quality content creators to work with for our launches!",
    name: "Corsair",
    title: null,
  },
  {
    quote:
      "We’re thrilled to partner with Beacons and their network of engaging, creative, and passionate creators who will bring our products to life in a fun and genuine way",
    name: "Stanley",
    title: null,
  },
  {
    quote:
      "As a pioneer in botanical beauty, Yves Rocher is thrilled to collaborate with Beacons.ai to empower creators who share our passion for sustainability and self-care. We can’t wait to see how their creativity inspires new ways to experience our products",
    name: "Yves Rocher",
    title: null,
  },
  {
    quote:
      "As a champion of local discovery and everyday adventure, Groupon is thrilled to partner with Beacons.ai to empower creators who share our passion for supporting small businesses and unforgettable experiences.",
    name: "Groupon",
    title: null,
  },
  {
    quote:
      "Sur La Table is the place for an unsurpassed selection of exclusive and premium-quality goods for the kitchen and table. We're excited to share our passion for cooking and entertaining with the Beacons.ai network of creators.",
    name: "Sur La Table",
    title: null,
  },
  {
    quote:
      "Beacons replaced the fragmented tools and manual workflows we used before by unifying our creator marketing process into one platform, reducing operational effort while increasing impact. It gives us end-to-end visibility across creators, content, gifting, and outcomes so we can make smarter, data-driven decisions. The team has been a strong partner throughout: responsive, thoughtful, and quick to build based on real brand needs.",
    name: "Lucy",
    title: "Irritated Skin",
  },
  {
    quote:
      "Beacons has been a great extension of our marketing team, helping us streamline and scale creator initiatives. We’ve significantly reduced the time spent building campaigns and onboarding creators, while gaining clearer visibility into what’s working. Their tools have helped us uncover blind spots so we can run more efficient, intentional creator campaigns.",
    name: "Victoria",
    title: "Victoria, Chemist Confessions",
  },
] as const;

export function BrandsLanding() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 font-semibold text-zinc-900"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm font-bold text-white">
              B
            </span>
            <span className="hidden sm:inline">Beacons</span>
          </Link>
          <nav className="hidden items-center gap-1 text-sm text-zinc-600 lg:flex">
            <a
              href="https://home.beacons.ai/"
              className="rounded-md px-2 py-1 hover:bg-zinc-100 hover:text-zinc-900"
            >
              For Creators
            </a>
            <a
              href={beaconsPath("managers")}
              className="rounded-md px-2 py-1 hover:bg-zinc-100 hover:text-zinc-900"
            >
              For Managers
            </a>
            <a
              href={beaconsPath("brands")}
              className="rounded-md px-2 py-1 hover:bg-zinc-100 hover:text-zinc-900"
            >
              For Brands
            </a>
            <a
              href={beaconsPath("pricing")}
              className="rounded-md px-2 py-1 hover:bg-zinc-100 hover:text-zinc-900"
            >
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={LOGIN_URL}
              className="hidden text-sm font-medium text-zinc-700 hover:text-zinc-900 sm:inline"
            >
              Login
            </a>
            <a
              href={SIGNUP_URL}
              className="hidden text-sm font-medium text-zinc-700 hover:text-zinc-900 md:inline"
            >
              Start for free
            </a>
            <a
              href={DEMO_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Get a demo
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-zinc-100 bg-gradient-to-b from-violet-50/80 via-white to-white px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(124,58,237,0.15),transparent)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-violet-700">
              Creator Marketing Platform for Brands
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl sm:leading-[1.1]">
              Turn creator marketing into a scalable growth channel
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-zinc-600">
              Replace creator marketing chaos with a single, clean system. Manage
              creator relationships, scale results, and measure real business
              impact.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={DEMO_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-semibold text-white transition hover:bg-zinc-800 sm:w-auto"
              >
                Get a demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <figure className="mx-auto mt-14 max-w-5xl">
              <div
                className="aspect-[16/10] w-full rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-50 shadow-xl shadow-zinc-200/60"
                role="img"
                aria-label="Business dashboard showing revenue, deals, customer list, growth chart, and new activity."
              />
            </figure>

            <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-zinc-200/80 pt-12 sm:grid-cols-3">
              {[
                { label: "Creators", value: "6M+" },
                { label: "Total reach", value: "40B" },
                { label: "Daily Beacons page views", value: "10M+" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-semibold tabular-nums text-zinc-900 sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-xs font-medium uppercase tracking-wider text-zinc-400">
              Trusted by
            </p>
            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold text-zinc-400">
              {[
                "Perplexity",
                "Corsair",
                "Stanley",
                "Yves Rocher",
                "Groupon",
                "Sur La Table",
              ].map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-100 bg-white px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Turn creator engagement into business impact
            </h2>
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {[
                {
                  icon: Search,
                  title: "Smarter creator sourcing",
                  body: "Go beyond follower counts with audience quality, relevance, and performance insights. Source creators who actually align with your brand.",
                },
                {
                  icon: Gift,
                  title: "Automated gifting operations",
                  body: "Manage end-to-end gifting with a virtual showroom and integrated Shopify workflow to send products without the ops headache.",
                },
                {
                  icon: Users,
                  title: "CRM with social intelligence",
                  body: "Access all your creator relationships data from all campaigns in one place. Now you don't have to guess at top performers—you know.",
                },
                {
                  icon: LineChart,
                  title: "Full funnel measurement",
                  body: "Learn what converts. Bring together creator signals, first party data, and sales in one place to understand what's really driving results.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8"
                >
                  <f.icon className="h-8 w-8 text-violet-600" strokeWidth={1.5} />
                  <h3 className="mt-4 text-xl font-semibold text-zinc-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-zinc-600">{f.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <a
                href={DEMO_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Book a demo
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-100 bg-zinc-50 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Tap into a creator ecosystem for brands, from a trusted name in
              the creator economy
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
              <span className="block">With Beacons, you won&apos;t run out of options.</span>
              <span className="mt-2 block">
                Some creator platforms have quality, some have reach. Beacons has
                both.
              </span>
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={DEMO_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Book a demo
              </a>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
              >
                Start for free
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-100 bg-white px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              <span className="block">Why Brands</span>
              <span className="block">Choose Beacons</span>
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Sparkles, label: "Engaged Creator System" },
                { icon: Share2, label: "Social Intelligence" },
                { icon: Headphones, label: "Concierge Service" },
                { icon: BarChart3, label: "Affiliate Compatible" },
                { icon: Radio, label: "Social Listening" },
                { icon: LineChart, label: "Automated Reporting" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-zinc-50/50 px-5 py-4"
                >
                  <item.icon className="h-6 w-6 shrink-0 text-violet-600" />
                  <span className="font-medium text-zinc-900">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-100 bg-gradient-to-br from-violet-600 to-fuchsia-700 px-4 py-20 text-center text-white sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to scale your creator partnerships with confidence?
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={DEMO_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-violet-700 hover:bg-zinc-100"
              >
                Book a demo
              </a>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/40 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10"
              >
                Start for free
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-100 bg-white px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              <span className="block">What Brand Partners</span>
              <span className="block">Are Saying</span>
            </h2>
            <p className="mt-3 text-center text-zinc-600">
              Real experiences from teams using Beacons to power creator
              campaigns
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <blockquote
                  key={t.name + t.quote.slice(0, 24)}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6"
                >
                  <p className="text-zinc-700">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 space-y-0.5 text-sm text-zinc-500">
                    <div className="font-semibold text-zinc-800">{t.name}</div>
                    {t.title ? <div>{t.title}</div> : null}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-semibold text-zinc-900">
              Frequently Asked Questions
            </h2>
            <ul className="mt-8 space-y-3">
              {FAQ_QUESTIONS.map((q) => (
                <li
                  key={q}
                  className="rounded-xl border border-zinc-200 bg-white px-5 py-4 text-left font-medium text-zinc-900"
                >
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center">
              <a
                href={HELP_HOME}
                className="text-sm font-medium text-violet-700 underline-offset-4 hover:underline"
              >
                Learn more
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-950 px-4 py-14 text-zinc-300 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Learn more
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={beaconsPath("managers")} className="hover:text-white">
                  Beacons for Managers
                </a>
              </li>
              <li>
                <a href={beaconsPath("brands")} className="hover:text-white">
                  Beacons for Brands
                </a>
              </li>
              <li>
                <a href={beaconsPath("pricing")} className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href={beaconsPath("blog")} className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href={REFERRAL_URL} className="hover:text-white">
                  Referral Program
                </a>
              </li>
              <li>
                <a href={beaconsPath("resources")} className="hover:text-white">
                  Resources
                </a>
              </li>
              <li>
                <a
                  href={beaconsPath("brand-resource-center")}
                  className="hover:text-white"
                >
                  Brand Resource Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={beaconsPath("terms-and-conditions")}
                  className="hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://beacons.ai/i/beacons-privacy-policy"
                  className="hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href={beaconsPath("cookie-notice")} className="hover:text-white">
                  Cookie Notice
                </a>
              </li>
              <li>
                <a href={REPORT_VIOLATION_URL} className="hover:text-white">
                  Report Violation
                </a>
              </li>
              <li>
                <a
                  href={beaconsPath("community-standards")}
                  className="hover:text-white"
                >
                  Community Standards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Beacons
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={beaconsPath("about-us")} className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href={beaconsPath("careers")} className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href={HELP_HOME} className="hover:text-white">
                  Help Center
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Creator Tools
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={beaconsPath("app-pages/link-in-bio")}
                  className="hover:text-white"
                >
                  Link in Bio
                </a>
              </li>
              <li>
                <a
                  href={beaconsPath("app-pages/store")}
                  className="hover:text-white"
                >
                  Store
                </a>
              </li>
              <li>
                <a
                  href={beaconsPath("app-pages/email-marketing")}
                  className="hover:text-white"
                >
                  Email Marketing
                </a>
              </li>
              <li>
                <a
                  href={beaconsPath("app-pages/media-kit")}
                  className="hover:text-white"
                >
                  Media Kit
                </a>
              </li>
              <li>
                <a
                  href={beaconsPath("app-pages/income-dashboard")}
                  className="hover:text-white"
                >
                  Income Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-8">
            <div className="flex items-center gap-2 font-semibold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-violet-600 to-fuchsia-600 text-xs font-bold text-white">
                B
              </span>
              Beacons
            </div>
            <div className="text-sm">
              <p className="text-zinc-400">Need help?</p>
              <a
                href="mailto:support@beacons.ai"
                className="mt-1 block font-medium text-white hover:underline"
              >
                support@beacons.ai
              </a>
            </div>
            <p className="text-sm text-zinc-400">
              <a href={HELP_HOME} className="hover:text-white">
                Ask AI about Beacons
              </a>
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-zinc-800 pt-8 text-center text-xs text-zinc-500">
          <Link href="/signin" className="hover:text-zinc-300">
            App sign in (demo)
          </Link>
        </div>
      </footer>
    </div>
  );
}
