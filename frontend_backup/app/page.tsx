export default function Home() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent blur-3xl" />

      <div className="relative">

        <h1 className="text-7xl font-black leading-tight">

          Real-Time

          <br />

          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">

            News Intelligence

          </span>

        </h1>

        <p className="mt-8 text-xl text-gray-400 max-w-3xl">

          AI-powered news clustering, intelligent timeline visualization,
          and real-time global news monitoring.

        </p>

        <div className="mt-10 flex gap-6">

          <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-400">

            Explore News

          </button>

          <button className="rounded-xl border border-white/20 px-8 py-4 hover:bg-white/10">

            Live Timeline

          </button>

        </div>

      </div>

    </section>
  );
}