import { DiscordLogoIcon } from "@lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-[#0a0e1a] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-black text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          About Elisium
        </h1>
        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Origins & Vision</h2>
            <p>
              Elisium.lol was founded by hegof around 2023–2024 with a simple idea: to create the most advanced and reliable mobile script experience.<br />
              What started as a project mainly centered around Da Hood quickly evolved into a full scale script used by thousands of players across multiple games.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Growth & Evolution</h2>
            <p>
              Over the years, Elisium has gone through countless updates, improvements, and innovations.<br />
              We have expanded from a single-game focus to supporting a variety of titles, ensuring that our users always have access to powerful features, stable performance, and an easy-to-use interface.<br />
              Elisium is now one of the most recognized and widely used mobile scripts in the community.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Accessibility & Pricing</h2>
            <p>
              We’ve always kept Elisium affordable and accessible.<br />
              A whitelist currently costs only:<br />
              • 500 Robux<br />
              • $6 USD<br /><br />
              This makes Elisium not only powerful but also one of the best-value scripts available.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Community & Support</h2>
            <p>
              The Elisium community has played a huge role in our success.<br />
              From early supporters who believed in the project from the start, to the thousands of new users discovering it today — every single one of you has helped us grow.<br />
              Your feedback, loyalty, and trust are what drive us to keep improving and delivering new features.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Looking Ahead</h2>
            <p>
              Elisium’s journey is far from over.<br />
              We will continue expanding to more games, enhancing performance, and introducing new functions that raise the standard for mobile scripts.<br />
              Our mission is clear: to remain the best choice for players who demand quality, reliability, and innovation.
            </p>
          </section>

          <section className="text-center py-12">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">Final Note</h2>
            <p className="text-xl">
              To everyone who has supported Elisium since day one — thank you.<br />
              Together, we’ve built something extraordinary, and the future promises even greater things.
            </p>
            <a
              href="https://discord.gg/elisium"
              className="inline-flex items-center gap-3 mt-10 bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 rounded-xl text-xl font-bold hover:scale-110 transition"
            >
              <DiscordLogoIcon size={28} />
              Join the Community
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}