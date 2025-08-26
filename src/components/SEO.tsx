import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  image = "https://servercanine.com/og-image.jpg",
  url,
  type = "website",
  author = "ServerCanine",
  publishedTime,
  modifiedTime
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = url || `https://servercanine.com${location.pathname}`;
  
  // Default SEO values
  const defaultTitle = "ServerCanine - Affordable Cloud Hosting for Developers & Agencies";
  const defaultDescription = "Affordable cloud hosting solutions 40% cheaper than competitors. Managed hosting with intuitive control panels, automated deployments, and enterprise security.";
  const defaultKeywords = "cloud hosting, web hosting, managed hosting, VPS hosting, dedicated servers, affordable hosting, developer hosting, agency hosting, servercanine";

  const finalTitle = title ? `${title} | ServerCanine` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'en');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph tags
    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('og:description', finalDescription, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'ServerCanine', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@servercanine');
    updateMetaTag('twitter:creator', '@servercanine');
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', image);

    // Article specific tags
    if (type === 'article' && publishedTime) {
      updateMetaTag('article:published_time', publishedTime, true);
      updateMetaTag('article:author', author, true);
    }
    if (modifiedTime) {
      updateMetaTag('article:modified_time', modifiedTime, true);
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === 'article' ? 'Article' : 'WebPage',
      "name": finalTitle,
      "description": finalDescription,
      "url": currentUrl,
      "image": image,
      "author": {
        "@type": "Organization",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "ServerCanine",
        "logo": {
          "@type": "ImageObject",
          "url": "https://servercanine.com/logo.png"
        }
      },
      ...(publishedTime && { "datePublished": publishedTime }),
      ...(modifiedTime && { "dateModified": modifiedTime })
    };

    // Update or create JSON-LD script
    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(structuredData);

  }, [finalTitle, finalDescription, finalKeywords, currentUrl, image, type, author, publishedTime, modifiedTime]);

  return null;
};

export default SEO;
