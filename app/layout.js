import Link from "next/link";
import "./globals.css";
import Head from "./head";
import "./main.css";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";



export const metadata = {
  title: "Smallstore",
  description: "A super cool store for programmers and productivity fiends!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body >
        <div id="portal"/>
        <div id="app">
          <header>
            <div className="header-content">
              <Link href={'/'}>
                <h1>Smallstore</h1>
              </Link>
              
              <h5 className="mid-text">- Cool stuff for cool people -</h5>
              <Cart />
            </div>
            
          </header>

          <main>
            {children}
          </main>

          <div className="hr"/>
          <footer>
            <div className="email-container">
              <h5>Get a sneak peak at new additions to the store, special offers, and so much more.</h5>
              <EmailInput />
            </div>

            <div className="links-container">
              <div>
                <h3>IsmailDEV</h3>
                <Link href={'/'}>Ismail Hub</Link>
                <Link href={'/'}>Roadmap</Link>
              </div>
              <div>
                <h3>Store</h3>
                <Link href={'/'}>Home</Link>
                <Link href={'/cart'}>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link href={'/support/contact'}>Contact</Link>
                <Link href={'/support/FAQ'}>FAQs</Link>
              </div>
            </div>

            <div className="socials">
              <p>© <a href="https://ismailabdumajidov.netlify.app/" target="_blank">Ismail.A</a> 2025 <br /> Built with NextJS</p>
              <div className="social-links">
                <Link href={''} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                <Link href={''} target="_blank"><i className="fa-brands fa-telegram"></i></Link>
                <Link href={''} target="_blank"><i className="fa-brands fa-github"></i></Link>
              </div>
              
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
