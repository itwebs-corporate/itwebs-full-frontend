'use client';

import Script from 'next/script';

const METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA;

export default function YandexMetrika() {
  if (!METRIKA_ID) return null;

  return (
    <Script id="yandex-metrika" strategy="afterInteractive">
      {`
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          k=e.createElement(t),a=e.getElementsByTagName(t)[0];
          k.async=1;k.src=r;a.parentNode.insertBefore(k,a);
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(${METRIKA_ID}, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });
      `}
    </Script>
  );
}
