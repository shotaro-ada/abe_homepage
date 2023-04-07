import React, { useState } from "react";
import axios from "axios";
import Encoding from "encoding-japanese";

const Home = () => {
  const [text, setText] = useState<string>();
  const handleClick = async () => {
    try {
      let doc = await axios.get("/tv/tv.htm");
      const sjisarray = Encoding.stringToCode(doc.data);
      const utf8text = Encoding.convert(sjisarray, {
        type:'string',
        to: 'UTF8',
        from: 'SJIS'
      });
      
      console.log(utf8text);
    } catch (e) {
      console.log(e);
    }

    // let request = new XMLHttpRequest();
    // let tv_htm = request.open(
    //   "GET",
    //   "http://abehiroshi.la.coocan.jp/tv/tv.htm"
    // );
    // console.log(tv_htm);
  };

  return (
    <>
      <div>
        {/* <a href="tv/tv.htm">fjdsalfjdsaklfjdsalfjdsalk;fjdsa;lk</a> */}
        <button onClick={handleClick}>aiueo</button>
        <div>{text}</div>
      </div>
    </>
  );
};

export default Home;
