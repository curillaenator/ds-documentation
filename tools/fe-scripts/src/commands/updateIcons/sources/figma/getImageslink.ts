import request from '../../core/request';

const getImagesLink = async (iconIds: string[], fileName: string, token: string) => {
  const res = await request(`/v1/images/${fileName}?ids=${iconIds.join(',')}&format=svg`, token);

  return res.images;
};

export default getImagesLink;
