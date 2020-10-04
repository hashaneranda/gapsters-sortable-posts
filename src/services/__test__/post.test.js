import React from "react";
import axios from "axios";

jest.mock("axios");

import { fetchPosts } from "../posts";

describe("fetch Post Data", () => {
  it("fetches posts successfully data from an API", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: data,
      })
    );
  });
});
