import Button from "../../components/molecules/Button/Button";
import Text from "../../components/atoms/Text/Text";
import classes from "./Playground.module.css";
import Spinner from "../../components/atoms/Spinner/Spinner";
import Genre from "../../components/molecules/Genre/Genre";
import CastItem from "../../components/organisms/CastItem/CastItem";
import ContentItem from "../../components/organisms/ContentItem/ContentItem";

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
      <div className={classes["cast-items-wrapper"]}>
        <CastItem
          className={classes["cast-item"]}
          personId={2249745}
          personName="Archie Madekwe"
          imagePath="/tdTv1E3309yWTU9IdtdhZj1a1Zj.jpg"
        />
        <CastItem
          className={classes["cast-item"]}
          personId={2249745}
          personName="David Harbour"
          imagePath="/chPekukMF5SNnW6b22NbYPqAStr.jpg"
        />
      </div>
      <ContentItem
        className={classes["m-12"]}
        filmId={968051}
        imageSource="https://image.tmdb.org/t/p/w342/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg"
        title="The Nun II"
        rating={7}
        vote_count={562}
      />
    </div>
  );
};

export default Playground;
