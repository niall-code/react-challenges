import css from "./App.module.css";
import Content from "./components/Content";
import ContentAPI from "./components/ContentAPI";
import ContentAPIHooks from "./components/ContentAPIHooks";
import ContentHooks from "./components/ContentHooks";
import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className={css.App}>
            <NavBarForm />
            <Sidebar />
            {/* <Content /> */}
            {/* <ContentHooks /> */}
            {/* <ContentAPI /> */}
            <ContentAPIHooks />
        </div>
    );
}

export default App;
