const uncaughtException = (): void => {
    process.on('unhandledRejection', (error) => {
        console.error(`${error}, Uncaught Exception thrown`);
        process.exit(1);
    });
};

export default uncaughtException;
