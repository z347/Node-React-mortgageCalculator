import enValid from 'envalid';

const { cleanEnv, port, str } = enValid;

const envValidation = (): void => {
    cleanEnv(process.env, {
        SERVER_PORT: port(),
        MONGODB_URI: str()
    });
};

export default envValidation;
