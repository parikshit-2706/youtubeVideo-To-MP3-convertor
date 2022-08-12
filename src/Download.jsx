import react from "react";

function Download(props) {
  return (
    <div>
      {props.url === "" ? (
        <h4> Mp3 not found! </h4>
      ) : (
        <div>
          <h4>
            Your mp3, <span style={{ color: "salmon" }}>" {props.title} "</span>{" "}
            is ready!
          </h4>

          <button>
            <a href={props.url}>Download mp3</a>
          </button>
        </div>
      )}
    </div>
  );
}

export default Download;
