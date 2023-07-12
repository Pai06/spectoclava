// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
// pages/_app.js
import '@/styles/custom.css';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
