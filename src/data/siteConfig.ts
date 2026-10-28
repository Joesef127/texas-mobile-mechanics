export const siteConfig = {
  name: "Texas Mobile Mechanics",
  legalName: "Texas Mobile Mechanics Inc.",
  domain: "https://www.texmm.com",
  phoneDisplay: "817-382-2377",
  phoneHref: "tel:+18173822377",
  smsHref: "sms:+18173822377",
  email: "TexasMobileMechanics@Gmail.com",
  emailHref: "mailto:TexasMobileMechanics@Gmail.com",
  formSubmitEndpoint: "https://formsubmit.co/ajax/TexasMobileMechanics@Gmail.com",
  businessHours: "Monday - Sunday: 9:30am - 12am Midnight",
  businessHoursShort: "Mon–Sun: 9:30am – 12am Midnight",
  addressLabel: "ANY WHERE YOU ARE!",
  streetAddress: "2501 E. Lancaster Ave.",
  city: "Fort Worth",
  region: "TX",
  postalCode: "76103",
  youtubeVideoId: "op5XMLRusjI",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3355.7967301155027!2d-97.2904849!3d32.7445878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e70edbd944579%3A0x9d17d8619d9171af!2sTexas%20Mobile%20Mechanics!5e0!3m2!1sen!2sng!4v1793132387571!5m2!1sen!2sng",
  serviceAreas: [
    "Dallas",
    "Fort Worth",
    "Arlington",
    "Surrounding cities",
  ],
  reviews: {
    yelp: {
      name: "Find us on Yelp",
      url: "https://www.yelp.com/biz/texas-mobile-mechanics-fort-worth-2",
      imageSrc: "/find_us_on_yelp.avif",
    },
    angi: {
      name: "Angie's List",
      url: "https://www.angi.com/companylist/us/tx/fort-worth/texas-mobile-mechanics-reviews-6454329.htm",
      imageSrc: "/angies_list.avif",
    },
  },
  socials: {
    facebook: "https://www.facebook.com/texasmobilemechanic/",
    x: "https://x.com/texasmobilemech",
    instagram: "https://www.instagram.com/texasmobilemechanics/",
  },
} as const;
