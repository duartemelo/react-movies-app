import Button from "../../components/molecules/Button/Button";
import Text from "../../components/atoms/Text/Text";
import classes from "./Playground.module.css";
import Spinner from "../../components/atoms/Spinner/Spinner";
import Genre from "../../components/molecules/Genre/Genre";

const Playground = () => {
  return (
    <div className={classes["pg-container"]}>
      <Text as="h1" color="var(--white)">
        Component Playground
      </Text>

      <Button size="sm">IMDB</Button>
      <Button size="sm" disabled>
        IMDB
      </Button>
      <Button size="sm" theme="secondary">
        IMDB
      </Button>
      <Button size="sm" theme="secondary" disabled>
        IMDB
      </Button>
      <Button size="sm" theme="tertiary">
        IMDB
      </Button>
      <Button size="sm" theme="tertiary" disabled>
        IMDB
      </Button>
      <br />

      <Button>IMDB</Button>
      <Button disabled>IMDB</Button>
      <Button theme="secondary">IMDB</Button>
      <Button theme="secondary" disabled>
        IMDB
      </Button>
      <Button theme="tertiary">IMDB</Button>
      <Button theme="tertiary" disabled>
        IMDB
      </Button>
      <br />

      <Button size="lg">IMDB</Button>
      <Button size="lg" disabled>
        IMDB
      </Button>
      <Button size="lg" theme="secondary">
        IMDB
      </Button>
      <Button size="lg" theme="secondary" disabled>
        IMDB
      </Button>
      <Button size="lg" theme="tertiary">
        IMDB
      </Button>
      <Button size="lg" theme="tertiary" disabled>
        IMDB
      </Button>
      <br />
      <Spinner className={classes.spinner} />
      <br />
      <Button size="sm" theme="primary" loading>
        IMDB
      </Button>
      <Button size="md" theme="primary" loading>
        IMDB
      </Button>
      <Button size="lg" theme="primary" loading>
        IMDB
      </Button>
      <br />
      <div style={{ display: "flex" }}>
        <Genre>action</Genre>
        <Genre>adventure</Genre>
        <Genre>horror</Genre>
        <Genre theme="danger">adult</Genre>
      </div>
    </div>
  );
};

export default Playground;
