import { RequestHandler } from "express";
import pkg from "../../package.json";
import fetch from 'node-fetch-commonjs';

type ProbeResult = {
  status: boolean;
  description: string;
};

const ProbeEnvironment = async (): Promise<ProbeResult> => {
  return {
    description: "REACT_APP_GRAPHQL_URI should be defined",
    status: process.env.REACT_APP_GRAPHQL_URI !== undefined,
  };
};

const ProbeApolloLiveness = async (): Promise<ProbeResult> => {
  const url = `${process.env.REACT_APP_GRAPHQL_URI}.well-known/apollo/server-health`;
  let status = false;

  try {
    const result = await fetch(url);
    status = result.ok;
  } catch {
    status = false;
  }

  return {
    description: `${url} should be live`,
    status,
  };
};

export const Liveness: RequestHandler = async (req, res) => {
  res.status(200).json({
    name: pkg.name,
    version: pkg.version,
    date: new Date(),
    status: true,
  });
};

export const Readiness: RequestHandler = async (req, res) => {
  const integrations: Array<ProbeResult> = await Promise.all([
    ProbeEnvironment(),
    ProbeApolloLiveness(),
  ]);
  const status = integrations.every((probe) => probe.status);

  res.status(200).json({
    name: pkg.name,
    version: pkg.version,
    date: new Date(),
    status,
    integrations,
  });
};
