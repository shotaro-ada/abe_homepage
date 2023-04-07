import React from "react";
import ReactDOM from "react-dom";
import Home from "./views/home";

const Main = () => {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: "200px",
        width: "100%",
      }}
    >
      <Home />
    </div>
  );
};

//サイトのheadを取得
const head = document.querySelector("head");
//サイトのbodyを取得
const frameset = document.body;
//このアプリの元となる要素を作成
const body = document.createElement("body");
body.style.margin = "0";

const left = frameset.querySelector("frame:nth-child(1)");
const right = frameset.querySelector("frame:nth-child(2)");
//以下2行でframe内のドキュメントのbodyを取得
const leftbody = left?.contentDocument.body as HTMLElement;
const rightbody = right?.contentDocument.body as HTMLElement;

//body内にMainをレンダー
ReactDOM.render(<Main />, body);
// frameset.prepend(app);

//headの次にbodyを追加
head?.after(body);

//このページの元々あった要素全てを削除
frameset.remove();
