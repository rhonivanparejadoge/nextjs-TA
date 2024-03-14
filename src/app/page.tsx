import styles from './page.module.scss';

import PageTabs from "./components/Tabs/Tabs";

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')

  if (!res.ok) {
    // Throw error if the api has errors
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <PageTabs galleryData={data} />
    </main>
  );
}
