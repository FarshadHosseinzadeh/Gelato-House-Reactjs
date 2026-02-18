import { Button } from "../base/button";
import Container from "../base/container";
import Logo from "src/components/base/logo";

export const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-2">
          <div>
            <Logo></Logo>
          </div>
          <div className="[&>Button]:mr-2 flex items-center">
            <div className="hidden md:flex">
              <Button
                variant="text"
                color="primary"
                onClick={() => {
                  console.log("hello");
                }}
              >
                سفارش اینترنتی
              </Button>
              <Button
                variant="text"
                color="primary"
                onClick={() => {
                  console.log("hello");
                }}
              >
                قوانین سایت
              </Button>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                console.log("hello");
              }}
            >
              ورود
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
