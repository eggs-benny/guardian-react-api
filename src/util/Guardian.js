import apiKey from "./apiKey";
const apiUrlStem = `https://content.guardianapis.com/search?api-key=`
const fields = `&show-fields=thumbnail,headline,byline&order-by=newest`

const Guardian = {
  async getArticles() {
    try {
      const res = await fetch(`${apiUrlStem}${apiKey}${fields}`);
      const jsonRes = await res.json();
      if (!jsonRes) {
        return []
      }
      return jsonRes.response.results.map((article) => {
        return {
          id: article.id,
          headline: article.fields.headline,
          image: article.fields.thumbnail
        };
      });
    } catch (error) {
      console.error(error);
      return []
    }
  }
}

export default Guardian