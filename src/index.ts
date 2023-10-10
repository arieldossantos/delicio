import nicks from './data/nicks';

export const randomDelicioNickNames = () => {
  return nicks[Math.floor(Math.random() * nicks.length)];
};
