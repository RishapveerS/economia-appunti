import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { subjects, Subject } from '../data/subjects';
import ThemeToggle from './ThemeToggle';

type YearFilter = 'Year 1' | 'Year 2' | 'Year 3';

const yearTitles: Record<YearFilter, string> = {
    'Year 1': 'First Year',
    'Year 2': 'Second Year',
    'Year 3': 'Third Year',
};

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [selectedYear, setSelectedYear] = useState<YearFilter>(() => {
        return (localStorage.getItem('selectedYear') as YearFilter) || 'Year 1';
    });

    const filteredSubjects = subjects.filter(s => s.year === selectedYear);

    useEffect(() => {
        localStorage.setItem('selectedYear', selectedYear);
    }, [selectedYear]);

    const handleSubjectClick = (subject: Subject) => {
        if (subject.slug === 'economia') {
            navigate('/economia');
        } else {
            navigate(`/${subject.slug}`);
        }
    };

    return (
        <div className="h-screen bg-white dark:bg-[#0a0a0a] flex flex-col transition-colors duration-500 overflow-hidden">

            {/* Header */}
            <header className="w-full py-3 flex justify-center items-center relative shrink-0">
                <h1 className="font-serif italic text-3xl md:text-4xl text-black dark:text-white select-none">
                    College Notes
                </h1>
                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                    <ThemeToggle />
                </div>
            </header>

            {/* Strips Container */}
            <div className="flex-1 w-full flex items-center justify-center px-2 md:px-4 overflow-x-auto min-h-0">
                <div className="flex justify-start md:justify-center items-center gap-4 md:gap-6 h-full max-h-[60vh] w-max md:w-full md:max-w-[1800px] px-4">
                    {filteredSubjects.map((subject, index) => {
                        const isStaggered = index % 2 !== 0;

                        return (
                            <button
                                key={subject.slug}
                                onClick={() => handleSubjectClick(subject)}
                                className={`
                  group relative block h-[85%] hover:h-[95%] 
                  transition-all duration-500 ease-out cursor-pointer overflow-hidden
                `}
                                style={{ width: 'clamp(140px, 15vw, 240px)' }}
                            >
                                {/* Image IS the strip */}
                                <img
                                    src={subject.image}
                                    alt={subject.title}
                                    className="w-full h-full object-cover filter grayscale-[60%] brightness-95 dark:brightness-75
                               group-hover:grayscale-0 group-hover:brightness-100 dark:group-hover:brightness-100
                               transition-all duration-700 group-hover:scale-105"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                                    }}
                                />
                                {/* Title Overlay (on hover) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                flex flex-col justify-end p-4">
                                    <h3 className="font-serif text-white text-sm md:text-base leading-tight text-center">
                                        {subject.title}
                                    </h3>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Footer with Year Navigation */}
            <footer className="w-full py-4 text-center shrink-0">
                {/* Year Title */}
                <h2 className="font-serif italic text-xl md:text-2xl text-black dark:text-white mb-1 transition-all duration-300">
                    {yearTitles[selectedYear]}
                </h2>
                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-black/50 dark:text-white/50 mb-3">
                    Explore subjects from this year
                </p>

                {/* Year Navigation Buttons */}
                <div className="flex gap-10 justify-center text-base md:text-lg font-semibold uppercase tracking-widest">
                    {(['Year 1', 'Year 2', 'Year 3'] as YearFilter[]).map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`transition-colors duration-300 py-2 px-4 ${selectedYear === year
                                ? 'text-black dark:text-white border-b-2 border-black dark:border-white'
                                : 'text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60'
                                }`}
                        >
                            {year === 'Year 1' ? 'I Year' : year === 'Year 2' ? 'II Year' : 'III Year'}
                        </button>
                    ))}
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
