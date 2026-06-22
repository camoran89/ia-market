import 'reflect-metadata';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import request from 'supertest';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from '../../src/app/app.module.js';

let app: NestFastifyApplication;

beforeAll(async () => {
  app = await NestFactory.create(AppModule, new FastifyAdapter());
  await app.init();
  await app.getHttpAdapter().getInstance().ready();
});

afterAll(async () => {
  await app.close();
});

describe('App integration tests', () => {
  it('should return buyer transactions', async () => {
    const response = await request(app.getHttpServer())
      .get('/buyer/transactions')
      .query({ userId: 'user-1' });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should process chat message', async () => {
    const response = await request(app.getHttpServer())
      .post('/chat/message')
      .send({ text: 'quiero buscar un café' });

    expect(response.status).toBe(201);
    expect(response.body.intent).toBe('search');
    expect(response.body.search).toBeDefined();
  });

  it('should execute search', async () => {
    const response = await request(app.getHttpServer())
      .post('/search')
      .send({ query: 'café' });

    expect(response.status).toBe(201);
    expect(response.body.query).toBe('café');
  });

  it('should validate receipt', async () => {
    const response = await request(app.getHttpServer())
      .post('/receipt/validate')
      .send({ type: 'pdf', size: 1000, content: 'dummy' });

    expect(response.status).toBe(201);
    expect(response.body.valid).toBeDefined();
  });

  it('should authenticate a user', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'user@example.com', password: 'secret' });

    expect(response.status).toBe(201);
  });

  it('should register a user', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ id: 'user-1', email: 'user@example.com', password: 'secret' });

    expect(response.status).toBe(201);
    expect(response.body.email).toBe('user@example.com');
  });

  it('should register subscription', async () => {
    const response = await request(app.getHttpServer())
      .post('/subscription/register')
      .send({ vendorId: 'vendor-1', plan: 'premium' });

    expect(response.status).toBe(201);
    expect(response.body.registered).toBe(true);
  });

  it('should list seller orders', async () => {
    const response = await request(app.getHttpServer())
      .get('/seller/orders')
      .query({ vendorId: 'vendor-1' });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
