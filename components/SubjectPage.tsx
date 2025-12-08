import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { subjects } from '../data/subjects';
import ThemeToggle from './ThemeToggle';

const SubjectPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const subject = subjects.find(s => s.slug === slug);

    if (!subject) {
        return (
            <div className="min-h-screen bg-premium-black flex items-center justify-center">
                <div className="text-center">
                    <p className="text-content-muted text-lg mb-4">Materia non trovata</p>
                    <button
                        onClick={() => navigate('/subjects')}
                        className="text-premium-gold underline"
                    >
                        Torna all'indice
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-premium-black text-content-primary leading-relaxed selection:bg-premium-gold/30">
            {/* Background Gradient */}
            <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-premium-gray/40 via-premium-black to-[var(--bg-body)] pointer-events-none" />

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-primary bg-premium-black/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/subjects')}
                            className="text-content-muted hover:text-content-primary transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <h1 className="font-serif text-lg tracking-wider text-content-primary">
                            {subject.title.split(' ')[0].toUpperCase()} <span className="text-premium-gold italic">{subject.title.split(' ').slice(1).join(' ')}</span>
                        </h1>
                    </div>
                    <ThemeToggle />
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 max-w-4xl mx-auto px-6 py-32 sm:py-40">

                {/* Header Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono text-premium-gold uppercase tracking-widest border border-premium-gold/30 px-2 py-1 rounded">
                            {subject.year}
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-content-primary via-content-secondary to-content-muted tracking-tight">
                        {subject.title}
                    </h2>
                </div>

                {/* To Do Card */}
                <div className="border-2 border-dashed border-border-primary rounded-2xl p-12 text-center">
                    <div className="text-6xl mb-6 opacity-40">🚧</div>
                    <h3 className="text-2xl font-serif font-bold text-content-primary mb-4">
                        Contenuto in arrivo
                    </h3>
                    <p className="text-content-muted max-w-md mx-auto mb-8">
                        Gli appunti per questo corso sono attualmente in fase di sviluppo. Torna presto per scoprire i nuovi contenuti!
                    </p>

                    <div className="inline-flex flex-col gap-2 text-left text-sm text-content-muted bg-premium-glass p-6 rounded-xl border border-border-primary">
                        <p className="font-mono text-xs text-premium-gold uppercase tracking-widest mb-2">To Do:</p>
                        <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
                            <input type="checkbox" disabled className="accent-premium-gold" /> Creare struttura del corso
                        </label>
                        <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
                            <input type="checkbox" disabled className="accent-premium-gold" /> Aggiungere lezioni
                        </label>
                        <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
                            <input type="checkbox" disabled className="accent-premium-gold" /> Inserire esempi e formule
                        </label>
                        <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
                            <input type="checkbox" disabled className="accent-premium-gold" /> Revisione finale
                        </label>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-border-primary py-8 mt-auto">
                <div className="text-center text-sm text-content-muted">
                    &copy; 2024 Singh Rishapveer
                </div>
            </footer>
        </div>
    );
};

export default SubjectPage;
