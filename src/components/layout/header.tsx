import { Button } from "../base/button";

export const Header: React.FC = () => {
  return (
    <header>
      <Button
        variant="contained"
        onClick={() => {
          console.log("hello");
        }}
      >
        کلیک کن
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          console.log("hello");
        }}
      >
        کلیک کن
      </Button>
      <Button
        variant="text"
        onClick={() => {
          console.log("hello");
        }}
      >
        کلیک کن
      </Button>
    </header>
  );
};
