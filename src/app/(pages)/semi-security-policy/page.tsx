import { SemiFeesAndLeviesImage } from "@/assets";
import { CommonPage } from "@/components";

const SemiSecurityPolicyPage = () => {
  return (
    <CommonPage
      pageTitle="Security policy"
      src={SemiFeesAndLeviesImage}
      backRoute="/semi"
    />
  );
};

export default SemiSecurityPolicyPage;
