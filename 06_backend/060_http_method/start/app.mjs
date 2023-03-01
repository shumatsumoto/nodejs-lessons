import * as http from "http";

/**
 * リクエストメソッド
 *
 * GETメソッド: コンテンツの取得
 * 　　　タイミング：ブラウザのURL指定、リンクのクリック、<form>のデフォルト
 *      特徴：URLの一部にパラメータを渡す
 *
 * POSTメソッド: コンテンツの作成
 * 　　　 タイミング：<form>のPOSTメソッド
 *       特徴：リクエストの本文にパラメータを渡す
 */

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.write(`<a href="/result?params=fafadfa">Get Method Link</a>`);
    res.end(`
      <form action="/result" method="POST">
        <input type="text" name="title">
        <input type="text" name="description">
        <input type="submit">
      </form>
    `);
  } else {
    console.log(req.url, req.method);
    if (req.method === "GET") {
      const getParams = new URLSearchParams(req.url);
      console.log(getParams);
    } else if (req.method === "POST") {
      let data = "";
      req.on("data", (chunk) => {
        data += chunk;
      });
      req.on("end", function () {
        const postParams = new URLSearchParams(data);
        console.log(postParams);
      });
    }
    res.end(req.url);
  }
});

server.listen(8080);
