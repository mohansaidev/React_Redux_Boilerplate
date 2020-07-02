import network from './network';
import { authConfig } from './apiReg';

import { baseUrl } from './constants';

const urls = {
  getSample: `${baseUrl}/API_url`,
};

const Sample = {
  getSample: (accessToken: string) => network.get(urls.getSample, {
    headers: {
      ...authConfig.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  }),
};

export default Sample;
