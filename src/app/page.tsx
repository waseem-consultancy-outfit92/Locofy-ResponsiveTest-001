import { main1, main2 } from "@/assets";
import { MultiPathPage } from "@/components";
const ScopeOfRegistrationPageData = [
  {
    key: "scope-1",
    link: "/pay-day-loan",
    icon: main1,
    title: "Pay Day Loan",
  },
  {
    key: "scope-2",
    link: "/earned-wage-access-ewa",
    icon: main2,
    title: "Who Needs to Register?",
  },
];

export default function Home() {
  return (
    <MultiPathPage
      arrayData={ScopeOfRegistrationPageData}
      pageTitle="Pay Day Loan"
    />
  );
}
