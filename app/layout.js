import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PlaceProvider } from "./context/PlaceContext";
import { AuthProvider } from "./context/AuthContext";





export const metadata = {
  title: "Queue App",
  description: "Queue App",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <AuthProvider>
          <PlaceProvider>
            {children}
          </PlaceProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
