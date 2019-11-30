import trlEng from './en';

const trl = (key: string): string => trlEng[key] ? trlEng[key] : '';

export default trl;
