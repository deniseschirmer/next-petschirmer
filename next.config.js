/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  env: {
    USER_ID: process.env.USER_ID,
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    EMAIL: process.env.EMAIL,
  },
};
// next.config.js

module.exports = nextConfig;