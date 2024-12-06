import "./globals.css";

export const metadata = {
  title: "Slash",
  description: "a link manager to create your mind library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white p-0 m-0 font-mono">
        {children}
      </body>
    </html>
  );
}
