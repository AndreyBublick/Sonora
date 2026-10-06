import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-100 d-flex flex-column align-items-center justify-content-center vh-100">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-4 text-secondary">Страница не найдена</p>
            <Link href="/" className="btn btn-primary mt-3">
                На главную
            </Link>
        </div>
    );
}