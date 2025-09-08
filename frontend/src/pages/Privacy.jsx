import React from "react";

export default function Privacy() {
  const updated = new Date().toLocaleDateString();

  const Section = ({ id, title, children }) => (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-10 mb-4">{title}</h2>
      <div className="text-brand-navy/90 leading-7">{children}</div>
    </section>
  );

  const TocItem = ({ href, label }) => (
    <a
      href={href}
      className="block px-3 py-2 rounded-lg text-sm text-brand-navy/80 hover:text-brand-navy hover:bg-brand-mist transition"
    >
      {label}
    </a>
  );

  return (
    <main className="bg-white">
      {/* HERO */}
      <header className="bg-brand-navy text-white">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">Privacy Notice</h1>
          <p className="mt-2 text-white/80">Last updated: {updated}</p>
        </div>
      </header>

      {/* CONTENT */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* TOC */}
          <aside className="lg:col-span-4 lg:pr-6">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="px-5 py-4 border-b border-gray-100">
                <h3 className="text-base font-semibold text-brand-navy">On this page</h3>
              </div>
              <nav className="p-3">
                <TocItem href="#who-we-are" label="Who we are" />
                <TocItem href="#scope" label="Scope & laws we follow" />
                <TocItem href="#info-we-collect" label="Information we collect" />
                <TocItem href="#how-we-collect" label="How we collect it" />
                <TocItem href="#how-we-use" label="How we use it" />
                <TocItem href="#marketing" label="Direct marketing" />
                <TocItem href="#cookies" label="Cookies & analytics" />
                <TocItem href="#sharing" label="Sharing & overseas disclosure" />
                <TocItem href="#security" label="Storage & security" />
                <TocItem href="#access" label="Access & correction" />
                <TocItem href="#retention" label="Retention" />
                <TocItem href="#children" label="Children" />
                <TocItem href="#complaints" label="Questions & complaints" />
                <TocItem href="#changes" label="Changes to this notice" />
              </nav>
            </div>
          </aside>

          {/* BODY */}
          <article className="lg:col-span-8">
            <Section id="who-we-are" title="Who we are">
              <p>
                <strong>AHF Insulation</strong> (“we”, “us”, “our”) provides residential and
                commercial insulation services in Victoria, Australia. You can contact us at{" "}
                <a className="text-brand-blue underline" href="mailto:info@ahfinsulation.com">
                  info@ahfinsulation.com
                </a>{" "}
                or 0452&nbsp;275&nbsp;255. Address: Unit&nbsp;19, 2&nbsp;Fastline&nbsp;Dr,
                Truganina VIC&nbsp;3029.
              </p>
            </Section>

            <Section id="scope" title="Scope & laws we follow">
              <p className="mb-3">
                This notice explains how we handle personal information in connection with our
                website and services. We aim to handle personal information in line with the{" "}
                <strong>Privacy Act 1988 (Cth)</strong> and the{" "}
                <strong>Australian Privacy Principles (APPs)</strong>. We also consider other
                relevant Australian laws, including the <em>Spam Act 2003</em>.
              </p>
              <p className="text-sm text-brand-navy/70">
                Note: Some small businesses are exempt from the Privacy Act. Even if an exemption
                applies, we choose to follow the APPs as good practice.
              </p>
            </Section>

            <Section id="info-we-collect" title="Information we collect">
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact details (name, email, phone, suburb/postcode).</li>
                <li>Project details (property type, rooms/areas, timing, budget, notes).</li>
                <li>Communications with us (emails, messages, call notes).</li>
                <li>
                  Technical data when you visit our site (IP address, device/browser info, pages
                  visited) for security and performance.
                </li>
                <li>
                  If you apply for a role: CV/resume information you provide (handled separately to
                  service enquiries).
                </li>
              </ul>
            </Section>

            <Section id="how-we-collect" title="How we collect it">
              <ul className="list-disc pl-6 space-y-2">
                <li>Information you submit in our forms or provide over phone/email.</li>
                <li>
                  Information we create during quoting, scheduling, installation and after-sales
                  support.
                </li>
                <li>
                  Limited website analytics and logs captured automatically to keep the service
                  secure and reliable.
                </li>
              </ul>
            </Section>

            <Section id="how-we-use" title="How we use it">
              <ul className="list-disc pl-6 space-y-2">
                <li>Responding to enquiries and providing quotes.</li>
                <li>Scheduling, delivering and invoicing for services.</li>
                <li>Improving our products, website and customer experience.</li>
                <li>Meeting legal, insurance and record-keeping requirements.</li>
              </ul>
            </Section>

            <Section id="marketing" title="Direct marketing">
              <p>
                We may send service updates or offers that are relevant to you. You can opt out at
                any time using the unsubscribe instructions in the message or by emailing{" "}
                <a className="text-brand-blue underline" href="mailto:info@ahfinsulation.com">
                  info@ahfinsulation.com
                </a>
                .
              </p>
            </Section>

            <Section id="cookies" title="Cookies & analytics">
              <p className="mb-3">
                Our site may use essential cookies and similar technologies to operate the service
                and optional analytics to understand performance (e.g., page load times, pages
                visited). If we implement third-party analytics or advertising cookies, we will
                update this notice and, where required, request your consent.
              </p>
              <p className="text-sm text-brand-navy/70">
                Example providers we may use include website hosting (e.g., Vercel), email services
                (e.g., Microsoft 365 or Google Workspace) and analytics (e.g., Google Analytics).
              </p>
            </Section>

            <Section id="sharing" title="Sharing & overseas disclosure">
              <p className="mb-3">
                We don’t sell your personal information. We may share limited information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>
                  Service providers who help us run our business (website hosting, email, job
                  management, analytics) under confidentiality agreements.
                </li>
                <li>Installers/contractors where needed to quote and perform the work.</li>
                <li>Regulators, insurers, or advisers where disclosure is required by law.</li>
              </ul>
              <p>
                Some providers may store information outside Australia. Where this occurs, we take
                reasonable steps to ensure appropriate safeguards are in place.
              </p>
            </Section>

            <Section id="security" title="Storage & security">
              <p>
                We use reasonable technical and organisational measures to protect personal
                information against unauthorised access, alteration or disclosure. No system is
                perfectly secure; please contact us if you believe your information has been
                compromised.
              </p>
            </Section>

            <Section id="access" title="Access & correction">
              <p className="mb-3">
                You can request access to the personal information we hold about you and ask us to
                correct it if inaccurate, out of date or incomplete. We’ll respond within a
                reasonable time.
              </p>
              <p>
                Contact:{" "}
                <a className="text-brand-blue underline" href="mailto:info@ahfinsulation.com">
                  info@ahfinsulation.com
                </a>{" "}
                or 0452&nbsp;275&nbsp;255.
              </p>
            </Section>

            <Section id="retention" title="Retention">
              <p>
                We keep personal information only as long as needed for the purposes described
                above and as required by law (e.g., tax and insurance). We then securely delete or
                de-identify it.
              </p>
            </Section>

            <Section id="children" title="Children">
              <p>
                Our services are intended for adults. If you believe a child has provided us
                personal information without a parent/guardian’s consent, please contact us and we
                will take appropriate steps.
              </p>
            </Section>

            <Section id="complaints" title="Questions & complaints">
              <p className="mb-3">
                If you have a privacy question or complaint, please contact us first so we can try
                to resolve it quickly:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>
                  Email:{" "}
                  <a className="text-brand-blue underline" href="mailto:info@ahfinsulation.com">
                    info@ahfinsulation.com
                  </a>
                </li>
                <li>Phone: 0452&nbsp;275&nbsp;255</li>
                <li>
                  Address: Unit 19, 2 Fastline Dr, Truganina VIC 3029
                </li>
              </ul>
              <p>
                If you are not satisfied with our response, you can contact the{" "}
                <a
                  className="text-brand-blue underline"
                  href="https://www.oaic.gov.au/privacy/privacy-complaints"
                  target="_blank"
                  rel="noreferrer"
                >
                  Office of the Australian Information Commissioner (OAIC)
                </a>
                .
              </p>
            </Section>

            <Section id="changes" title="Changes to this notice">
              <p>
                We may update this Privacy Notice from time to time. The “Last updated” date at the
                top shows when changes were made. Significant changes will be highlighted on this
                page.
              </p>
            </Section>

            <div className="mt-10 p-4 rounded-xl bg-brand-mist text-sm text-brand-navy/80">
              <strong>Disclaimer:</strong> This notice is a general template provided for your
              convenience and does not constitute legal advice. Please obtain independent legal
              advice to ensure compliance with your specific obligations.
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
