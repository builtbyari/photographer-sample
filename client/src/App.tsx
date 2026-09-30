import ErrorBoundary from "./components/ErrorBoundary";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <ErrorBoundary>
      <Projects />
    </ErrorBoundary>
  );
}
