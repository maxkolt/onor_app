import styles from './App.module.css';
import { AppRoutes } from './routes';
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]); // Добавляем зависимость tg

  return (
    <div className={styles.container}>
      <AppRoutes />
    </div>
  );
}

export default App;
