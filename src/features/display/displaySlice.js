import {FRONTPAGE} from '../../app/shared/FRONTPAGE'

export const selectAllFrontPages = () => {
    return FRONTPAGE;
};

export const selectFrontPageById = (id) => {
    return FRONTPAGE.find((news) => news.id === id);
};

export const selectFeaturedFrontPage = () => {
    return FRONTPAGE.find((news) => news.featured);
};
