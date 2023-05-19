import {NEWSANDUPDATES} from '../../app/shared/NEWSANDUPDATES';

export const selectAllNews = () => {
    return NEWSANDUPDATES;
};

export const selectNewsById = (id) => {
    return NEWSANDUPDATES.find((news) => news.id === parseInt(id));
};

export const selectFeaturedNews = () => {
    return NEWSANDUPDATES.find((news) => news.featured);
};

