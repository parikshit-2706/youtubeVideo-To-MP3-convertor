import { useState } from "react";
import "./styles.css";
import axios from "axios";
import Download from "./Download";

export default function App() {
  const [videoid, setVideoid] = useState("");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      params: { id: videoid },
      headers: {
        "X-RapidAPI-Key": "f01cd2e788msh79a1ca825ebb054p16395bjsn9d20a26b241c",
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.link);
        console.log(response.data.title);

        setLink(response.data.link);
        setTitle(response.data.title);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <h2>Youtube video to MP3 convertor </h2>
      <p>
        Enter the video id present in the url here, and your mp3 is ready !{" "}
      </p>

      <p>Find your video id like this 👇🏽 </p>

      <img
        src="https://camo.githubusercontent.com/78e1ba6715553b6712b68ebbb3f520ddfa0b5e7c24801dd9901a5c3ba1d8211f/687474703a2f2f692e696d6775722e636f6d2f4f6c776b3463722e706e67"
        alt="youtube video id"
        height="80vw"
      />

      <form className="link--form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setVideoid(e.target.value);
          }}
          value={videoid}
          placeholder="enter video id here"
        ></input>

        <button type="submit">Get mp3 </button>
      </form>

      {/* <button>
        <a href={link}>Download mp3</a>
      </button> */}

      <Download title={title} url={link} />
    </div>
  );
}
