import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Printing USA - Custom Signs & Banners',
  description: 'Custom signs, banners, and large format printing. Indoor and outdoor signage for businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
