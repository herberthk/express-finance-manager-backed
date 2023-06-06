declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      PORT: string;
      SECRET_KEY: string;
      SMTP: string;
      SMTP_PASSWORD: string;
      SMTP_USER: string;
    }
  }
}

export {}
