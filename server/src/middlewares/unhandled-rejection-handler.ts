const unhandledRejection = (): void => {
    process.on('unhandledRejection', (reason, promise) => {
        console.error(`${reason}, Unhandled Rejection at Promise, ${promise}`);
        process.exit(1);
    });
};

export default unhandledRejection;
