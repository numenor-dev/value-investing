import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Company = {
    name: string;
    ticker: string;
    description: string;
    relevance: string;
}

type QuestionnaireStore = {
    
    hobbies: string[];
    setHobbies: (hobbies: string[]) => void;
    
    refinedHobbies: Record<string, string[]>;
    setRefinedHobbies: (options: Record<string, string[]>) => void;
    
    selectedRefinedHobbies: string[];
    setSelectedRefinedHobbies: (hobbies: string[]) => void;
    
    companies: Company[];
    setCompanies: (companies: Company[]) => void;
    
    reset: () => void;
};

export const useQuestionStore = create<QuestionnaireStore>()(
    persist(
        (set) => ({
            hobbies: [],
            setHobbies: (hobbies) => set({ hobbies }),
            
            refinedHobbies: {},
            setRefinedHobbies: (options) => set({ refinedHobbies: options }),
            
            selectedRefinedHobbies: [],
            setSelectedRefinedHobbies: (hobbies) => set({ selectedRefinedHobbies: hobbies }),
            
            companies: [],
            setCompanies: (companies) => set({ companies }),
            
            reset: () => set({
                hobbies: [],
                refinedHobbies: {},
                selectedRefinedHobbies: [],
                companies: []
            }),
        }),
        {
            name: 'questionnaire-storage',
            storage: {
                getItem: (name) => {
                    const item = sessionStorage.getItem(name);
                    return item ? JSON.parse(item) : null;
                },
                setItem: (name, value) => sessionStorage.setItem(name, JSON.stringify(value)),
                removeItem: (name) => sessionStorage.removeItem(name),
            },
        }
    )
);