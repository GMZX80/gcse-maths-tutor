import { useEffect, useMemo, useState } from "react";
import { LessonPage } from "./components/LessonPage";
import { getLessonBySlug, lessons } from "./content/lessons";
import "./styles/app.css";

function getCurrentRoute() {
  return window.location.hash.replace(/^#\/?/, "") || `lesson/${lessons[0].slug}`;
}

export default function App() {
  const [route, setRoute] = useState(getCurrentRoute);

  useEffect(() => {
    function handleHashChange() {
      setRoute(getCurrentRoute());
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const lesson = useMemo(() => {
    const [, slug] = route.split("/");
    return getLessonBySlug(slug) ?? lessons[0];
  }, [route]);

  return (
    <main>
      <LessonPage lesson={lesson} />
    </main>
  );
}
