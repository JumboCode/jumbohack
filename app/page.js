import styles from './page.module.css';
import Image from 'next/image';

import Example from '@/components/example';
import Card from '@/components/card';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/jumbohack_full.svg"
        alt="JumboHack Logo"
        width={400}
        height={96}
      />
      <p>Welcome to JumboHack, nerds</p>
      <Example />
      <Card 
        card = "Sup Gamers!"
      />
    </main>
  )
}
