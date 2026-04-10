import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Medicina Estelar - Terapia hoística y espiritual" />
          <meta name="keywords" content="medicina estelar, terapia, bienestar, energía" />
          <meta name="author" content="Medicina Estelar" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
