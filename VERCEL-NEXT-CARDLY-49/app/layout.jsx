import "./globals.css";

export const metadata = {
  title: "Cardly NFC | Premium NFC kaartje voor €49,99",
  description: "Bestel 1 premium Cardly NFC kaartje voor €49,99.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
