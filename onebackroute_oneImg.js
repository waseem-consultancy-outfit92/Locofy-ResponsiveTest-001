const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

const pages = [
  {
    name: "IG Required License AMLD (5th Anti-Money Laundering Directive) Where to Apply",
    backRoute:
      "/IG Required License AMLD (5th Anti-Money Laundering Directive)",
  },
  {
    name: "IG Required License AMLD (5th Anti-Money Laundering Directive) Application Process",
    backRoute:
      "/IG Required License AMLD (5th Anti-Money Laundering Directive)",
  },
  {
    name: "IG Required License AMLD (5th Anti-Money Laundering Directive) Validity of the Certificate",
    backRoute:
      "/IG Required License AMLD (5th Anti-Money Laundering Directive)",
  },
  {
    name: "IG Required License AMLD (5th Anti-Money Laundering Directive) Cost Breakdown",
    backRoute:
      "/IG Required License AMLD (5th Anti-Money Laundering Directive)",
  },
  {
    name: "IG Required License AMLD (5th Anti-Money Laundering Directive) Purpose of Product Certification",
    backRoute:
      "/IG Required License AMLD (5th Anti-Money Laundering Directive)",
  },
  {
    name: " IG Required License AMLD (5th Anti-Money Laundering Directive) Eligibility Criteria",
    backRoute:
      "/IG Required License AMLD (5th Anti-Money Laundering Directive)",
  },
  {
    name: "IG Required License AMLD (5th Anti-Money Laundering Directive) Timeline For Certification",
    backRoute:
      "/IG Required License AMLD (5th Anti-Money Laundering Directive)",
  },
  {
    name: " IG Required License AMLD (5th Anti-Money Laundering Directive) Required Documents",
    backRoute:
      "/IG Required License AMLD (5th Anti-Money Laundering Directive)",
  },
  {
    name: "Purpose of Product Certification",
    backRoute: "/IG Required License Disclosure and Baring Services (DBS))",
  },
  {
    name: "Required Documents",
    backRoute: "/IG Required License Disclosure and Baring Services (DBS))",
  },
  {
    name: "Where to Apply",
    backRoute: "/IG Required License Disclosure and Baring Services (DBS))",
  },
  {
    name: "Cost Breakdown",
    backRoute: "/IG Required License Disclosure and Baring Services (DBS))",
  },
  {
    name: "Eligibility Criteria",
    backRoute: "/IG Required License Disclosure and Baring Services (DBS))",
  },
  {
    name: "Timeline for Certification",
    backRoute: "/IG Required License Disclosure and Baring Services (DBS))",
  },
  {
    name: "Application Process",
    backRoute: "/IG Required License Disclosure and Baring Services (DBS))",
  },
  {
    name: "Validity of the Certificate",
    backRoute: "/IG Required License Disclosure and Baring Services (DBS))",
  },
  {
    name: "IG Required License FCA (Financial Conduct Authority) Where to Apply",
    backRoute: "/IG Required License FCA (Financial Conduct Authority)",
  },
  {
    name: "IG Required License FCA (Financial Conduct Authority) Application Process",
    backRoute: "/IG Required License FCA (Financial Conduct Authority)",
  },
  {
    name: "IG Required License FCA (Financial Conduct Authority) Cost Breakdown",
    backRoute: "/IG Required License FCA (Financial Conduct Authority)",
  },
  {
    name: "IG Required License FCA (Financial Conduct Authority) Validity of the Certificate",
    backRoute: "/IG Required License FCA (Financial Conduct Authority)",
  },
  {
    name: "Purpose of Product Certification",
    backRoute: "/IG Required License FCA (Financial Conduct Authority)",
  },
  {
    name: "IG Required License FCA (Financial Conduct Authority) Eligibility Criteria",
    backRoute: "/IG Required License FCA (Financial Conduct Authority)",
  },
  {
    name: "Timeline For Certification",
    backRoute: "/IG Required License FCA (Financial Conduct Authority)",
  },
  {
    name: "IG Required License FCA (Financial Conduct Authority)Required Documents",
    backRoute: "/IG Required License FCA (Financial Conduct Authority)",
  },
  {
    name: "Purpose of Product Certification",
    backRoute:
      "/IG Required License NIST (National Institute of Standards and Technology)",
  },
  {
    name: "Required Documents",
    backRoute:
      "/IG Required License NIST (National Institute of Standards and Technology)",
  },
  {
    name: "Where to Apply",
    backRoute:
      "/IG Required License NIST (National Institute of Standards and Technology)",
  },
  {
    name: "Cost Breakdown",
    backRoute:
      "/IG Required License NIST (National Institute of Standards and Technology)",
  },
  {
    name: "Eligibility Criteria",
    backRoute:
      "/IG Required License NIST (National Institute of Standards and Technology)",
  },
  {
    name: "Timeline for Certification",
    backRoute:
      "/IG Required License NIST (National Institute of Standards and Technology)",
  },
  {
    name: "Application Process",
    backRoute:
      "/IG Required License NIST (National Institute of Standards and Technology)",
  },
  {
    name: "Validity of the Certificate",
    backRoute:
      "/IG Required License NIST (National Institute of Standards and Technology)",
  },
];

const toPascalCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

const toKebabCase = (str) =>
  str
    .trim()
    .replace(/[&/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

for (const page of pages) {
  const { name } = page;
  let { backRoute } = page;

  if (!name || typeof name !== "string" || !name.trim()) {
    console.log("[SKIP] Invalid or empty page name. Skipping entry.");
    continue;
  }

  const kebabBase = toKebabCase(name);
  const pascalBase = toPascalCase(name);

  // Determine directory name and image index
  let dir = path.join(baseDir, kebabBase);
  let finalKebab = kebabBase;
  let imageIndex = "";
  let dirSuffix = 0;

  while (fs.existsSync(dir) && dirSuffix < 100) {
    dirSuffix++;
    finalKebab = `${kebabBase}-section${dirSuffix}`;
    dir = path.join(baseDir, finalKebab);
    imageIndex = String(dirSuffix);
  }

  if (dirSuffix >= 100) {
    console.log(`[ERROR] Too many duplicates for '${name}'. Skipping.`);
    continue;
  }

  const imageName = `${pascalBase}Image${imageIndex}`;
  const svgFile = `${imageName}.svg`;
  const pascalComponent = `${pascalBase}Page${imageIndex}`;

  if (backRoute && typeof backRoute === "string") {
    backRoute = `/${toKebabCase(backRoute)}`;
  }

  // Create directory
  fs.mkdirSync(dir, { recursive: true });
  console.log(`✅ Created directory: ${dir}`);

  // Write page.tsx
  const pageContent = `import { ${imageName} } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ${pascalComponent} = () => {
  return (
    <CommonPage
      pageTitle={\`Validity of the Certificate\`}
      src={${imageName}}
      backRoute="${backRoute}"
    />
  );
};

export default ${pascalComponent};
`;

  fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");
  console.log(`✅ page.tsx created in: ${dir}`);

  // Write image export
  const imageExport = `export { default as ${imageName} } from "./${svgFile}";\n`;

  if (fs.existsSync(indexTsxPath)) {
    const content = fs.readFileSync(indexTsxPath, "utf8");
    if (!content.includes(imageExport.trim())) {
      fs.appendFileSync(indexTsxPath, imageExport);
      console.log(`✅ Export added to index.tsx: ${imageName}`);
    } else {
      console.log(`⚠️ Export for ${imageName} already exists. Skipped.`);
    }
  } else {
    fs.writeFileSync(indexTsxPath, imageExport);
    console.log(`✅ index.tsx created and export written.`);
  }
}

console.log("\n🎉 Page generation complete.");
