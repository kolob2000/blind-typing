import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectLang } from "../dashboard/selectors.js";

export const fetchText = createAsyncThunk(
  "text/fetchText",
  async (arg, { getState }) => {
    const lang = selectLang(getState());
    const ruUrl = "https://fish-text.ru/get?format=html&number=5";
    const engUrl = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=2";
    try {
      if (lang === "ru") {
        const res = await fetch(ruUrl);
        const text = await res.text();
        return text.replace("<p>", "").replace("</p>", "");
      } else {
        const res = await fetch(engUrl, {
          headers: {
            "X-Api-Key": "ymJXRHplv7cRFVT1kzjDIw==5QyiWxsDeg5kx94z",
            //  забыл добавить комментарий - ключ в открытом в виде только для вас,
            //  для проверки, так он должен быть в переменной среды.
            "Content-Type": "application/json",
          },
        });
        const text = await res.json();
        return text.text
          .replace(/[^\w\s.,!?]/g, "")
          .replace(/\t/g, "")
          .replace(/\n/g, "");
      }
    } catch (e) {
      console.log(e.message);
    }
  }
);
