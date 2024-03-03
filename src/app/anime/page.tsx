"use client";

import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
const ANIME_CHARAC = gql`
  {
    Page {
      media {
        siteUrl
        title {
          english
          native
        }
        description
      }
    }
  }
`;

const Anime = () => {
  const { data, loading, error } = useQuery(ANIME_CHARAC);
  console.log(data, loading, error);

  return <div>Anime</div>;
};

export default Anime;
