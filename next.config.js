module.exports = {
  i18n: {
    // These are all the locales we want to support
    locales: ['de', 'fr'],
    // This is the default locale we want to be used when visiting
    // a non-locale prefixed path e.g. '/hello'
    defaultLocale: 'de',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    domains: [
      {
        domain: 'qa.next.de',
        defaultLocale: 'de'
      },
      {
        domain: 'qa.next.fr',
        defaultLocale: 'fr'
      },
      {
        domain: 'local.next.de',
        defaultLocale: 'de'
      },
      {
        domain: 'local.next.fr',
        defaultLocale: 'fr'
      }
    ],
    // When using Domain Routing, if a user with the Accept-Language header fr;q=0.9
    // visits example.com, they will be redirected to example.fr since that domain handles
    // the fr locale by default.
    // When localeDetection is set to false Next.js will no longer automatically redirect
    // based on the user's preferred locale and will only provide locale information detected
    // from the locale based domain.
    localeDetection: false
  },
}