const fs = require("fs");
const path = require("path");

// Define the base directory
const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");

// ✅ Corrected: Use "title" instead of "tile"
const pages = [
  {
    title: "3.3.4.2 Details",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.4.3 Results",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.4.4 History",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.5 Application Pending for the DBS",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.5.1 Continue DBD Application",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.5.2 Details",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.5.3 Results",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.5.4 History",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.6 DBS Application Requiring Payment List",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.7 DBS Application Already Paid For",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.8 Completed DBS Checks",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.8.1 Application with DBS Result",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.8.2 Erased Applications",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.9 App Pending for Evidence Check",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.9.1   Check DBS - Application",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.9.2  View Application Details",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.9.3 History",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.9.4 Reject DBS Application",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.10 DBS Certificate Eligible for Reprint",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.10.1  Reprint",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.10.2 View Application Details",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.10.3 Results",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.11 DBS Company Admin Spend History for your DBS Checks",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.3.12 DBS Company Admin Successful Payments to Your DBS Accounts",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4 My Accounts",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4.1 Invoices",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: " 3.4.1.1 Create Invoice",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4.1.2  Invoice Listing",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4.2 Adjustment",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },

  {
    title: "3.4.2.1 Adjust DBS Fee to Admin Fee",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4.2.2 Adjust Admin Fee to DBS Fee",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4.3 Transaction",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4.4 Payments",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4.5 Spent",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4.6 Refund",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4.6.1 Create Refund",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4.6.2 List of Refunded Amounts",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4.7 User Spent",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4.8 Balance Details",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4.8.1 Funds Deposited",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.4.8.2 Funds Remaining",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.5 Trainings",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.6 Report",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.7 Notifications",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.8 Support",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.8.1 Help",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.8.2 User Manual",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "3.9 Header",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "4. Counter Signatory",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "4.1 Dashboard",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "4.1.1 DBS Application To Be Reviewed",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "4 .1.2 Post Comment on Applications",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "4.1.3 DBS App List",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "4.2 View Assigned Applications",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "4.2.1 Companies",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "4.2.2 Individual User",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "4.3 Post Comment on Application",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "4.3.1 Companies",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "4.3.2  Individual User",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "4.3.3  DBS Applications List",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5. Evidence Checker",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.1 Dashboard",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.1.1 Assigned Applicants for DBS",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.1.2 Application Pending Evidence Check",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.1.3 Fix issues with Applications",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.1.4 Incomplete DBS Application",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.1.5 Reject DBS Application",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.1.6 DBS Application requirement payment",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.1.6.1 Action Attributes",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.1.7 Application Pending for the DBS",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.1.8 DBS Application already Paid For",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.1.8.1 DBS Application already Paid",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.1.9 Completed DBS checks Certificate posted out",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.1.10 DBS Certificate Eligible for reprint(if not received)",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.1.10.1 DBS Certificate Eligible for reprint(if not received)",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.2 DBS Application",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.2.1 View Assigned DBS Application",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.2.2 Fix Issues with Applications",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.2.3 Application Pending for DBS",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.2.4 Rejected DBS Application",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.2.5 Application Pending Evidence Checker",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.2.6 Completed DBS Checks-Certificate Posted Out",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.2.6.1 Application with DBS Result",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
  {
    title: "5.2.6.2 Erased Applications",
    ButtonRoute: "ig-product-diagramrelease-1-chekc-my-dbs",
  },
];

// Convert to PascalCase
const toPascalCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

// Convert to kebab-case
const toKebabCase = (str) =>
  str
    .replace(/[&/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

// For backRoute
const toKebabRoute = (str) =>
  str
    .replace(/[&/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

for (const page of pages) {
  const { title, ButtonRoute } = page;

  if (!title || typeof title !== "string" || !title.trim()) {
    console.log("[SKIP] Invalid or empty page title. Skipping entry.");
    continue;
  }

  const kebabBase = toKebabCase(title);
  const pascal = toPascalCase(title);

  if (!kebabBase || !pascal) {
    console.log(
      `[SKIP] Could not generate valid names for title: '${title}'. Skipping.`,
    );
    continue;
  }

  const imageName = `${pascal}Image`;
  const svgFile = `${imageName}.svg`;

  // Check for existing directory
  let dir = path.join(baseDir, kebabBase);
  let dirSuffix = 1;
  let finalKebab = kebabBase;
  const maxTries = 100;

  while (fs.existsSync(dir) && dirSuffix < maxTries) {
    finalKebab = `${kebabBase}-section${dirSuffix}`;
    dir = path.join(baseDir, finalKebab);
    dirSuffix++;
  }

  if (dirSuffix >= maxTries) {
    console.log(
      `[ERROR] Too many duplicate directories for '${title}'. Skipping.`,
    );
    continue;
  }

  if (finalKebab !== kebabBase) {
    console.log(
      `Directory for page '${title}' already exists. Created: ${finalKebab}`,
    );
  }

  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Directory created: ${dir}`);
    } catch (err) {
      console.log(`[ERROR] Failed to create directory '${dir}':`, err.message);
      continue;
    }
  } else {
    console.log(`[SKIP] Directory already exists and was not created: ${dir}`);
  }

  const kebabAmendmentButtonRoute = ButtonRoute
    ? `/${toKebabRoute(ButtonRoute)}`
    : "";

  // Create page.tsx
  const pageContent = `import { ${imageName} } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ${pascal}Page = () => {
  return (
    <AmendmentComparison
      pageTitle={\`Mental Health / Mental Health  Act 1983 / Part V / ${title}\`}
      src={${imageName}}
      backRoute="/"
      amendmentButtonRoute="${kebabAmendmentButtonRoute}"
    />
  );
};

export default ${pascal}Page;
`;

  try {
    fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");
    console.log(`page.tsx created in: ${dir}`);
  } catch (err) {
    console.log(`[ERROR] Failed to write page.tsx in '${dir}':`, err.message);
    continue;
  }

  // Append export to index.tsx
  const indexTsxPath = path.join(assetsDir, "index.tsx");
  const imageExport = `export { default as ${imageName} } from "./${svgFile}";\n`;

  let shouldWriteExport = true;

  if (fs.existsSync(indexTsxPath)) {
    try {
      const indexContent = fs.readFileSync(indexTsxPath, "utf8");
      if (indexContent.includes(imageExport.trim())) {
        shouldWriteExport = false;
        console.log(
          `Export for image '${imageName}' already exists in index.tsx. Skipping export.`,
        );
      }
    } catch (err) {
      console.log(`[ERROR] Failed to read index.tsx:`, err.message);
      shouldWriteExport = false;
    }
  }

  if (shouldWriteExport) {
    try {
      fs.appendFileSync(indexTsxPath, imageExport);
      console.log(`Export for image '${imageName}' added to index.tsx.`);
    } catch (err) {
      console.log(`[ERROR] Failed to append export to index.tsx:`, err.message);
    }
  }
}

console.log("Pages and image exports have been created.");
