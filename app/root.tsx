import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { StyleSheet, Colors } from "./utils/StyleSheet";
import { Route } from "./routes/+types/home";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  const styles = StyleSheet.create({
    root: {
      backgroundColor: Colors.background,
      color: Colors.text.primary,
      minHeight: '100vh',
      fontFamily: 'Inter, system-ui, sans-serif'
    }
  });

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={styles.root}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const styles = StyleSheet.create({
    container: {
      paddingTop: '4rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      margin: '0 auto',
      maxWidth: '80rem'
    },
    title: {
      color: Colors.primary,
      fontSize: '2rem',
      marginBottom: '1rem'
    },
    message: {
      color: Colors.text.secondary,
      marginBottom: '1.5rem'
    },
    stack: {
      width: '100%',
      padding: '1rem',
      overflowX: 'auto',
      backgroundColor: Colors.primary,
      color: Colors.text.light,
      borderRadius: '0.375rem'
    }
  });

  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>{message}</h1>
      <p style={styles.message}>{details}</p>
      {stack && (
        <pre style={styles.stack}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}