import type {Metadata} from 'next';import './globals.css';
import {Analytics} from '@vercel/analytics/next';
export const metadata:Metadata={title:'Studio Souffle — Yoga à Annecy',description:'Studio de yoga. Annecy.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}<Analytics /></body></html>}
