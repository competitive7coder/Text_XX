import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState("Please Enter");
  const [text1, setText1] = useState("Enter What You Want To Enter");
  const [textstyle, setTextstyle] = useState({});

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        {/* Heading with mouse hover effect */}
        <h4 className="text-center" onMouseEnter={() => setText(text.toUpperCase())}>
          {props.heading} - {text}
        </h4>

        <div className="mb-3 container">
          <label htmlFor="myBox" className="form-label">{props.subheading}</label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text1}
            onChange={(event) => setText1(event.target.value)}
            style={textstyle}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-2" onClick={() => setText1(text1.toUpperCase())}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={() => setText1(text1.toLowerCase())}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={() => setText1("")}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={() =>
          setTextstyle({ fontStyle: 'italic', fontSize: '18px', fontWeight: 'bold' })}>
          Make Italic
        </button>
        <button className="btn btn-primary mx-2" onClick={() => setTextstyle({})}>
          Make Normal
        </button>
      </div>

      <div className="container mt-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2 className="text-center">Your Text Summary</h2>
        <p className="text-center">{text1.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} words and {text1.length} characters</p>
        <p className="text-center">Time to read: {(0.008 * text1.split(" ").filter(Boolean).length).toFixed(2)} minutes</p>
        <h2 className="text-center">Preview Text</h2>
        <p className="text-center">{text1.length === 0 ? "Nothing to preview" : text1}</p>
      </div>
    </>
  );
}

// PropTypes for validation
TextForm.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mode: PropTypes.string.isRequired,
};

// Default props (passing it)
TextForm.defaultProps = {
  heading: "Enter your text here",
  subheading: "Enter Text Here",
};
