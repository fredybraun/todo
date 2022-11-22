import { Html, Head, Main, NextScript } from 'next/document';

export default function Documento() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <body 
            className='bg-blue-deep-bg'  
            style={{ 
                backgroundImage: `url(/bg-top.png)`,
                backgroundRepeat: 'no-repeat'
            }} >
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}