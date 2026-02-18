import type { JSX } from "react";
import AcceptanceBanner from "src/components/base/acceptanceBanner";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div>
      <AcceptanceBanner></AcceptanceBanner>
    </div>
  );
};

export default HomePage;
