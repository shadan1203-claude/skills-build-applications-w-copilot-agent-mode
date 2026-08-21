import { Router } from 'express';
import type { Model } from 'mongoose';

export function createResourceRouter<T>(model: Model<T>): Router {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      response.json(await model.find().sort({ createdAt: -1 }).lean());
    } catch (error) {
      next(error);
    }
  });

  router.get('/:id', async (request, response, next) => {
    try {
      const record = await model.findById(request.params.id).lean();
      if (!record) {
        response.status(404).json({ error: 'Resource not found' });
        return;
      }
      response.json(record);
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (request, response, next) => {
    try {
      response.status(201).json(await model.create(request.body));
    } catch (error) {
      next(error);
    }
  });

  router.patch('/:id', async (request, response, next) => {
    try {
      const record = await model.findByIdAndUpdate(request.params.id, request.body, {
        new: true,
        runValidators: true,
      }).lean();
      if (!record) {
        response.status(404).json({ error: 'Resource not found' });
        return;
      }
      response.json(record);
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:id', async (request, response, next) => {
    try {
      const result = await model.findByIdAndDelete(request.params.id);
      if (!result) {
        response.status(404).json({ error: 'Resource not found' });
        return;
      }
      response.status(204).send();
    } catch (error) {
      next(error);
    }
  });

  return router;
}
