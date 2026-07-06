import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  canonical,
  image = "https://structura-website-mu.vercel.app/og-image.jpg",
  type = "website",
}) {
  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />

      <meta property="og:site_name" content="Structura" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={canonical} />

      <meta property="og:image" content={image} />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
