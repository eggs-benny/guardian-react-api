import apiKey from "./apiKey";
const apiUrlStem = `https://content.guardianapis.com/search?api-key=`

const Guardian = {
  async getArticles() {
    try {
      const res = await fetch(`${apiUrlStem}${apiKey}`);
      const jsonRes = await res.json();
      if (!jsonRes) {
        return []
      }
      return jsonRes.response.results.map((article) => {
        return {
          id: article.id,
          headline: article.webTitle
        };
      });
    } catch (error) {
      console.error(error);
      return []
    }
  }
}

export default Guardian