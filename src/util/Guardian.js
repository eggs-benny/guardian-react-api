import apiKey from './apiKey';
const apiUrlStem = `https://content.guardianapis.com/search?api-key=`;
const fields = `&show-fields=thumbnail,headline,byline&order-by=newest`;

const Guardian = {
  async search(term) {
    try {
      const res = await fetch(`${apiUrlStem}${apiKey}${fields}&q=${term}`);
      const jsonRes = await res.json();

      if (!jsonRes) {
        return [] //{articles: [], error: "Couldn't xxx"}; // pete tip
      }

      return jsonRes.response.results.map((article) => {
        return {
          id: article.id,
          headline: article.fields.headline,
          image: article.fields.thumbnail,
          date: article.webPublicationDate,
          byline: article.fields.byline,
          url: article.webUrl
        };
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  }
};

export default Guardian;
