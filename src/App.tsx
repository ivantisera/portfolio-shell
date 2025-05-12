import { ShellLayout } from "./layout/ShellLayout";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <ShellLayout>
        <div id="microfrontend-container" />
      </ShellLayout>
    </>
  );
}

export default App;
