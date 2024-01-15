import './base.css'
import './main.css'
import './vendor.css'

export const metadata = {
  title: 'mvcdev.net',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="js">
      <body>{children}</body>
    </html>
  )
}
