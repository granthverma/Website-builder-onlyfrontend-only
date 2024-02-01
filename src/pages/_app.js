
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Layout from '../components/Layout'; // Adjust the path accordingly

function MyApp({ Component, pageProps }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DndProvider>
  );
}

export default MyApp;
