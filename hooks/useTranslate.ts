import { useState, useEffect } from "react";

type Language = "en" | "fa";

const useData = (language: Language, file: string) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    try {
      const jsonData = require(`../locales/${language}/${file}.json`);
      setData(jsonData);
    } catch (error) {
      console.error(
        `Failed to load data from locales/${language}/${file}.json: `,
        error
      );
    }
  }, [file, language]);

  return data;
};

export default useData;
