class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=3f4c584f12ab517d6b61d98cbf008198';
    _baseCharactersOffset = 200;

    getResource = async (url) => {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response error with status ${response.status}, could not fetch ${url}`);
        }

        return response.json();
    }

    getAllCharacters = async (offset = this._baseCharactersOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(character => this.__transformCharacter(character));
    }

    getCharacterById = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this.__transformCharacter(res.data.results[0]);
    }

    __transformCharacter = (res) => {
        return {
            id: res.id,
            name: res.name,
            description: res.description ? `${res.description.slice(0, 210)}...`: 'Sorry, no any additional description',
            thumbnail: `${res.thumbnail.path}.${res.thumbnail.extension}`,
            homepage: res.urls[0].url,
            wiki: res.urls[1].url,
            comics: res.comics.items
        }
    }
}

export default MarvelService;