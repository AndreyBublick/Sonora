const Spinner = () => {
    return <span className="spinner-border" role="status" aria-label="Loading" />
};

export const Fallback = ({}) => {

    return (
        <div className="d-flex gap-3 flex-column justify-content-center align-items-center" style={{ minHeight: "100dvh" }}>
            <Spinner />
            <div>Logging in...</div>
        </div>
    );

};