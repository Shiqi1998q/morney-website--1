import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Money from "./routes/Money";
import Tags from "./routes/Tags";
import Statistics from "./routes/Statistics";
import 'index.scss'
import { Tag } from 'routes/Tag';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <HashRouter>
    <Routes>
      {/* //相当于路由吧，路径不同，选择不同的页面 */}
      <Route path="/" element={<Money />} />
      <Route path="Money" element={<Money />} />
      <Route path="Statistics" element={<Statistics />} />
      <Route path="Tags" element={<Tags />} />
      <Route path="tags" >
        <Route path=":id" element={<Tag />} />
      </Route>

      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </HashRouter>
);


reportWebVitals();
