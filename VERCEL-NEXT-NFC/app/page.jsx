"use client";

import { useMemo, useState } from "react";

const stripePaymentLink = "https://buy.stripe.com/PLAATS-HIER-JE-STRIPE-LINK";
const unitPrice = 49.99;

const money = new Intl.NumberFormat("nl-BE", {
  style: "currency",
  currency: "EUR",
});

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const [toast, setToast] = useState("");
  const total = useMemo(() => money.format(quantity * unitPrice), [quantity]);

  function buy() {
    if (stripePaymentLink.includes("PLAATS-HIER")) {
      setToast("Stripe is nog niet gekoppeld. Vervang de placeholder in app/page.jsx door je eigen Stripe Payment Link.");
      window.setTimeout(() => setToast(""), 4300);
      return;
    }

    const url = new URL(stripePaymentLink);
    url.searchParams.set("quantity", String(quantity));
    window.location.href = url.toString();
  }

  return (
    <>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Cardly NFC">
          <span className="brandMark">C</span>
          <span>Cardly NFC</span>
        </a>
        <nav className="navLinks" aria-label="Navigatie">
          <a href="#product">Product</a>
          <a href="#kwaliteit">Kwaliteit</a>
          <a href="#werking">Werking</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="headerBuy" href="#bestellen">Bestel kaart</a>
      </header>

      <main id="top">
        <section className="hero heroRefined">
          <div className="heroCopy">
            <span className="eyebrow">Premium NFC business card</span>
            <h1>Een luxe digitale visitekaart voor €49,99.</h1>
            <p>
              Cardly NFC is één professioneel NFC-kaartje met een zwarte premium look,
              QR-backup en een digitale contactervaring. Geen stapel papieren kaartjes:
              één kaart die je telkens opnieuw gebruikt.
            </p>
            <div className="heroBuy">
              <a className="primaryAction" href="#bestellen">Bestel 1 kaartje voor €49,99</a>
              <span>Inclusief NFC + QR-design in premium Cardly-stijl.</span>
            </div>
          </div>

          <div className="heroMedia productHeroImage">
            <img src="/assets/cardly-card-only.png" alt="Cardly NFC kaartje voor- en achterkant zonder telefoon" />
            <div className="heroBadge">
              <strong>1 kaartje</strong>
              <span>€49,99 per stuk</span>
            </div>
          </div>
        </section>

        <section className="trustRow" aria-label="Belangrijkste voordelen">
          <div><strong>1 kaart</strong><span>premium NFC kaartje</span></div>
          <div><strong>€49,99</strong><span>per stuk</span></div>
          <div><strong>NFC + QR</strong><span>werkt ook met scan</span></div>
          <div><strong>Reusable</strong><span>blijft opnieuw bruikbaar</span></div>
        </section>

        <section className="section productSection" id="bestellen">
          <div className="productGallery premiumGallery">
            <img src="/assets/cardly-card-only.png" alt="Zwart Cardly NFC kaartje met QR-code en NFC symbool" />
          </div>

          <aside className="buyPanel">
            <span className="kicker">Direct bestellen</span>
            <h2>Cardly NFC kaartje</h2>
            <p className="productIntro">
              Eén luxe zwart NFC-kaartje met moderne Cardly NFC stijl. Ideaal voor ondernemers,
              sales, events, salons, vastgoed, coaches en freelancers.
            </p>

            <div className="priceBlock">
              <strong>€49,99</strong>
              <span>voor 1 kaartje</span>
            </div>

            <div className="included">
              <div><b>Inbegrepen</b><span>1 premium NFC business card</span></div>
              <div><b>Design</b><span>Zwart met Cardly NFC look, QR en NFC-icon</span></div>
              <div><b>Gebruik</b><span>Link naar contactpagina, website, socials of menu</span></div>
            </div>

            <label className="quantity">
              <span>Aantal kaartjes</span>
              <select value={quantity} onChange={(event) => setQuantity(Number(event.target.value))}>
                <option value="1">1 kaartje</option>
                <option value="2">2 kaartjes</option>
                <option value="3">3 kaartjes</option>
                <option value="5">5 kaartjes</option>
                <option value="10">10 kaartjes</option>
              </select>
            </label>

            <div className="totalRow">
              <span>Totaal</span>
              <strong>{total}</strong>
            </div>

            <button className="primaryAction full" onClick={buy}>Bestel via Stripe</button>
            <p className="stripeNote">Plaats je echte Stripe Payment Link in <code>app/page.jsx</code>.</p>
          </aside>
        </section>

        <section className="section split" id="kwaliteit">
          <div className="sectionCopy">
            <span className="kicker">Waarom dit beter verkoopt</span>
            <h2>Professioneel, tastbaar en digitaal tegelijk.</h2>
            <p>
              De kaart ziet eruit als een premium product, maar werkt als een digitale ingang.
              Klanten kunnen tikken via NFC of scannen via QR. Daardoor voelt het modern zonder ingewikkeld te worden.
            </p>
          </div>
          <div className="qualityGrid">
            <article>
              <span>01</span>
              <h3>Premium eerste indruk</h3>
              <p>Donkere kaart, blauwe details en afgeronde hoeken zorgen voor een high-end uitstraling.</p>
            </article>
            <article>
              <span>02</span>
              <h3>NFC en QR samen</h3>
              <p>Als NFC niet gebruikt wordt, kan de QR-code dezelfde bestemming openen.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Voor elke sector</h3>
              <p>Gebruik het voor contactgegevens, afspraken, portfolio, menu, reviews of socials.</p>
            </article>
          </div>
        </section>

        <section className="section steps" id="werking">
          <div className="sectionCopy">
            <span className="kicker">Zo werkt het</span>
            <h2>Eén kaart, altijd je juiste link.</h2>
          </div>
          <div className="stepGrid">
            <article><span>1</span><h3>Kies je link</h3><p>Gebruik je website, contactpagina, digitaal visitekaartje, Instagram, Linktree of afspraakpagina.</p></article>
            <article><span>2</span><h3>Koppel NFC en QR</h3><p>Laat dezelfde bestemming openen via tikken of scannen, zodat elke klant het kan gebruiken.</p></article>
            <article><span>3</span><h3>Gebruik opnieuw</h3><p>Je geeft geen papieren kaartje weg. Je laat mensen tikken of scannen en houdt je kaart bij.</p></article>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="sectionCopy">
            <span className="kicker">Vragen</span>
            <h2>Alles duidelijk voor aankoop.</h2>
          </div>
          <div className="faqList">
            <details open><summary>Is de prijs voor één kaartje?</summary><p>Ja. De prijs is €49,99 voor 1 Cardly NFC kaartje.</p></details>
            <details><summary>Wat krijg ik precies?</summary><p>Je bestelt één premium Cardly NFC kaartje met NFC-functionaliteit en QR-backup.</p></details>
            <details><summary>Kan ik Stripe verbinden?</summary><p>Ja. Vervang de placeholder in <code>app/page.jsx</code> door je eigen Stripe Payment Link.</p></details>
            <details><summary>Wat moet nog voor live verkoop?</summary><p>Voeg je echte levertermijn, retourbeleid, privacybeleid, contactgegevens en algemene voorwaarden toe.</p></details>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Cardly NFC</span>
        <span>1 premium NFC kaartje voor €49,99</span>
      </footer>

      <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">{toast}</div>
    </>
  );
}
