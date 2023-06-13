// src/mocks/handlers.js
import { rest } from "msw";
import paths from "../router/paths";
import { tokenMock } from "./userMocks";
import { extinguishersMock } from "./extinguishersMocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: tokenMock,
      })
    );
  }),

  rest.get(`${apiUrl}${paths.extinguishers}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ extinguishers: extinguishersMock }));
  }),

  rest.delete(`${apiUrl}${paths.extinguishers}/*`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Extinguisher deleted" }));
  }),

  rest.post(`${apiUrl}${paths.extinguishers}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ extinguisher: extinguishersMock[0] })
    );
  }),

  rest.get(`${apiUrl}${paths.extinguishers}/*`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ extinguisher: extinguishersMock[0] })
    );
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.post(`${apiUrl}${paths.extinguishers}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(`${apiUrl}${paths.extinguishers}/*`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({ message: "Extinguisher not found" })
    );
  }),

  rest.get(
    `${apiUrl}${paths.extinguishers}${paths.detail}/*`,
    (_req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({ message: "Extinguisher not found" })
      );
    }
  ),

  rest.get(`${apiUrl}${paths.extinguishers}`, (_req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ message: "Database error" }));
  }),
];
