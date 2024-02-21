export const metadata = {
  title: "The Study Vista",
  description: "The Study Vista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
