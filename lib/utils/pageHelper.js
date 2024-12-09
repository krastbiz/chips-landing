const BASE_URL = process.env.SITE_BASE_URL

export const getPageCanonical = (url) => <link rel="canonical" href={`${BASE_URL}${url}`}></link>

const JsonLdScript = ({ data }) => {
    const scriptContent = JSON.stringify(data);
    return <script type="application/ld+json">{scriptContent}</script>;
};

export const getPageMetadata = (title, description) => {
    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "E-Tim: Электронные компоненты и модули",
        "url": "https://e-tim.ru",
        "description":
            "Интернет-магазин E-Tim предлагает широкий выбор электронных компонентов, антенн, модулей и датчиков с быстрой доставкой.",
        "keywords": "етим, etim, e-tim, электронные компоненты, антенны, модули, датчики",
    };

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta
                name="keywords"
                content="етим, компоненты, китай, интернет-магазин, е-тим, антенны, wf-fi, модуль, датчики, военная приемка, быстро, etim, e-tim"
            />
            <JsonLdScript data={jsonLdData} />
        </>
    );
};
