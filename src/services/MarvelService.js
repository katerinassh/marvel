import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
    const { loading, error, request, clearError } = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=3f4c584f12ab517d6b61d98cbf008198';
    const _baseCharactersOffset = 200;

    const getAllCharacters = async (offset = _baseCharactersOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(character => __transformCharacter(character));
    }

    const getCharacterById = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return __transformCharacter(res.data.results[0]);
    }

    const __transformCharacter = (res) => {
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

    return { loading, error, getAllCharacters, getCharacterById }
}

export default useMarvelService;