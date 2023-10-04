import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Error from "../../components/molecules/Error/Error";
import Spinner from "../../components/atoms/Spinner/Spinner";

import classes from "./Person.module.css";

import useHttp from "../../hooks/use-http";

const Person = () => {
  const { sendRequest, error } = useHttp();

  const [loading, setLoading] = useState(true);
  // const [personDetails, setPersonDetails] = useState({});

  const { id: personId } = useParams();

  useEffect(() => {
    sendRequest({ url: `/person/${personId}?language=en-US` }, (data) => {
      console.log(data);
      setLoading(false); // ??
    });
  }, [sendRequest, personId]);

  if (error) {
    return (
      <div>
        <Error>There was an error gathering that film.</Error>
      </div>
    );
  }
  if (loading) {
    return (
      <div className={classes["spinner-container"]}>
        <Spinner />
      </div>
    );
  }

  return <div>Page in progress</div>;
};

export default Person;
