import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';
import { ReactElement } from 'react';

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  // Open Graph & Twitter images need a full URL including domain

  render() : ReactElement {
    return (
      <Html lang="es">
        <Head>
          <script defer src="/animations/menuResonsive.js" />
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
