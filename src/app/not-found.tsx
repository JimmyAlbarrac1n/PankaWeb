import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
            <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8">
                Página no encontrada
            </p>
            <Link
                href="/"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
                Volver al inicio
            </Link>
        </div>
    );
}
