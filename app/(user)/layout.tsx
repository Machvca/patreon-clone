// "use client";

import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import {Toaster} from "sonner";
import Provider from "@/components/Schematic/SchematicProvider";
import DMButton from "@/components/DMButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Provider>
          <body>
            <Header />
            {children}

            <div className="fixed bottom-4 right-4">
              <DMButton />

            </div>

            <Toaster position="bottom-center" />
          </body>

          <SanityLive />
        </Provider>
      </html>
    </ClerkProvider>
  );
}


