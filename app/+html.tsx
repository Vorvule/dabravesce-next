import { ScrollViewStyleReset } from 'expo-router/html';
import { type PropsWithChildren } from 'react';

/**
 * This file is to configure the root HTML for every web page during static rendering.
 * This function only runs in Node.js and do not have access to the DOM or browser APIs.
 */

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang='be'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='color-scheme' content='light dark' />
        <link rel='manifest' href='/manifest.json' />

        {/*
          Disable body scrolling on web to make ScrollView work like native.
          Body scrolling may be useful for mobile web; remove the line to enable it.
        */}
        <ScrollViewStyleReset />

        {/* Using raw CSS styles as an escape-hatch to ensure the background color never flickers in dark-mode. */}
        {/*<style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />*/}
      </head>
      <body>{children}</body>
    </html>
  );
}

// const responsiveBackground = `
// body {
//   background-color: #fff;
// }
// @media (prefers-color-scheme: dark) {
//   body {
//     background-color: #000;
//   }
// }`;
