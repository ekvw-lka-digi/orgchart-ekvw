// Possible Keys to validate
//   "title",
//   "creator",
//   "note",
//   "type",
//   "name",
//   "altName",
//   "purpose",
//   "address",
//   "positionType",
//   "salutation",
//   "firstName",
//   "lastName",
//   "telephone",
//   "fax",
//   "email",
//   "website",
//   "street",
//   "housenumber",
//   "building",
//   "room",
//   "zipCode",
//   "city"

export const validationRules = {
  Landeskirchenamt: {
    telephone: {
      pattern: /^\+49 521 /,
      warning:
        'Bielefelder Fesnetznummern müssen wie folgt beginnen: "+49 521 ". z.B.: +49 521 594-0',
    },
    website: {
      pattern: /^https:///,
      warning: 'Webseiten müssen mit "https://" beginnen',
    },
  },
  test: {},

  // Add more rules here for other properties as needed
};
