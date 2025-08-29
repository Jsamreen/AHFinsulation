export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              When it comes to insulation, <span className="text-blue-500">we’ve got you covered.</span>
            </h1>
            <p className="mt-4 text-gray-600">
              Professional insulation services in Melbourne. 10+ years experience.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg">Get a Quote</a>
              <a href="tel:+61452275555" className="border px-6 py-3 rounded-lg">Call Now</a>
            </div>
          </div>
          <img src="/hero-placeholder.jpg" alt="Insulation work" className="rounded-xl shadow" />
        </div>
      </section>
    </div>
  );
}
