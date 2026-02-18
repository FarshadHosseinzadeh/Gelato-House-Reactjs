import { Button } from "../base/button";

export const Header: React.FC = () => {
  return (
    <header>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          console.log("hello");
        }}
      >
        کلیک کن
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          console.log("hello");
        }}
      >
        کلیک کن
      </Button>
      <Button
        variant="text"
        color="primary"
        onClick={() => {
          console.log("hello");
        }}
      >
        کلیک کن
      </Button>
    </header>
  );
};
