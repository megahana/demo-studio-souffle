import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'Studio Souffle — Yoga à Annecy',description:'Studio de yoga. Annecy.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
