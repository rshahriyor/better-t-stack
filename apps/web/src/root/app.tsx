import { Outlet } from "react-router";
import { PrimeReactProvider } from 'primereact/api';

export default function App() {
  return (
    <PrimeReactProvider>
      <Outlet />
    </PrimeReactProvider>
  );
}