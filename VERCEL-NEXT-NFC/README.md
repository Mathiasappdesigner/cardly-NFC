# Cardly NFC Next.js versie

Deze versie is gemaakt om Vercel automatisch te laten herkennen als Next.js project.

Product:

- 1 premium Cardly NFC kaartje
- prijs: €49,99 per kaartje
- productbeeld: kaart-only

Upload naar GitHub met deze bestanden direct bovenaan:

- `app/`
- `public/`
- `package.json`
- `next.config.js`
- `README.md`

In Vercel:

- Framework Preset: Next.js
- Root Directory: leeg laten als deze bestanden in de hoofdmap van de repo staan
- Build Command: `next build`

Stripe aanpassen:

Open `app/page.jsx` en vervang:

```js
const stripePaymentLink = "https://buy.stripe.com/PLAATS-HIER-JE-STRIPE-LINK";
```
