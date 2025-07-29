export type Area = {
  alt: string;
  title: string;
  href: string;
  coords: string;
  shape: "rect" | "circle" | "poly";
};

export const areas: Area[] = [
  {
    alt: "CSA (Cloud Security Alliance)",
    title: "CSA (Cloud Security Alliance)",
    href: "/ig-required-memberships-csa-cloud-security-alliance",
    coords: "64,138,574,223",
    shape: "rect",
  },
  {
    alt: "BSI (British Standards Institution)",
    title: "BSI (British Standards Institution)",
    href: "/ig-required-memberships-bsi-british-standards-institution",
    coords: "68,637,652,725",
    shape: "rect",
  },
  {
    alt: "NABPS (National Association of Background Screeners)",
    title: "NABPS (National Association of Background Screeners)",
    href: "/ig-required-memberships-nabps-national-association-of-background-screeners",
    coords: "84,1058,962,1147",
    shape: "rect",
  },
  {
    alt: "UK Finance",
    title: "UK Finance",
    href: "/ig-required-memberships-uk-finance",
    coords: "96,1704,351,1785",
    shape: "rect",
  },
];
