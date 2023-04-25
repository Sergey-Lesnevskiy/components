import { matchPath } from 'react-router';
import { ROUTES } from '../routes';
import { Article } from 'components/Card/Card';
const urlNew = 'https://newsapi.org/';
const API_KEY = 'c2e5e6b5c91c4304912a4cb5ca0dc328';

interface responce {
  articles: Article[];
  status: string;
  totalResults: number;
}
const DATA_DICTIONARY: Record<string, (route: unknown) => Promise<unknown>> = {
  user(route) {
    return new Promise((resolve) => {
      fetch(`${urlNew}v2/everything?q=apple&apiKey=${API_KEY}`)
        .then((res) => res.json())
        .then((res) => resolve(res.articles));
    });
  },
};

export function fetchDataByUrl(url: string): Promise<unknown> {
  let route;

  const routeConfig = ROUTES.find(({ path }) => {
    const matchedRoute = matchPath(url, path);

    if (matchedRoute) {
      route = matchedRoute;
      return true;
    }

    return false;
  });
  if (routeConfig) {
    if (route && DATA_DICTIONARY[routeConfig.key]) {
      return DATA_DICTIONARY[routeConfig.key](route);
    }
  }

  return Promise.resolve({});
}
