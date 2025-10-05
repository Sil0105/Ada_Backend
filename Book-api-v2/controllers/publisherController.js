import { publisherModel } from '../models/publisherModel.js';

export const publisherController = {
  getPublishers: () => {
    const publishers = publisherModel.readPublishers();
    return JSON.stringify({ status: 'ok', data: publishers });
  },
  addPublisher: (newPublisher) => {
    const publishers = publisherModel.readPublishers();
    const maxId = publishers.length > 0 ? Math.max(...publishers.map(p => p.id)) : 0;
    newPublisher.id = maxId + 1;
    publishers.push(newPublisher);
    publisherModel.writePublishers(publishers);
    return JSON.stringify({ status: 'ok', data: newPublisher });
  }
};